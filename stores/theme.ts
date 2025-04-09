import { ITheme, IThemeConfig } from '@/shared/interfaces/theme.interface'
import { createStore } from 'zustand/vanilla'
import Themes from '../data/themes.json'

export type ThemeState = {
    name: string
    config: IThemeConfig
}

export type CounterActions = {
    setTheme: (name: string) => void
}

export type ThemeStore = ThemeState & CounterActions

const themeData: ITheme = Themes

const initialTheme = 'atom-one-dark'
const initialConfig = themeData[initialTheme]

export const defaultInitState: ThemeState = {
    name: initialTheme,
    config: initialConfig,
}

export const createThemeStore = (initState: ThemeState = defaultInitState) => {
    return createStore<ThemeStore>()((set) => ({
        ...initState,
        setTheme: (name) =>
            set(() => ({ name: name, config: themeData[name] })),
    }))
}
