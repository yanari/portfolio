import { PrismTheme, themes as PrismThemes } from 'prism-react-renderer'
import atomDark from './atomDark'

interface Theme {
    label: string
    file: PrismTheme
}

export const PortfolioThemes: Record<string, Theme> = {
    dracula: { label: 'Dracula', file: PrismThemes.dracula },
    'atom-one-dark': { label: 'Atom One Dark', file: atomDark },
    synthwave84: { label: 'Synthwave84', file: PrismThemes.synthwave84 },
}

export const PortfolioThemesNames = Object.keys(PortfolioThemes)
