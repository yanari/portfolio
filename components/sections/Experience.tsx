import { FileDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ui, type Locale, localeMeta } from '@/content/i18n'
import { education, experience } from '@/content/experience'
import { profile } from '@/content/profile'

function formatMonth(iso: string, locale: Locale) {
    const [year, month] = iso.split('-').map(Number)
    return new Intl.DateTimeFormat(localeMeta[locale].htmlLang, { month: 'short', year: 'numeric', timeZone: 'UTC' })
        .format(new Date(Date.UTC(year, month - 1)))
        .replace('.', '')
}

/** Career as a `git log`: newest first, HEAD is the current role. */
export function Experience({ locale }: { locale: Locale }) {
    return (
        <>
            <p aria-hidden="true" className="-mt-4 mb-8 text-sm text-muted">
                <span className="text-syn-string">$</span> git log --author=&quot;marcelle&quot;
            </p>

            <ol className="max-w-3xl">
                {experience.map((job, i) => {
                    const isCurrent = !job.end
                    return (
                        <li key={`${job.company}-${job.start}`} className="relative grid grid-cols-[1.5rem_minmax(0,1fr)]">
                            <span aria-hidden="true" className="relative flex justify-center">
                                <span
                                    className={cn(
                                        'absolute w-px bg-subtle',
                                        i === 0 ? 'top-2' : 'top-0',
                                        i === experience.length - 1 ? 'h-2' : 'bottom-0'
                                    )}
                                />
                                <span
                                    className={cn(
                                        'relative mt-1.5 size-2.5 rounded-full border-2',
                                        isCurrent ? 'border-primary bg-primary' : 'border-subtle bg-editor'
                                    )}
                                />
                            </span>
                            <div className="pb-10 pl-3">
                                <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                                    <span className="text-syn-type">
                                        <time dateTime={job.start}>{formatMonth(job.start, locale)}</time>
                                        {' — '}
                                        {job.end ? (
                                            <time dateTime={job.end}>{formatMonth(job.end, locale)}</time>
                                        ) : (
                                            ui.present[locale]
                                        )}
                                    </span>
                                    {isCurrent && (
                                        <span className="text-xs font-bold text-syn-operator">(HEAD → main)</span>
                                    )}
                                </p>
                                <h3 className="mt-2 text-lg font-bold text-fg">
                                    {job.role[locale]} <span className="font-normal text-muted">@</span>{' '}
                                    <span className="text-primary">{job.company}</span>
                                </h3>
                                {job.location && <p className="text-xs text-muted">{job.location[locale]}</p>}
                                <p className="mt-3 max-w-[65ch] font-prose leading-relaxed text-fg">{job.summary[locale]}</p>
                                <p className="mt-3 text-xs text-muted">
                                    <span className="sr-only">{ui.stack[locale]}: </span>
                                    {job.stack.join(' · ')}
                                </p>
                            </div>
                        </li>
                    )
                })}
            </ol>

            <div className="mt-4 grid max-w-3xl gap-8 border-t pt-8 md:grid-cols-2">
                <div>
                    <h3 className="mb-4 text-sm font-bold text-fg">
                        <span aria-hidden="true" className="text-subtle">
                            ##{' '}
                        </span>
                        {ui.education[locale]}
                    </h3>
                    <ul className="space-y-3 font-prose">
                        {education.map((e) => (
                            <li key={e.school}>
                                <span className="text-fg">{e.course[locale]}</span>
                                <span className="block text-sm text-muted">
                                    {e.school}
                                    {e.period && ` · ${e.period}`}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="md:self-end">
                    <a
                        href={profile.resume}
                        download
                        className="inline-flex min-h-11 items-center gap-2 text-sm text-primary underline underline-offset-4 hover:no-underline"
                    >
                        <FileDown size={16} aria-hidden="true" />
                        {ui.fullHistory[locale]}
                    </a>
                </div>
            </div>
        </>
    )
}
