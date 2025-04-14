import Tag from '@/components/ui/Tag'
import Image from 'next/image'
import Link from 'next/link'

import { SiGithub } from '@icons-pack/react-simple-icons'
import { ExternalLink } from 'lucide-react'

interface Project {
    title: string
    description: string
    technologies: string[]
    imageUrls: string[]
    link: string
    githubLink: string
}

const projects: Project[] = [
    {
        title: 'Neurotimer',
        description:
            'A Pomodoro timer web app designed to improve focus with ambient soundscapes. Users can choose between pink noise, brown noise, and coffee shop sounds, each with tooltips explaining their cognitive benefits.',
        technologies: ['React', 'TypeScript', 'Tailwind', 'Context API'],
        imageUrls: [
            '/images/neuro_timer_1.png',
            '/images/neuro_timer_2.png',
            '/images/neuro_timer_3.png',
        ],
        githubLink: 'https://github.com/yanari/neurotimer',
        link: 'neurotimer.vercel.app',
    },
    {
        title: "What's Your Elemental Sign?",
        description:
            "A fullstack app that calculates the dominant element (Fire, Earth, Air, or Water) in a user's birth chart. Users input birth data, and the app returns an analysis based on astrology logic.",
        technologies: ['Nuxt.js', 'Vue.js', 'Python', 'Chart.js'],
        imageUrls: [
            '/images/whats_your_elemental_sign_1.png',
            '/images/whats_your_elemental_sign_2.png',
            '/images/whats_your_elemental_sign_3.png',
        ],
        githubLink: 'https://github.com/yanari/whats_your_elemental_sign',
        link: 'whatyourelementalsign.vercel.app',
    },
    // Add more projects as needed
]

export default function Projects() {
    return (
        <div className="px-4">
            <h2 className="mb-4 text-3xl font-[var(--font-vt323)] text-primary">
                Projects
            </h2>
            <div className="grid gap-10">
                {projects.map((project) => {
                    return (
                        <div
                            className="grid md:grid-cols-[2fr_2fr] gap-10"
                            key={project.title}
                        >
                            <div className="rounded-full relative mb-3 md:mb-0">
                                <Image
                                    className="rounded-xl"
                                    alt={project.title}
                                    src={project.imageUrls[0]}
                                    height={368}
                                    width={588}
                                />
                            </div>
                            <div className="">
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
                                    <Link href={project.githubLink}>
                                        <SiGithub size={40} />
                                    </Link>
                                    <Link href={project.link}>
                                        <ExternalLink size={40} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
