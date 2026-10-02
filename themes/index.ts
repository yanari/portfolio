import type { EditorTheme } from './types'
import oneDark from './one-dark'
import dracula from './dracula'
import synthwave84 from './synthwave84'

/**
 * To add a theme: create a file that exports an `EditorTheme` and register it
 * here. The key is what gets stored by next-themes and set as `data-theme`.
 */
export const themes = {
    'atom-one-dark': oneDark,
    dracula,
    synthwave84,
} satisfies Record<string, EditorTheme>

export type ThemeId = keyof typeof themes

export const defaultTheme: ThemeId = 'atom-one-dark'
export const themeIds = Object.keys(themes) as ThemeId[]

const kebab = (key: string) => key.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`)

function toVariables(theme: EditorTheme) {
    const ui = Object.entries(theme.ui).map(([k, v]) => `--${kebab(k)}:${v};`)
    const syntax = Object.entries(theme.syntax).map(
        ([k, v]) => `--syntax-${kebab(k)}:${v};`
    )
    return [...ui, ...syntax].join('')
}

/** CSS for every theme. The default theme also applies before JS runs. */
export const themeCss = [
    `:root{color-scheme:dark;${toVariables(themes[defaultTheme])}}`,
    ...themeIds.map(
        (id) => `html[data-theme='${id}']{${toVariables(themes[id])}}`
    ),
].join('\n')
