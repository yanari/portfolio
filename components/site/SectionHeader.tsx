import { FileIcon, type FileKind } from '@/components/ui/FileIcon'

/** File path on top (the editor), human title below (for people). */
export function SectionHeader({
    file,
    kind,
    title,
    id,
}: {
    file: string
    kind: FileKind
    title: string
    id: string
}) {
    return (
        <header className="mb-10">
            <p className="mb-2 flex items-center gap-1 text-xs text-muted">
                <span aria-hidden="true">marcelle-yanari ›</span>
                {!kind.startsWith('folder') && <FileIcon kind={kind} />}
                {file}
            </p>
            <h2 id={`${id}-title`} className="glow font-display text-2xl leading-tight text-primary sm:text-3xl">
                {title}
            </h2>
        </header>
    )
}
