"use client";

import { useState, createContext, useContext, useMemo } from "react";
import { ITheme, IThemeConfig } from "@/shared/interfaces/theme.interface";
import Themes from "../data/themes.json";

interface IThemeContextProps {
    themeConfig: IThemeConfig;
    theme: string;
    setTheme: (theme: string) => void;
}
  
export const ThemeContext = createContext<IThemeContextProps>({
    themeConfig: {} as IThemeConfig,
    theme: 'atom-one-dark',
    setTheme: () => {}
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const themeData: ITheme = Themes;

    const [theme, setTheme] = useState<string>('atom-one-dark');

    const themeConfig = useMemo(() => themeData[theme], [themeData, theme]);

    return (
        <ThemeContext.Provider value={{ themeConfig, theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext);
};
