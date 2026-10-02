import { ArrowDown, ArrowRight } from 'lucide-react'
import { CodeBlock, Comment, Kw, Num, Op, P, Prop, Str, StrList, Type } from '@/components/code/Code'
import { ui, type Locale } from '@/content/i18n'
import { profile } from '@/content/profile'

const action =
    'inline-flex min-h-11 items-center gap-2 border px-4 text-sm transition-colors md:min-h-9'

export function Profile({ locale }: { locale: Locale }) {
    const lines = [
        { content: <Comment>{'/**'}</Comment> },
        {
            content: (
                <div className="flex items-baseline gap-[1ch]">
                    <Comment className="shrink-0 whitespace-pre">{'\u00a0*'}</Comment>
                    <h1 className="glow font-display text-4xl font-bold italic leading-tight tracking-tight text-fg sm:text-5xl lg:text-6xl">
                        {profile.name}
                    </h1>
                </div>
            ),
            className: 'py-2',
        },
        {
            content: (
                <div className="flex items-start gap-[1ch] leading-8">
                    <Comment className="shrink-0 whitespace-pre">{'\u00a0*'}</Comment>
                    <span className="text-lg text-primary sm:text-xl">{profile.role[locale]}</span>
                </div>
            ),
        },
        { content: <Comment>{'\u00a0*'}</Comment> },
        {
            content: (
                <div className="flex items-start gap-[1ch] leading-7">
                    <Comment className="shrink-0 whitespace-pre">{'\u00a0*'}</Comment>
                    <p className="max-w-[60ch] font-prose text-base text-fg sm:text-lg">{profile.tagline[locale]}</p>
                </div>
            ),
        },
        { content: <Comment>{'\u00a0*/'}</Comment> },
        {},
        {
            content: (
                <>
                    <Kw>export const</Kw> <Prop>profile</Prop> <Op>=</Op> <P>{'{'}</P>
                </>
            ),
        },
        {
            indent: 1,
            content: (
                <>
                    <Prop>location</Prop>
                    <P>: </P>
                    <Str>&apos;{profile.location[locale]}&apos;</Str>
                    <P>,</P>
                </>
            ),
        },
        {
            indent: 1,
            content: (
                <>
                    <Prop>buildingSince</Prop>
                    <P>: </P>
                    <Num>{profile.since}</Num>
                    <P>,</P>
                </>
            ),
        },
        {
            indent: 1,
            content: (
                <>
                    <Prop>stack</Prop>
                    <P>: [</P>
                    <StrList items={profile.mainStack} />
                    <P>],</P>
                </>
            ),
        },
        {
            indent: 1,
            content: (
                <>
                    <Prop>focus</Prop>
                    <P>: [</P>
                    <StrList items={profile.focus[locale]} />
                    <P>],</P>
                </>
            ),
        },
        {
            indent: 1,
            content: (
                <>
                    <Prop>openToWork</Prop>
                    <P>: </P>
                    <Num>{String(profile.openToWork)}</Num>
                    <P>,</P>
                </>
            ),
        },
        {
            content: (
                <>
                    <P>{'}'}</P> <Kw>satisfies</Kw> <Type>Developer</Type>
                    <span className="cursor" aria-hidden="true" />
                </>
            ),
        },
    ]

    return (
        <div className="flex flex-col justify-center gap-10 py-12 md:min-h-[calc(100svh-var(--tabs-h)-var(--status-h))]">
            <CodeBlock lines={lines} className="text-sm sm:text-base" />

            <div className="flex flex-wrap gap-3 pl-[calc(3ch+1.25rem)]">
                <a href="#projects" className={`${action} border-primary bg-primary font-bold text-primary-fg hover:opacity-90`}>
                    {ui.viewProjects[locale]}
                    <ArrowRight size={16} aria-hidden="true" />
                </a>
                <a href="#contact" className={`${action} text-fg hover:border-primary hover:text-primary`}>
                    {ui.getInTouch[locale]}
                </a>
                <a href={profile.resume} download className={`${action} text-fg hover:border-primary hover:text-primary`}>
                    <ArrowDown size={16} aria-hidden="true" />
                    {ui.downloadResume[locale]}
                </a>
            </div>
        </div>
    )
}
