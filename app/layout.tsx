import './globals.css'
import { ThemeProvider } from '../providers/theme'
import { ThemeToggles } from '@/components/ThemeToggles'
import SideMenu from '@/components/SideMenu'

import { Fira_Mono } from 'next/font/google'

const firaMono = Fira_Mono({
    weight: ['400', '500'],
    variable: '--font-mono',
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`min-h-screen bg-background ${firaMono.variable}`}>
                <ThemeProvider
                    defaultTheme="atom-one-dark"
                    enableColorScheme
                    themes={['atom-one-dark', 'nord', 'dracula']}
                >
                    <SideMenu />
                    <header className="fixed right-6 top-6">
                        <ThemeToggles />
                    </header>
                    <div className="flex-1 ml-16 md:ml-64">{children}</div>
                </ThemeProvider>
            </body>
        </html>
    )
}
