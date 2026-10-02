import { GitBranch } from 'lucide-react'
import { cn } from '@/lib/utils'
import { localeMeta, locales, ui, type Locale } from '@/content/i18n'
import { profile } from '@/content/profile'
import { ThemePicker } from './ThemePicker'

export function StatusBar({ locale }: { locale: Locale }) {
    return (
        <footer className="fixed inset-x-0 bottom-0 z-40 flex h-(--status-h) items-stretch justify-between border-t bg-status text-xs text-status-fg">
            <div className="flex items-stretch">
                <span className="hidden items-center gap-1 bg-primary px-3 text-primary-fg md:flex">
                    <GitBranch size={13} aria-hidden="true" />
                    main
                </span>
                {profile.openToWork && (
                    <a
                        href="#contact"
                        className="flex items-center gap-1.5 px-3 hover:bg-hover"
                    >
                        <span aria-hidden="true" className="size-2 rounded-full bg-secondary" />
                        {ui.openToWork[locale]}
                    </a>
                )}
                <span className="hidden items-center px-3 lg:flex">{profile.location[locale]}</span>
            </div>
            <div className="flex items-stretch">
                <nav aria-label={ui.language[locale]} className="flex items-stretch">
                    <ul className="flex items-stretch">
                        {locales.map((l) => (
                            <li key={l} className="flex">
                                <a
                                    href={localeMeta[l].path}
                                    hrefLang={localeMeta[l].htmlLang}
                                    lang={localeMeta[l].htmlLang}
                                    aria-current={l === locale ? 'page' : undefined}
                                    className={cn(
                                        'flex min-w-11 items-center justify-center px-2 hover:bg-hover',
                                        l === locale ? 'font-bold text-fg underline underline-offset-4' : ''
                                    )}
                                >
                                    {localeMeta[l].label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <ThemePicker locale={locale} />
            </div>
        </footer>
    )
}
