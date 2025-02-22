export interface IThemeConfig {
    background: string;
    secondary: string;
    primary: string;
}

export interface ITheme {
    [index: string]: IThemeConfig;
}