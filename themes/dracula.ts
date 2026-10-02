import type { EditorTheme } from './types'

// Dracula — https://draculatheme.com/contribute (official spec)
const dracula: EditorTheme = {
    label: 'Dracula',
    ui: {
        editor: '#282a36',
        sidebar: '#21222c',
        activityBar: '#343746',
        tabBar: '#191a21',
        statusBar: '#191a21',
        statusBarForeground: '#f8f8f2',
        hover: '#343746',
        selection: '#44475a',
        lineHighlight: '#44475a75',
        border: '#191a21',
        foreground: '#f8f8f2',
        muted: '#a4acd4',
        subtle: '#6272a4',
        primary: '#bd93f9',
        primaryForeground: '#191a21',
        secondary: '#ff79c6',
        focus: '#bd93f9',
        scrollbar: '#6272a466',
        glow: 'none',
    },
    syntax: {
        keyword: '#ff79c6',
        string: '#f1fa8c',
        property: '#8be9fd',
        number: '#bd93f9',
        function: '#50fa7b',
        type: '#8be9fd',
        comment: '#8a96c7',
        punctuation: '#f8f8f2',
        operator: '#ff79c6',
    },
}

export default dracula
