import { useThemeStore } from '@/providers/theme'
import React, { useState, useEffect } from 'react'

import SyntaxHighlighter from 'react-syntax-highlighter'
import {
    atomOneDark,
    dracula,
    nord,
} from 'react-syntax-highlighter/dist/esm/styles/hljs'

const javascriptCode = `const introduction = {
    name: 'Marcelle Yanari',
    role: 'Frontend Developer',
    yearsOfExperience: 5
};
`

const themes: { [key: string]: { [key: string]: React.CSSProperties } } = {
    dracula: dracula,
    'atom-one-dark': atomOneDark,
    nord: nord,
}

const Typewriter = ({ delay = 100 }) => {
    const { name } = useThemeStore((state) => state)

    const [currentText, setCurrentText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (currentIndex < javascriptCode.length) {
            const timeout = setTimeout(() => {
                setCurrentText(
                    (prevText) => prevText + javascriptCode[currentIndex]
                )
                setCurrentIndex((prevIndex) => prevIndex + 1)
            }, delay)

            return () => clearTimeout(timeout)
        }
    }, [currentIndex, delay])

    return (
        <div className="sm:text-4xl">
            <SyntaxHighlighter
                customStyle={{
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'start',
                }}
                language="javascript"
                style={themes[name]}
            >
                {currentText}
            </SyntaxHighlighter>
        </div>
    )
}

export default Typewriter
