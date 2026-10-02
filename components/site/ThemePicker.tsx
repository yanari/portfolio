'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Check, Palette } from 'lucide-react'
import * as Menu from '@radix-ui/react-dropdown-menu'
import { defaultTheme, themeIds, themes, type ThemeId } from '@/themes'
import { ui, type Locale } from '@/content/i18n'

function Swatches({ id }: { id: ThemeId }) {
    const { ui: c } = themes[id]
    return (
        <span aria-hidden="true" className="flex overflow-hidden rounded-sm border">
            {[c.editor, c.primary, c.secondary].map((color) => (
                <span key={color} className="size-3" style={{ background: color }} />
            ))}
        </span>
    )
}

export function ThemePicker({ locale }: { locale: Locale }) {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    const current: ThemeId =
        mounted && theme && theme in themes ? (theme as ThemeId) : defaultTheme

    return (
        <Menu.Root>
            <Menu.Trigger
                aria-label={`${ui.theme[locale]}: ${themes[current].label}`}
                className="flex h-full items-center gap-1.5 px-2 hover:bg-hover"
            >
                <Palette size={14} aria-hidden="true" />
                <span className="hidden sm:inline">{mounted ? themes[current].label : ''}</span>
            </Menu.Trigger>
            <Menu.Portal>
                <Menu.Content
                    side="top"
                    align="end"
                    sideOffset={4}
                    className="z-50 min-w-56 border bg-sidebar p-1 font-mono text-sm text-fg shadow-xl"
                >
                    <Menu.Label className="px-2 py-1.5 text-[0.7rem] uppercase tracking-widest text-muted">
                        {ui.theme[locale]}
                    </Menu.Label>
                    <Menu.RadioGroup value={current} onValueChange={setTheme}>
                        {themeIds.map((id) => (
                            <Menu.RadioItem
                                key={id}
                                value={id}
                                className="flex min-h-10 cursor-pointer items-center gap-3 px-2 outline-none data-highlighted:bg-selection md:min-h-8"
                            >
                                <Swatches id={id} />
                                <span className="flex-1">{themes[id].label}</span>
                                <Menu.ItemIndicator>
                                    <Check size={14} className="text-primary" />
                                </Menu.ItemIndicator>
                            </Menu.RadioItem>
                        ))}
                    </Menu.RadioGroup>
                </Menu.Content>
            </Menu.Portal>
        </Menu.Root>
    )
}
