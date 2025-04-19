import type { PrismTheme } from 'prism-react-renderer'

const atomDark: PrismTheme = {
    plain: {
        color: '#abb2bf',
        backgroundColor: '#282c34',
    },
    styles: [
        {
            types: ['comment', 'prolog', 'doctype', 'cdata'],
            style: { color: '#5c6370', fontStyle: 'italic' },
        },
        {
            types: ['punctuation'],
            style: { color: '#abb2bf' },
        },
        {
            types: [
                'property',
                'tag',
                'boolean',
                'number',
                'constant',
                'symbol',
            ],
            style: { color: '#d19a66' },
        },
        {
            types: ['attr-name', 'string', 'char', 'builtin', 'inserted'],
            style: { color: '#98c379' },
        },
        {
            types: ['operator', 'entity', 'url', 'language-css'],
            style: { color: '#56b6c2' },
        },
        {
            types: ['function'],
            style: { color: '#61afef' },
        },
        {
            types: ['keyword'],
            style: { color: '#c678dd' },
        },
        {
            types: ['deleted'],
            style: { color: '#e06c75' },
        },
    ],
}

export default atomDark
