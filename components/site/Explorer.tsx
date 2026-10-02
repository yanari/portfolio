'use client'

import { useEffect } from 'react'
import { cn } from '@/lib/utils'
import { FileIcon, type FileKind } from '@/components/ui/FileIcon'
import { ui, type Locale } from '@/content/i18n'
import { projects } from '@/content/projects'
import { profile } from '@/content/profile'
import { sections } from './sections'
import { useActiveSection } from './active-section'

export const EXPLORER_ID = 'explorer'

/** Closes the explorer when it is an overlay (tablet), not a docked sidebar. */
function closeIfOverlay() {
    if (!window.matchMedia('(min-width: 64rem)').matches) {
        delete document.documentElement.dataset.explorer
    }
}

function Row({
    href,
    kind,
    label,
    depth = 0,
    active,
    download,
}: {
    href: string
    kind: FileKind
    label: string
    depth?: number
    active?: boolean
    download?: boolean
}) {
    return (
        <li>
            <a
                href={href}
                download={download || undefined}
                onClick={closeIfOverlay}
                aria-current={active ? 'location' : undefined}
                style={{ paddingLeft: `${0.75 + depth * 0.75}rem` }}
                className={cn(
                    'flex h-7 items-center gap-1 pr-3 text-[0.8rem] outline-offset-[-2px]',
                    active ? 'bg-selection text-fg' : 'text-muted hover:bg-hover hover:text-fg'
                )}
            >
                <FileIcon kind={kind} />
                <span className="truncate">{label}</span>
            </a>
        </li>
    )
}

function Folder({ label, depth }: { label: string; depth: number }) {
    return (
        <li
            style={{ paddingLeft: `${0.75 + depth * 0.75}rem` }}
            className="flex h-7 items-center gap-1 text-[0.8rem] text-muted"
        >
            <FileIcon kind="folder-open" />
            {label}
        </li>
    )
}

export function Explorer({ locale }: { locale: Locale }) {
    const active = useActiveSection()

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeIfOverlay()
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [])

    const groups = (['work', 'personal'] as const).map((type) => ({
        type,
        items: projects.filter((p) => p.type === type),
    }))

    return (
        <aside
            id={EXPLORER_ID}
            className="explorer fixed bottom-(--status-h) left-(--activity-w) top-0 z-30 w-60 flex-col border-r bg-sidebar shadow-xl lg:z-10 lg:shadow-none"
        >
            <p className="flex h-(--tabs-h) shrink-0 items-center px-5 text-[0.7rem] uppercase tracking-widest text-muted">
                {ui.explorer[locale]}
            </p>
            <nav aria-label={ui.explorer[locale]} className="overflow-y-auto pb-4">
                <p className="flex h-7 items-center gap-1 px-2 text-[0.7rem] font-bold uppercase tracking-wider text-fg">
                    <FileIcon kind="folder-open" />
                    marcelle-yanari
                </p>
                <ul>
                    {sections.map((section) =>
                        section.id === 'projects' ? (
                            <li key={section.id}>
                                <a
                                    href="#projects"
                                    onClick={closeIfOverlay}
                                    aria-current={active === 'projects' ? 'location' : undefined}
                                    className={cn(
                                        'flex h-7 items-center gap-1 pl-3 pr-3 text-[0.8rem] outline-offset-[-2px]',
                                        active === 'projects'
                                            ? 'bg-selection text-fg'
                                            : 'text-muted hover:bg-hover hover:text-fg'
                                    )}
                                >
                                    <FileIcon kind="folder-open" />
                                    projects
                                </a>
                                <ul>
                                    {groups.map((group) => (
                                        <li key={group.type}>
                                            <ul>
                                                <Folder label={group.type} depth={1} />
                                                {group.items.map((project) => (
                                                    <Row
                                                        key={project.slug}
                                                        href={`#project-${project.slug}`}
                                                        kind="md"
                                                        label={`${project.slug}.md`}
                                                        depth={2}
                                                    />
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ) : (
                            <Row
                                key={section.id}
                                href={`#${section.id}`}
                                kind={section.kind}
                                label={section.file}
                                active={active === section.id}
                            />
                        )
                    )}
                    <Row href={profile.resume} kind="pdf" label="resume.pdf" download />
                </ul>
            </nav>
        </aside>
    )
}
