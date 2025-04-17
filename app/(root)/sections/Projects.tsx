import Tag from '@/components/ui/Tag'

import Link from 'next/link'

import { SiGithub } from '@icons-pack/react-simple-icons'
import { ArrowRight, ExternalLink } from 'lucide-react'
import UnderlineToBackground from '@/fancy/components/text/underline-to-background'
import projectsList from '@/data/projects.json'
import { ProjectImages } from '@/components/projects/ProjectImages'
import { IProject } from '@/shared/project.interface'

const projects: IProject[] = projectsList

export default function Projects() {
    return (
        <div className="px-4">
            <h2 className="mb-8 text-3xl font-[var(--font-vt323)] text-primary">
                Projects
            </h2>
            <div className="grid gap-10">
                {projects.map((project, index) => {
                    const isOdd = (index + 1) % 2 !== 0

                    return (
                        <div
                            className="grid md:grid-cols-[1fr_1fr] gap-10"
                            key={project.title}
                        >
                            <ProjectImages project={project} isOdd={isOdd} />
                            <div className={isOdd ? 'md:-order-1' : ''}>
                                <h3 className="mb-4 text-3xl">
                                    {project.title}
                                </h3>
                                <div className="flex gap-2 flex-wrap">
                                    {project.technologies.map((tech) => (
                                        <Tag key={tech}>{tech}</Tag>
                                    ))}
                                </div>
                                <p className="text-base my-8">
                                    {project.description}
                                </p>
                                <div className="flex gap-6">
                                    <Link
                                        className="transition-all hover:scale-105"
                                        rel="noopener noreferrer"
                                        href={project.githubLink}
                                    >
                                        <SiGithub size={40} />
                                    </Link>
                                    <Link
                                        className="transition-all hover:scale-105"
                                        rel="noopener noreferrer"
                                        href={project.link}
                                    >
                                        <ExternalLink size={40} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className="w-full flex justify-end">
                    <Link
                        className="flex items-center text-lg gap-2 text-primary"
                        href="/projects"
                        aria-label="Some other projects"
                    >
                        <UnderlineToBackground
                            label="More projects"
                            targetTextColor="#f0f0f0"
                            className="cursor-pointer"
                        />

                        <ArrowRight size={24} className="text-primary" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
