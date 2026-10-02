import { cn } from '@/lib/utils'

export type FileKind = 'ts' | 'md' | 'json' | 'log' | 'sh' | 'pdf' | 'folder' | 'folder-open'

// Seti-style glyphs, colored with the active theme's syntax palette.
const glyphs: Record<FileKind, { glyph: string; className: string }> = {
    ts: { glyph: 'TS', className: 'text-syn-function' },
    md: { glyph: 'M↓', className: 'text-syn-function' },
    json: { glyph: '{}', className: 'text-syn-type' },
    log: { glyph: '≡', className: 'text-syn-comment' },
    sh: { glyph: '$_', className: 'text-syn-string' },
    pdf: { glyph: 'PDF', className: 'text-syn-property' },
    folder: { glyph: '›', className: 'text-muted' },
    'folder-open': { glyph: '⌄', className: 'text-muted' },
}

export function FileIcon({ kind, className }: { kind: FileKind; className?: string }) {
    const { glyph, className: color } = glyphs[kind]
    return (
        <span
            aria-hidden="true"
            className={cn(
                'inline-flex w-6 shrink-0 justify-center text-[0.65rem] font-bold leading-none tracking-tight',
                color,
                className
            )}
        >
            {glyph}
        </span>
    )
}
