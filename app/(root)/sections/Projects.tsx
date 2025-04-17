import Tag from '@/components/ui/Tag'
import Image from 'next/image'
import Link from 'next/link'

import { SiGithub } from '@icons-pack/react-simple-icons'
import { ArrowRight, ExternalLink } from 'lucide-react'
import UnderlineToBackground from '@/fancy/components/text/underline-to-background'
import projectsList from '@/data/projects.json'
import { cn } from '@/lib/utils'

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
                    const imageGap = isOdd
                        ? 'last-section-goo'
                        : 'first-section-goo'
                    const mobilePlacement = isOdd
                        ? 'bottom-0 right-0'
                        : 'left-0 top-0'
                    return (
                        <div
                            className="grid md:grid-cols-[1fr_1fr] gap-10"
                            key={project.title}
                        >
                            <div className="goo-effect max-w-[460px] mb-3 md:mb-0 relative">
                                <div className="flex items-start w-full h-full col-start-1 row-start-1">
                                    <Image
                                        className={cn('goo-effect', imageGap)}
                                        alt={project.title}
                                        src={project.desktopImageUrls[0]}
                                        height={368}
                                        width={588}
                                    />
                                </div>
                                <Image
                                    alt={project.title}
                                    src={project.mobileImageUrl}
                                    className={cn(
                                        'row-start-1 col-start-1 absolute',
                                        mobilePlacement
                                    )}
                                    height={120}
                                    width={120}
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
