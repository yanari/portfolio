import Tag from '@/components/ui/Tag'
import Image from 'next/image'
import Link from 'next/link'

import { SiGithub } from '@icons-pack/react-simple-icons'
import { ArrowRight, ExternalLink } from 'lucide-react'
import UnderlineToBackground from '@/fancy/components/text/underline-to-background'
import projectsList from '@/data/projects.json'

interface Project {
    title: string
    description: string
    technologies: string[]
    desktopImageUrls: string[]
    mobileImageUrl: string
    link: string
    githubLink: string
}

const projects: Project[] = projectsList

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
                            <div className="rounded-full max-w-[460px] relative mb-3 md:mb-0">
                                <div className="image-wrap">
                                    <Image
                                        className="rounded-xl project-big"
                                        alt={project.title}
                                        src={project.desktopImageUrls[0]}
                                        height={368}
                                        width={588}
                                    />
                                </div>
                                <Image
                                    alt={project.title}
                                    src={project.mobileImageUrl}
                                    className="absolute bottom-0 right-0"
                                    height={300}
                                    width={80}
                                />
                            </div>
                            <div className={isOdd ? '-order-1' : ''}>
                                <h3 className="mb-4 text-3xl">
                                    {project.title}
                                </h3>
                                <div className="flex gap-2 flex-wrap">
                                    {project.technologies.map((technology) => {
                                        return (
                                            <Tag key={technology}>
                                                {technology}
                                            </Tag>
                                        )
                                    })}
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
