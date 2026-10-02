import { type Locale } from '@/content/i18n'
import { profile, seo, siteUrl } from '@/content/profile'
import { stack } from '@/content/stack'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { Experience } from '@/components/sections/Experience'
import { Profile } from '@/components/sections/Profile'
import { Projects } from '@/components/sections/Projects'
import { Stack } from '@/components/sections/Stack'
import { ActivityBar } from './ActivityBar'
import { Explorer } from './Explorer'
import { SectionHeader } from './SectionHeader'
import { sections, type SectionId } from './sections'
import { StatusBar } from './StatusBar'
import { TabBar } from './TabBar'
import { ui } from '@/content/i18n'

const content: Record<SectionId, (props: { locale: Locale }) => React.ReactNode> = {
    profile: Profile,
    about: About,
    projects: Projects,
    experience: Experience,
    stack: Stack,
    contact: Contact,
}

function JsonLd({ locale }: { locale: Locale }) {
    const data = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: profile.fullName,
        alternateName: profile.name,
        jobTitle: profile.role[locale],
        description: seo.description[locale],
        url: siteUrl,
        email: `mailto:${profile.email}`,
        address: { '@type': 'PostalAddress', addressLocality: 'São Paulo', addressCountry: 'BR' },
        sameAs: [profile.github, profile.linkedin],
        knowsAbout: stack.flatMap((g) => g.items).slice(0, 20),
    }
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
        />
    )
}

export function Portfolio({ locale }: { locale: Locale }) {
    return (
        <>
            <a
                href="#main"
                className="fixed left-2 top-2 z-50 -translate-y-20 bg-primary px-4 py-2 text-primary-fg focus:translate-y-0"
            >
                {ui.skipToContent[locale]}
            </a>
            <ActivityBar locale={locale} />
            <Explorer locale={locale} />

            <div className="pb-(--status-h) pl-[calc(var(--activity-w)+var(--explorer-w))]">
                <TabBar locale={locale} />
                <main id="main" tabIndex={-1} className="outline-none">
                    {sections.map(({ id, file, kind, title }) => {
                        const Content = content[id]
                        return (
                            <section
                                key={id}
                                id={id}
                                data-section
                                aria-labelledby={id === 'profile' ? undefined : `${id}-title`}
                                className="border-b px-4 py-16 first:py-0 sm:px-8 lg:px-14 xl:px-20"
                            >
                                {id !== 'profile' && (
                                    <SectionHeader id={id} file={file} kind={kind} title={title[locale]} />
                                )}
                                <Content locale={locale} />
                            </section>
                        )
                    })}
                </main>
            </div>

            <StatusBar locale={locale} />
            <JsonLd locale={locale} />
        </>
    )
}
