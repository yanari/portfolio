'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'
import { FileIcon } from '@/components/ui/FileIcon'
import { ui, type Locale } from '@/content/i18n'
import { sections } from './sections'
import { useActiveSection } from './active-section'

/** Open editors as tabs. On mobile this is the primary navigation. */
export function TabBar({ locale }: { locale: Locale }) {
    const active = useActiveSection()
    const listRef = useRef<HTMLUListElement>(null)

    // Keep the active tab visible when the strip overflows (mobile).
    useEffect(() => {
        const list = listRef.current
        const tab = list?.querySelector<HTMLElement>('[aria-current]')
        if (!list || !tab) return
        const left = tab.offsetLeft - list.clientWidth / 2 + tab.clientWidth / 2
        list.scrollTo({ left, behavior: 'smooth' })
    }, [active])

    return (
        <nav
            aria-label={ui.primaryNav[locale]}
            className="sticky top-0 z-20 h-(--tabs-h) border-b bg-tabbar"
        >
            <ul ref={listRef} className="no-scrollbar flex h-full overflow-x-auto">
                {sections.map((section) => {
                    const isActive = section.id === active
                    return (
                        <li key={section.id} className="h-full shrink-0">
                            <a
                                href={`#${section.id}`}
                                aria-current={isActive ? 'location' : undefined}
                                className={cn(
                                    'relative flex h-full items-center gap-1 border-r pl-2 pr-4 text-[0.8rem] transition-colors',
                                    isActive
                                        ? 'bg-editor text-fg'
                                        : 'text-muted hover:bg-hover hover:text-fg'
                                )}
                            >
                                {isActive && (
                                    <span
                                        aria-hidden="true"
                                        className="absolute inset-x-0 top-0 h-0.5 bg-primary"
                                    />
                                )}
                                <FileIcon kind={section.kind} />
                                {section.file}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
