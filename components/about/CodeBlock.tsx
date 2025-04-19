'use client'

import { cn } from '@/lib/utils'
import { PortfolioThemes } from '@/themes/themes'
import { useTheme } from 'next-themes'
import { Highlight } from 'prism-react-renderer'
import { useEffect, useState } from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

interface CodeBlockProps {
    code: string
}

export function CodeBlock({ code }: CodeBlockProps) {
    const [mounted, setMounted] = useState(false)
    const { theme } = useTheme()

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])
    const [text] = useTypewriter({
        words: [code],
        typeSpeed: 30,
        delaySpeed: 1000,
    })

    if (!mounted) {
        return null
    }

    return (
        <Highlight
            code={text}
            language="js"
            theme={PortfolioThemes[theme!].file}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre
                    className={cn(className, 'text-base md:text-4xl p-5')}
                    style={style}
                >
                    {tokens.map((line, i) => {
                        const { key, ...rest } = getLineProps({
                            line,
                            key: i,
                        })
                        return (
                            <div key={key as number} {...rest}>
                                {line.map((token, key) => {
                                    const { key: tokenKey, ...rest } =
                                        getTokenProps({ token, key })
                                    return (
                                        <span
                                            key={tokenKey as number}
                                            {...rest}
                                        />
                                    )
                                })}
                                {/* Attach blinking cursor to the last line */}
                                {i === tokens.length - 1 && <Cursor key={i} />}
                            </div>
                        )
                    })}
                </pre>
            )}
        </Highlight>
    )
}
