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
import { PortfolioThemes } from '@/themes/themes'
import { cn } from '@/lib/utils'

export function ThemeToggles() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => setMounted(true), [])

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="cursor-pointer">
                <Button variant="outline" size="icon">
                    <Palette className="h-[1.2rem] w-[1.2rem] transition-all text-primary" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background" align="end">
                {Object.entries(PortfolioThemes).map(([key, value]) => {
                    const isSelected = mounted && theme === key
                    const textColor = isSelected ? 'text-primary' : 'text-white'
                    return (
                        <DropdownMenuItem
                            className={cn(
                                'px-4 py-2 font-semibold rounded-md transition-colors duration-200',
                                textColor
                            )}
                            onClick={() => setTheme(key)}
                            key={key}
                        >
                            {value.label}
                        </DropdownMenuItem>
                    )
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
