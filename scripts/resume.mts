/*
 * Generates ATS-friendly resumes (PDF + DOCX, English + Portuguese) from the
 * same content files the site uses, into /public.
 *
 *   pnpm resume
 *
 * PDF rendering uses a local Chrome. Override its path with CHROME_PATH.
 * ATS rules followed: single column, real text, standard section titles,
 * no tables/icons/headers-footers, contact info in the body.
 */
import { writeFile } from 'node:fs/promises'
import path from 'node:path'
import { chromium } from 'playwright-core'
import {
    AlignmentType,
    BorderStyle,
    Document,
    ExternalHyperlink,
    LevelFormat,
    Packer,
    Paragraph,
    Tab,
    TabStopType,
    TextRun,
} from 'docx'
import { localeMeta, locales, type Locale } from '../content/i18n'
import { profile, siteUrl } from '../content/profile'
import { education, experience } from '../content/experience'
import { stack } from '../content/stack'
import { resume } from '../content/resume'

const PUBLIC = path.join(process.cwd(), 'public')
const CHROME =
    process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

// ---------- shared data ----------

function month(iso: string, locale: Locale) {
    const [y, m] = iso.split('-').map(Number)
    return new Intl.DateTimeFormat(localeMeta[locale].htmlLang, { month: 'short', year: 'numeric', timeZone: 'UTC' })
        .format(new Date(Date.UTC(y, m - 1)))
        .replace('.', '')
        .replace(' de ', ' ')
        .replace(/^\w/, (c) => c.toUpperCase())
}

function build(locale: Locale) {
    const present = locale === 'en' ? 'Present' : 'Atual'
    const portfolio = `${siteUrl}${locale === 'pt' ? '/pt' : ''}`
    return {
        name: profile.fullName,
        headline: profile.role[locale],
        contacts: [
            { text: profile.location[locale] },
            { text: profile.email, href: `mailto:${profile.email}` },
            { text: 'linkedin.com/in/yanari', href: profile.linkedin },
            { text: 'github.com/yanari', href: profile.github },
            { text: portfolio.replace('https://', ''), href: portfolio },
        ],
        summary: resume.summary[locale],
        jobs: experience.map((job) => ({
            title: job.role[locale],
            company: job.company,
            location: job.location?.[locale],
            dates: `${month(job.start, locale)} – ${job.end ? month(job.end, locale) : present}`,
            bullets: resume.bullets[`${job.company}@${job.start}` as keyof typeof resume.bullets]?.[locale] ?? [
                job.summary[locale],
            ],
        })),
        skills: stack.map((g) => ({
            label: resume.skillLabels[g.key as keyof typeof resume.skillLabels]?.[locale] ?? g.key,
            items: g.items.join(', '),
        })),
        education: education.map((e) => ({
            course: e.course[locale],
            school: e.school,
            period: e.period ? `${e.period.replace(' — ', '–')}${e.period.includes('2028') ? ` (${resume.inProgress[locale]})` : ''}` : '',
        })),
        languages: resume.languages.map((l) => `${l.name[locale]} (${l.level[locale]})`).join(' · '),
        titles: Object.fromEntries(
            Object.entries(resume.sectionTitles).map(([k, v]) => [k, v[locale]])
        ) as Record<keyof typeof resume.sectionTitles, string>,
    }
}

type ResumeData = ReturnType<typeof build>

// ---------- PDF ----------

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;')

function html(d: ResumeData, locale: Locale) {
    return `<!doctype html><html lang="${localeMeta[locale].htmlLang}"><head><meta charset="utf-8">
<title>${esc(d.name)} — ${esc(d.headline)}</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font: 10pt/1.4 Arial, Helvetica, sans-serif; color: #111; }
  h1 { font-size: 20pt; line-height: 1.1; }
  .headline { font-size: 11.5pt; margin-top: 3px; color: #222; }
  .contacts { margin-top: 6px; font-size: 9.5pt; color: #333; }
  .contacts a { color: inherit; text-decoration: none; }
  h2 { font-size: 10.5pt; text-transform: uppercase; letter-spacing: .06em; border-bottom: 1px solid #999; padding-bottom: 2px; margin: 14px 0 6px; }
  .job { margin-bottom: 9px; break-inside: avoid; }
  .row { display: flex; justify-content: space-between; gap: 12px; }
  .title { font-weight: bold; }
  .meta { color: #444; font-size: 9.5pt; }
  ul { margin: 3px 0 0 16px; }
  li { margin-bottom: 2px; }
  .skills p { margin-bottom: 2px; }
</style></head><body>
<h1>${esc(d.name)}</h1>
<p class="headline">${esc(d.headline)}</p>
<p class="contacts">${d.contacts.map((c) => (c.href ? `<a href="${c.href}">${esc(c.text)}</a>` : esc(c.text))).join(' · ')}</p>

<h2>${d.titles.summary}</h2>
<p>${esc(d.summary)}</p>

<h2>${d.titles.experience}</h2>
${d.jobs
    .map(
        (j) => `<div class="job">
  <div class="row"><span class="title">${esc(j.title)} — ${esc(j.company)}</span><span class="meta">${esc(j.dates)}</span></div>
  ${j.location ? `<div class="meta">${esc(j.location)}</div>` : ''}
  <ul>${j.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
</div>`
    )
    .join('\n')}

<h2>${d.titles.skills}</h2>
<div class="skills">${d.skills.map((s) => `<p><b>${esc(s.label)}:</b> ${esc(s.items)}</p>`).join('')}</div>

<h2>${d.titles.education}</h2>
${d.education
    .map((e) => `<div class="row"><span><b>${esc(e.course)}</b> — ${esc(e.school)}</span><span class="meta">${esc(e.period)}</span></div>`)
    .join('')}

<h2>${d.titles.languages}</h2>
<p>${esc(d.languages)}</p>
</body></html>`
}

// ---------- DOCX ----------

const FONT = 'Arial'

function sectionTitle(text: string) {
    return new Paragraph({
        spacing: { before: 240, after: 100 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: '999999', space: 2 } },
        children: [new TextRun({ text: text.toUpperCase(), bold: true, size: 21, font: FONT })],
    })
}

// A real tab character (not a positional tab) so text extraction keeps a gap
function rightTab(text: string) {
    return [new TextRun({ children: [new Tab(), text], size: 19, color: '444444', font: FONT })]
}

function docx(d: ResumeData, locale: Locale) {
    const body = (text: string, opts: Partial<ConstructorParameters<typeof TextRun>[0] & object> = {}) =>
        new TextRun({ text, size: 20, font: FONT, ...(opts as object) })

    // US Letter for English, A4 for Portuguese; right tab stop at the text edge
    const size = locale === 'en' ? { width: 12240, height: 15840 } : { width: 11906, height: 16838 }
    const margin = 900
    const tabStops = [{ type: TabStopType.RIGHT, position: size.width - margin * 2 }]

    const contactRuns = d.contacts.flatMap((c, i) => [
        ...(i > 0 ? [body(' · ', { color: '333333', size: 19 })] : []),
        c.href
            ? new ExternalHyperlink({ link: c.href, children: [body(c.text, { color: '333333', size: 19 })] })
            : body(c.text, { color: '333333', size: 19 }),
    ])

    const children: Paragraph[] = [
        new Paragraph({ children: [new TextRun({ text: d.name, bold: true, size: 40, font: FONT })] }),
        new Paragraph({ spacing: { before: 40 }, children: [body(d.headline, { size: 23 })] }),
        new Paragraph({ spacing: { before: 80 }, children: contactRuns }),

        sectionTitle(d.titles.summary),
        new Paragraph({ children: [body(d.summary)] }),

        sectionTitle(d.titles.experience),
        ...d.jobs.flatMap((j, i) => [
            new Paragraph({
                spacing: { before: i === 0 ? 0 : 160 },
                keepNext: true,
                tabStops,
                children: [body(`${j.title} — ${j.company}`, { bold: true }), ...rightTab(j.dates)],
            }),
            ...(j.location
                ? [new Paragraph({ keepNext: true, children: [body(j.location, { color: '444444', size: 19 })] })]
                : []),
            ...j.bullets.map(
                (b) =>
                    new Paragraph({
                        numbering: { reference: 'bullets', level: 0 },
                        spacing: { before: 30 },
                        children: [body(b)],
                    })
            ),
        ]),

        sectionTitle(d.titles.skills),
        ...d.skills.map(
            (s) => new Paragraph({ spacing: { after: 30 }, children: [body(`${s.label}: `, { bold: true }), body(s.items)] })
        ),

        sectionTitle(d.titles.education),
        ...d.education.map(
            (e) =>
                new Paragraph({
                    spacing: { after: 40 },
                    tabStops,
                    children: [body(e.course, { bold: true }), body(` — ${e.school}`), ...(e.period ? rightTab(e.period) : [])],
                })
        ),

        sectionTitle(d.titles.languages),
        new Paragraph({ children: [body(d.languages)] }),
    ]

    return new Document({
        creator: d.name,
        title: `${d.name} — ${d.headline}`,
        styles: { default: { document: { run: { font: FONT, size: 20 } } } },
        numbering: {
            config: [
                {
                    reference: 'bullets',
                    levels: [
                        {
                            level: 0,
                            format: LevelFormat.BULLET,
                            text: '•',
                            alignment: AlignmentType.LEFT,
                            style: { paragraph: { indent: { left: 360, hanging: 240 } } },
                        },
                    ],
                },
            ],
        },
        sections: [
            {
                properties: { page: { size, margin: { top: 864, bottom: 864, left: margin, right: margin } } },
                children,
            },
        ],
    })
}

// ---------- run ----------

const files: Record<Locale, string> = {
    en: 'marcelle-yanari-resume',
    pt: 'marcelle-yanari-curriculo',
}

const browser = await chromium.launch({ executablePath: CHROME })
for (const locale of locales) {
    const data = build(locale)
    const base = path.join(PUBLIC, files[locale])

    const page = await browser.newPage()
    await page.setContent(html(data, locale), { waitUntil: 'load' })
    await page.pdf({
        path: `${base}.pdf`,
        format: locale === 'en' ? 'Letter' : 'A4',
        margin: { top: '0.6in', bottom: '0.6in', left: '0.62in', right: '0.62in' },
        printBackground: false,
    })
    await page.close()

    await writeFile(`${base}.docx`, await Packer.toBuffer(docx(data, locale)))
    console.log(`✓ ${files[locale]}.pdf / .docx`)
}
await browser.close()
