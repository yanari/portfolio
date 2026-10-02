import type { EditorTheme } from './types'

// Atom One Dark — https://github.com/atom/one-dark-syntax
const oneDark: EditorTheme = {
    label: 'Atom One Dark',
    ui: {
        editor: '#282c34',
        sidebar: '#21252b',
        activityBar: '#21252b',
        tabBar: '#21252b',
        statusBar: '#21252b',
        statusBarForeground: '#9da5b4',
        hover: '#2c313a',
        selection: '#3e4451',
        lineHighlight: '#2c313c',
        border: '#181a1f',
        foreground: '#abb2bf',
        muted: '#9da5b4',
        subtle: '#636d83',
        primary: '#98c379',
        primaryForeground: '#21252b',
        secondary: '#c678dd',
        focus: '#528bff',
        scrollbar: '#4e566680',
        glow: 'none',
    },
    syntax: {
        keyword: '#c678dd',
        string: '#98c379',
        property: '#e5737c',
        number: '#d19a66',
        function: '#61afef',
        type: '#e5c07b',
        comment: '#9098a5',
        punctuation: '#abb2bf',
        operator: '#56b6c2',
    },
}

export default oneDark
