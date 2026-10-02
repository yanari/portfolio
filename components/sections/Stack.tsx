import { CodeBlock, Comment, P, Prop, StrList } from '@/components/code/Code'
import type { Locale } from '@/content/i18n'
import { stack } from '@/content/stack'

/** Skills as a JSONC file: grouped by what I do with them, no percentages. */
export function Stack({ locale }: { locale: Locale }) {
    const lines = [
        { content: <P>{'{'}</P> },
        ...stack.flatMap((group, i) => [
            ...(i > 0 ? [{}] : []),
            { indent: 1, content: <Comment>{`// ${group.note[locale]}`}</Comment> },
            {
                indent: 1,
                content: (
                    <>
                        <Prop>&quot;{group.key}&quot;</Prop>
                        <P>: [</P>
                        <StrList items={group.items} quote={'"'} />
                        <P>]{i < stack.length - 1 ? ',' : ''}</P>
                    </>
                ),
            },
        ]),
        { content: <P>{'}'}</P> },
    ]

    return (
        <CodeBlock lines={lines} className="max-w-4xl text-sm sm:text-base" />
    )
}
