import type { CSSProperties, ReactNode } from 'react'
import { cn } from '@/lib/utils'

/*
 * Tiny hand-rolled syntax primitives. Content is authored as JSX, so we get
 * real links/headings inside "code" and ship zero highlighting JS.
 */
type TokenProps = { children: ReactNode; className?: string }

export const Kw = ({ children }: TokenProps) => <span className="text-syn-keyword">{children}</span>
export const Str = ({ children, className }: TokenProps) => (
    <span className={cn('text-syn-string', className)}>{children}</span>
)
export const Prop = ({ children }: TokenProps) => <span className="text-syn-property">{children}</span>
export const Num = ({ children }: TokenProps) => <span className="text-syn-number">{children}</span>
export const Fn = ({ children }: TokenProps) => <span className="text-syn-function">{children}</span>
export const Type = ({ children }: TokenProps) => <span className="text-syn-type">{children}</span>
export const P = ({ children }: TokenProps) => <span className="text-syn-punct">{children}</span>
export const Op = ({ children }: TokenProps) => <span className="text-syn-operator">{children}</span>
export const Comment = ({ children, className }: TokenProps) => (
    <span className={cn('text-syn-comment italic', className)}>{children}</span>
)

/** `'a', 'b', 'c'` — each item kept on one line when wrapping. */
export function StrList({ items, quote = "'" }: { items: string[]; quote?: string }) {
    return (
        <>
            {items.map((item, i) => (
                <span key={item}>
                    <span className="whitespace-nowrap">
                        <Str>
                            {quote}
                            {item}
                            {quote}
                        </Str>
                        {i < items.length - 1 && <P>,</P>}
                    </span>
                    {i < items.length - 1 && ' '}
                </span>
            ))}
        </>
    )
}

export function CodeLine({
    n,
    indent = 0,
    children,
    className,
}: {
    n: number
    indent?: number
    children?: ReactNode
    className?: string
}) {
    return (
        <div className={cn('code-line', className)}>
            <span className="ln" aria-hidden="true">
                {n}
            </span>
            <div className="lc" style={{ '--indent': indent } as CSSProperties}>
                {children ?? ' '}
            </div>
        </div>
    )
}

/** Renders children lines with automatic line numbers. */
export function CodeBlock({
    lines,
    className,
}: {
    lines: { indent?: number; content?: ReactNode; className?: string }[]
    className?: string
}) {
    return (
        <div className={cn('font-mono leading-relaxed', className)}>
            {lines.map((line, i) => (
                <CodeLine key={i} n={i + 1} indent={line.indent} className={line.className}>
                    {line.content}
                </CodeLine>
            ))}
        </div>
    )
}
