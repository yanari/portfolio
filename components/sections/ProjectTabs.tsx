'use client'

import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { FileIcon } from '@/components/ui/FileIcon'

type Item = { slug: string; label: string; group: string }

/**
 * Vertical tab list styled as a file tree (horizontal strip on mobile).
 * Panels are server-rendered and passed in; this only handles selection,
 * keyboard navigation and `#project-<slug>` deep links.
 */
export function ProjectTabs({
    items,
    panels,
    label,
}: {
    items: Item[]
    panels: Record<string, ReactNode>
    label: string
}) {
    const [selected, setSelected] = useState(items[0].slug)
    const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({})

    const selectFromHash = useCallback(() => {
        const slug = window.location.hash.replace('#project-', '')
        if (items.some((i) => i.slug === slug)) setSelected(slug)
    }, [items])

    useEffect(() => {
        selectFromHash()
        window.addEventListener('hashchange', selectFromHash)
        return () => window.removeEventListener('hashchange', selectFromHash)
    }, [selectFromHash])

    const onKeyDown = (e: KeyboardEvent) => {
        const index = items.findIndex((i) => i.slug === selected)
        const next = {
            ArrowDown: index + 1,
            ArrowRight: index + 1,
            ArrowUp: index - 1,
            ArrowLeft: index - 1,
            Home: 0,
            End: items.length - 1,
        }[e.key]
        if (next === undefined) return
        e.preventDefault()
        const slug = items[(next + items.length) % items.length].slug
        setSelected(slug)
        tabRefs.current[slug]?.focus()
    }

    const groups = [...new Set(items.map((i) => i.group))]

    return (
        <div className="grid gap-6 md:grid-cols-[16rem_minmax(0,1fr)] md:gap-0">
            <div
                role="tablist"
                aria-label={label}
                aria-orientation="vertical"
                onKeyDown={onKeyDown}
                className="no-scrollbar -mx-4 flex gap-1 overflow-x-auto px-4 md:mx-0 md:flex-col md:gap-0 md:self-start md:border-r md:px-0 md:pr-2"
            >
                {groups.map((group) => (
                    <div key={group} role="presentation" className="flex shrink-0 gap-1 md:flex-col md:gap-0">
                        <span
                            role="presentation"
                            className="flex h-11 items-center gap-1 pr-1 text-xs text-muted md:h-8"
                        >
                            <FileIcon kind="folder-open" className="hidden md:inline-flex" />
                            {group}/
                        </span>
                        {items
                            .filter((i) => i.group === group)
                            .map((item) => {
                                const isSelected = item.slug === selected
                                return (
                                    <button
                                        key={item.slug}
                                        ref={(el) => {
                                            tabRefs.current[item.slug] = el
                                        }}
                                        id={`project-${item.slug}`}
                                        role="tab"
                                        type="button"
                                        aria-selected={isSelected}
                                        aria-controls={`panel-${item.slug}`}
                                        tabIndex={isSelected ? 0 : -1}
                                        onClick={() => setSelected(item.slug)}
                                        className={cn(
                                            'flex h-11 min-w-0 shrink-0 items-center gap-1 whitespace-nowrap border px-3 text-left text-sm outline-offset-[-2px] md:h-8 md:border-0 md:pl-6',
                                            isSelected
                                                ? 'border-primary bg-selection text-fg'
                                                : 'text-muted hover:bg-hover hover:text-fg'
                                        )}
                                    >
                                        <FileIcon kind="md" />
                                        <span className="md:truncate">{item.label}</span>
                                    </button>
                                )
                            })}
                    </div>
                ))}
            </div>

            {items.map((item) => (
                <div
                    key={item.slug}
                    id={`panel-${item.slug}`}
                    role="tabpanel"
                    aria-labelledby={`project-${item.slug}`}
                    hidden={item.slug !== selected}
                    tabIndex={0}
                    className="min-w-0 outline-offset-4 md:pl-8"
                >
                    {panels[item.slug]}
                </div>
            ))}
        </div>
    )
}
