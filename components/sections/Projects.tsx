import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'
import { ui, type Locale } from '@/content/i18n'
import { projects, type Project } from '@/content/projects'
import { ProjectTabs } from './ProjectTabs'

function SubHeading({ children }: { children: React.ReactNode }) {
    return (
        <h4 className="mb-2 mt-8 font-mono text-sm font-bold text-fg">
            <span aria-hidden="true" className="text-subtle">
                ##{' '}
            </span>
            {children}
        </h4>
    )
}

function ProjectPanel({ project, locale }: { project: Project; locale: Locale }) {
    const meta = [project.context?.[locale], project.period].filter(Boolean).join(' · ')

    return (
        <article>
            <p className="mb-3 text-xs text-muted">{project.kind[locale]}</p>
            <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight text-fg sm:text-3xl">{project.name}</h3>
            {(meta || project.status) && (
                <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
                    {meta && <span>{meta}</span>}
                    {project.status && (
                        <span className="border border-current px-1.5 text-xs text-secondary">{project.status}</span>
                    )}
                </p>
            )}

            <p className="mt-6 max-w-[65ch] font-prose text-base leading-relaxed text-fg sm:text-lg">
                {project.summary[locale]}
            </p>

            {project.images && (
                <div className="mt-8 grid max-w-3xl grid-cols-[3fr_1fr] items-start gap-3">
                    {project.images.map((image, i) => (
                        <figure key={image.src} className="border bg-sidebar">
                            <Image
                                src={image.src}
                                alt={image.alt[locale]}
                                width={image.width}
                                height={image.height}
                                sizes={i === 0 ? '(min-width: 1024px) 560px, 75vw' : '(min-width: 1024px) 190px, 25vw'}
                                className="h-auto w-full"
                            />
                        </figure>
                    ))}
                </div>
            )}

            <div className="max-w-[65ch] font-prose leading-relaxed text-fg">
                {project.role && (
                    <>
                        <SubHeading>{ui.myRole[locale]}</SubHeading>
                        <p>{project.role[locale]}</p>
                    </>
                )}
                {project.problem && (
                    <>
                        <SubHeading>{ui.problem[locale]}</SubHeading>
                        <p>{project.problem[locale]}</p>
                    </>
                )}
                {project.solution && (
                    <>
                        <SubHeading>{ui.solution[locale]}</SubHeading>
                        <p>{project.solution[locale]}</p>
                    </>
                )}
                {project.highlights && (
                    <>
                        <SubHeading>{ui.highlights[locale]}</SubHeading>
                        <ul className="space-y-2">
                            {project.highlights[locale].map((h) => (
                                <li key={h} className="flex gap-3">
                                    <span aria-hidden="true" className="font-mono text-primary">
                                        -
                                    </span>
                                    {h}
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>

            <SubHeading>{ui.stack[locale]}</SubHeading>
            <ul className="flex flex-wrap gap-2 text-sm">
                {project.stack.map((tech) => (
                    <li key={tech} className="bg-line px-2 py-0.5 text-syn-string">
                        {tech}
                    </li>
                ))}
            </ul>

            {project.links && (
                <div className="mt-8 flex flex-wrap gap-3">
                    {project.links.live && (
                        <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-11 items-center gap-2 border border-primary px-4 text-sm text-primary hover:bg-primary hover:text-primary-fg md:min-h-9"
                        >
                            <ExternalLink size={16} aria-hidden="true" />
                            {ui.liveDemo[locale]}
                            <span className="sr-only"> — {project.name} {ui.opensInNewTab[locale]}</span>
                        </a>
                    )}
                    {project.links.github && (
                        <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-11 items-center gap-2 border px-4 text-sm text-fg hover:border-primary hover:text-primary md:min-h-9"
                        >
                            <SiGithub size={16} aria-hidden="true" />
                            {ui.sourceCode[locale]}
                            <span className="sr-only"> — {project.name} {ui.opensInNewTab[locale]}</span>
                        </a>
                    )}
                </div>
            )}
        </article>
    )
}

export function Projects({ locale }: { locale: Locale }) {
    return (
        <>
            <p className="-mt-4 mb-10 max-w-[65ch] font-prose text-muted sm:text-lg">{ui.projectsIntro[locale]}</p>
            <ProjectTabs
                label={ui.sectionProjects[locale]}
                items={projects.map((p) => ({ slug: p.slug, label: p.slug, group: p.type }))}
                panels={Object.fromEntries(
                    projects.map((p) => [p.slug, <ProjectPanel key={p.slug} project={p} locale={locale} />])
                )}
            />
        </>
    )
}
