import { ITheme, IThemeConfig } from "@/shared/interfaces/theme.interface";
import { createStore } from "zustand/vanilla";
import Themes from '../data/themes.json';

export type ThemeState = {
    name: string,
    config: IThemeConfig,
};

export type CounterActions = {
    setTheme: (name: string) => void;
};

export type ThemeStore = ThemeState & CounterActions;

export const defaultInitState: ThemeState = {
    name: 'atom-one-dark',
    config: {
        "background": "bg-[#282c34]",
        "secondary": "bg-slate-800",
        "primary": "#c678dd"
    },
};

export const createThemeStore = (
    initState: ThemeState = defaultInitState
) => {
    const themeData: ITheme = Themes;

    return createStore<ThemeStore>()((set) => ({
        ...initState,
        setTheme: (name) => set(() => ({ name: name, config: themeData[name] })),
    }));
};
