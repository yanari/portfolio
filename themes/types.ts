/**
 * Every theme is a full editor palette: the workbench chrome (activity bar,
 * sidebar, tabs, status bar), the editor surface and the syntax colors.
 * Values are emitted as CSS variables by `themes/index.ts`, so components
 * only ever reference tokens — never raw colors.
 */
export interface EditorTheme {
    label: string
    /** Workbench + editor surfaces and text */
    ui: {
        editor: string
        sidebar: string
        activityBar: string
        tabBar: string
        statusBar: string
        statusBarForeground: string
        hover: string
        selection: string
        lineHighlight: string
        border: string
        foreground: string
        /** Secondary text. Must keep 4.5:1 against `editor` and `sidebar`. */
        muted: string
        /** Decorative only (line numbers, guides). Not for meaningful text. */
        subtle: string
        primary: string
        primaryForeground: string
        secondary: string
        focus: string
        scrollbar: string
        /** Heading text-shadow, e.g. Synthwave's neon. Use `none` to opt out. */
        glow: string
    }
    syntax: {
        keyword: string
        string: string
        property: string
        number: string
        function: string
        type: string
        comment: string
        punctuation: string
        operator: string
    }
}
