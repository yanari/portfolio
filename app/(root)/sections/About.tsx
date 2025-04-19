'use client'

import {
    atomOneDark,
    dracula,
    nord,
} from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { useWindowSize } from '@uidotdev/usehooks'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { useTheme } from 'next-themes'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

const desktopText = `const about = {
    name: 'Marcelle Yanari',
    role: 'Software Developer',
    skills: [
        'React',
        'Flutter',
        'Typescript'
    ]
}`

const mobileText = `const about = {
    name: 'Marcelle',
    role: 'Developer',
    skills: [
        'React',
        'Flutter',
        'Typescript'
    ]
}`

const themes: { [key: string]: { [key: string]: React.CSSProperties } } = {
    dracula: dracula,
    'atom-one-dark': atomOneDark,
    nord: nord,
}

export default function About() {
    const { theme } = useTheme()
    const { width } = useWindowSize()
    const [text] = useTypewriter({
        words: [desktopText],
        loop: 0,
    })

    if (!width) return null

    const isDesktop = width > 1024

    if (!theme) return null

    return (
        <div className="text-lg md:text-xl lg:text-4xl h-dvh text-gray-50 flex flex-col items-center justify-center">
            <pre className="justify-self-center h-70 md:h-90 md:w-3xl">
                <div className="relative">
                    <pre>
                        <div className="sm:text-4xl">
                            <SyntaxHighlighter
                                customStyle={{
                                    display: 'flex',
                                    alignItems: 'start',
                                    justifyContent: 'start',
                                    padding: 0,
                                    overflowX: 'clip',
                                }}
                                language="javascript"
                                style={themes[theme]}
                            >
                                {text}
                            </SyntaxHighlighter>
                            {/* <Cursor /> */}
                        </div>
                    </pre>
                </div>
            </pre>
        </div>
    )
}
