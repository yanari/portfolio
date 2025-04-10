'use client'

import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import {
    atomOneDark,
    dracula,
    nord,
} from 'react-syntax-highlighter/dist/esm/styles/hljs'

const themes: { [key: string]: { [key: string]: React.CSSProperties } } = {
    dracula: dracula,
    'atom-one-dark': atomOneDark,
    nord: nord,
}

interface TypewriterEffectProps {
    code: string
    delay?: number
}

export function TypewriterEffect({ code, delay = 50 }: TypewriterEffectProps) {
    const { theme } = useTheme()

    const [currentText, setCurrentText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (currentIndex < code.length) {
            const timeout = setTimeout(() => {
                setCurrentText((prevText) => prevText + code[currentIndex])
                setCurrentIndex((prevIndex) => prevIndex + 1)
            }, delay)

            return () => clearTimeout(timeout)
        }
    }, [currentIndex, delay])

    if (!theme) return null
    return (
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
                        {currentText}
                    </SyntaxHighlighter>
                </div>
            </pre>
        </div>
    )
}
