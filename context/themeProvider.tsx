"use client";

import { ITheme } from "@/shared/interfaces/theme.interface";
import { useState, createContext, useContext, useMemo } from "react";
import Themes from "../data/themes.json";

const ThemeContext = createContext({});

export const useTheme = () => {
    return useContext(ThemeContext);
};

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
