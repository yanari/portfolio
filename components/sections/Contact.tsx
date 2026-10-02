import { localeMeta, ui, type Locale } from '@/content/i18n'
import { profile } from '@/content/profile'
import { ContactForm } from './ContactForm'

export function Contact({ locale }: { locale: Locale }) {
    const otherLocale: Locale = locale === 'en' ? 'pt' : 'en'
    const channels = [
        { key: 'email', label: profile.email, href: `mailto:${profile.email}` },
        { key: 'linkedin', label: 'linkedin.com/in/yanari', href: profile.linkedin, external: true },
        { key: 'github', label: 'github.com/yanari', href: profile.github, external: true },
        { key: 'resume', label: 'marcelle-yanari-resume.pdf', href: profile.resume, download: true },
    ]

    return (
        <>
            <p className="-mt-4 mb-10 max-w-[60ch] font-prose text-fg sm:text-lg">{ui.contactIntro[locale]}</p>

            <div className="grid max-w-5xl gap-10 lg:grid-cols-2">
                {/* Integrated-terminal look */}
                <div className="self-start border bg-sidebar">
                    <p className="border-b px-4 py-2 text-[0.7rem] uppercase tracking-widest text-muted">
                        <span className="border-b border-primary pb-[0.55rem] text-fg">Terminal</span>
                    </p>
                    <div className="p-4 text-sm">
                        <p aria-hidden="true" className="mb-3 text-muted">
                            <span className="text-syn-string">~/marcelle-yanari</span>{' '}
                            <span className="text-syn-function">$</span> ./contact.sh
                        </p>
                        <ul className="space-y-1">
                            {channels.map((c) => (
                                <li key={c.key} className="grid grid-cols-[5.5rem_minmax(0,1fr)] items-center">
                                    <span className="text-syn-keyword">{c.key}</span>
                                    <a
                                        href={c.href}
                                        target={c.external ? '_blank' : undefined}
                                        rel={c.external ? 'noopener noreferrer' : undefined}
                                        download={c.download || undefined}
                                        className="flex min-h-11 items-center break-all text-fg underline decoration-subtle underline-offset-4 hover:text-primary hover:decoration-primary md:min-h-8"
                                    >
                                        {c.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <p aria-hidden="true" className="mt-3 text-muted">
                            <span className="text-syn-string">~/marcelle-yanari</span>{' '}
                            <span className="text-syn-function">$</span>
                            <span className="cursor" />
                        </p>
                    </div>
                </div>

                <ContactForm locale={locale} />
            </div>

            <p className="mt-24 flex flex-wrap gap-x-4 gap-y-2 border-t pt-6 text-xs text-muted">
                <span>
                    © {new Date().getFullYear()} {profile.name}
                </span>
                <span>{ui.builtWith[locale]}</span>
                <a
                    href={localeMeta[otherLocale].path}
                    hrefLang={localeMeta[otherLocale].htmlLang}
                    lang={localeMeta[otherLocale].htmlLang}
                    className="text-fg underline underline-offset-4 hover:text-primary"
                >
                    {ui.switchLanguage[locale]}
                </a>
            </p>
        </>
    )
}
