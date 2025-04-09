import Typewriter from '@/components/Typewriter'

export default function About() {
    return (
        <div className="text-lg md:text-4xl h-full text-gray-50 flex flex-col items-center justify-center">
            <pre className="justify-self-center h-60 w-3xl">
                <Typewriter />
            </pre>
        </div>
    )
}
