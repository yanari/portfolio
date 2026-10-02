import type { EditorTheme } from './types'

// SynthWave '84 — https://github.com/robb0wen/synthwave-vscode
const synthwave84: EditorTheme = {
    label: "SynthWave '84",
    ui: {
        editor: '#262335',
        sidebar: '#241b2f',
        activityBar: '#171520',
        tabBar: '#1e1a2b',
        statusBar: '#241b2f',
        statusBarForeground: '#c5c2d6',
        hover: '#34294f',
        selection: '#463465',
        lineHighlight: '#34294f66',
        border: '#34294f',
        foreground: '#f0eff1',
        muted: '#a6abd4',
        subtle: '#6d6a8a',
        primary: '#ff7edb',
        primaryForeground: '#171520',
        secondary: '#72f1b8',
        focus: '#36f9f6',
        scrollbar: '#9d8bca30',
        glow: '0 0 2px #100c0f, 0 0 8px #dc078e66, 0 0 14px #ff7edb33',
    },
    syntax: {
        keyword: '#fede5d',
        string: '#ff8b39',
        property: '#ff7edb',
        number: '#f97e72',
        function: '#36f9f6',
        type: '#fe5866',
        comment: '#9a9fcd',
        punctuation: '#bbbbbb',
        operator: '#fede5d',
    },
}

export default synthwave84
