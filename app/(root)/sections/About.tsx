import { CodeBlock } from '@/components/about/CodeBlock'

const code = `const about = {
    name: 'Marcelle Yanari',
    role: 'Software Developer',
    skills: [
        'React',
        'Flutter',
        'Typescript'
    ]
}`

export default function About() {
    return (
        <div className="text-lg md:text-xl lg:text-4xl h-dvh text-gray-50 flex flex-col items-center justify-center">
            <div className="justify-self-center h-70 md:h-90 md:w-3xl">
                <CodeBlock code={code} />
            </div>
        </div>
    )
}
