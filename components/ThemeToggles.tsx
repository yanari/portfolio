'use client'

import * as React from 'react'
import { Palette } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

type ThemeName = 'dracula' | 'atom-one-dark' | 'nord'

export function ThemeToggles() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => setMounted(true), [])

    const themeMapping: Record<ThemeName, string> = {
        'atom-one-dark': 'Atom One Dark',
        dracula: 'Dracula',
        nord: 'Nord',
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Palette className="h-[1.2rem] w-[1.2rem] transition-all text-primary" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background" align="end">
                {Object.entries(themeMapping).map(([key, value]) => (
                    <DropdownMenuItem
                        className={`px-4 py-2 font-semibold rounded-md transition-colors duration-200 ${
                            // The theme is only available after the component is mounted.
                            mounted && theme == key
                                ? 'text-primary'
                                : ' text-white'
                        }`}
                        onClick={() => setTheme(key)}
                    >
                        {value}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
