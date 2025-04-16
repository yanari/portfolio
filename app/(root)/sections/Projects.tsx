import Tag from '@/components/ui/Tag'
import Image from 'next/image'
import Link from 'next/link'

import { SiGithub } from '@icons-pack/react-simple-icons'
import { ArrowRight, ExternalLink } from 'lucide-react'
import UnderlineToBackground from '@/fancy/components/text/underline-to-background'

interface Project {
    title: string
    description: string
    technologies: string[]
    desktopImageUrls: string[]
    mobileImageUrl: string
    link: string
    githubLink: string
}

const projects: Project[] = [
    {
        title: 'Neurotimer',
        description:
            'A Pomodoro timer web app designed to improve focus with ambient soundscapes. Users can choose between pink noise, brown noise, and coffee shop sounds, each with tooltips explaining their cognitive benefits.',
        technologies: ['React', 'TypeScript', 'Tailwind', 'Context API'],
        mobileImageUrl: '/images/neuro_timer_mobile.png',
        desktopImageUrls: [
            '/images/neuro_timer_desktop.png',
            '/images/neuro_timer_desktop_2.png',
        ],
        githubLink: 'https://github.com/yanari/neurotimer',
        link: 'https://neurotimer.vercel.app',
    },
    {
        title: "What's Your Elemental Sign?",
        description:
            "A fullstack app that calculates the dominant element (Fire, Earth, Air, or Water) in a user's birth chart. Users input birth data, and the app returns an analysis based on astrology logic.",
        technologies: ['Nuxt.js', 'Vue.js', 'Python', 'Chart.js'],
        mobileImageUrl: '/images/whats_your_elemental_sign_mobile.png',
        desktopImageUrls: [
            '/images/whats_your_elemental_sign_desktop.png',
            '/images/whats_your_elemental_sign_desktop_2.png',
        ],
        githubLink: 'https://github.com/yanari/whats_your_elemental_sign',
        link: 'https://whatyourelementalsign.vercel.app',
    },
    // Add more projects as needed
]

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
