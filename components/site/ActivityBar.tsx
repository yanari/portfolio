'use client'

import { useEffect, useState } from 'react'
import { Files, FileDown, Linkedin, Mail } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'
import { cn } from '@/lib/utils'
import { ui, type Locale } from '@/content/i18n'
import { profile } from '@/content/profile'
import { EXPLORER_ID } from './Explorer'

function useExplorerVisible() {
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        const el = document.getElementById(EXPLORER_ID)
        const update = () => setVisible(!!el && getComputedStyle(el).display !== 'none')
        update()
        const observer = new MutationObserver(update)
        observer.observe(document.documentElement, { attributeFilter: ['data-explorer'] })
        window.addEventListener('resize', update)
        return () => {
            observer.disconnect()
            window.removeEventListener('resize', update)
        }
    }, [])
    return visible
}

const itemClass =
    'relative flex size-12 items-center justify-center text-muted transition-colors hover:text-fg outline-offset-[-4px]'

export function ActivityBar({ locale }: { locale: Locale }) {
    const explorerVisible = useExplorerVisible()
    const links = [
        { href: profile.github, label: 'GitHub', icon: <SiGithub size={20} />, external: true },
        { href: profile.linkedin, label: 'LinkedIn', icon: <Linkedin size={22} strokeWidth={1.5} />, external: true },
        { href: `mailto:${profile.email}`, label: 'Email', icon: <Mail size={22} strokeWidth={1.5} /> },
        { href: profile.resume[locale], label: profile.resume[locale].slice(1), icon: <FileDown size={22} strokeWidth={1.5} />, download: true },
    ]

    return (
        <div className="fixed bottom-(--status-h) left-0 top-0 z-40 hidden w-12 flex-col border-r bg-activity md:flex">
            <button
                type="button"
                aria-controls={EXPLORER_ID}
                aria-expanded={explorerVisible}
                aria-label={ui.explorer[locale]}
                title={ui.explorer[locale]}
                onClick={() => {
                    document.documentElement.dataset.explorer = explorerVisible ? 'closed' : 'open'
                }}
                className={cn(itemClass, explorerVisible && 'text-fg')}
            >
                {explorerVisible && (
                    <span aria-hidden="true" className="absolute inset-y-0 left-0 w-0.5 bg-primary" />
                )}
                <Files size={22} strokeWidth={1.5} />
            </button>

            <nav aria-label={ui.links[locale]}>
                <ul>
                    {links.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                title={link.label}
                                aria-label={link.label}
                                download={link.download || undefined}
                                target={link.external ? '_blank' : undefined}
                                rel={link.external ? 'noopener noreferrer' : undefined}
                                className={itemClass}
                            >
                                {link.icon}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
