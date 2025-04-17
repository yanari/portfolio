'use client'

import { TypewriterEffect } from '@/components/ui/TypewriterEffect'
import { useWindowSize } from '@uidotdev/usehooks'

const desktopText = `const about = {
    name: 'Marcelle Yanari',
    role: 'Software Developer',
    skills: [
        'React',
        'Flutter',
        'Typescript'
    ]
}
`

const mobileText = `const about = {
    name: 'Marcelle',
    role: 'Developer',
    skills: [
        'React',
        'Flutter',
        'Typescript'
    ]
}
`
export default function About() {
    const { width } = useWindowSize()

    if (!width) return null

    const isDesktop = width > 1024

    return (
        <div className="text-lg md:text-xl lg:text-4xl h-dvh text-gray-50 flex flex-col items-center justify-center">
            <pre className="justify-self-center h-70 md:h-90 md:w-3xl">
                <TypewriterEffect code={isDesktop ? desktopText : mobileText} />
            </pre>
        </div>
    )
}
