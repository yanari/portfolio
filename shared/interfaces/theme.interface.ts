export interface IThemeConfig {
    background: string
    backgroundSecondary: string
    secondary: string
    primary: string
}

export interface ITheme {
    [index: string]: IThemeConfig
}
