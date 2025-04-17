import './globals.css'
import { ThemeProvider } from '../providers/theme'
import { ThemeToggles } from '@/components/layout/ThemeToggles'
import SideMenu from '@/components/layout/SideMenu'

import { Fira_Mono, VT323 } from 'next/font/google'

const firaMono = Fira_Mono({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    variable: '--font-mono',
})

const vt323 = VT323({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-vt323',
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`min-h-screen bg-background ${firaMono.variable} ${vt323.variable}`}
            >
                <ThemeProvider
                    defaultTheme="atom-one-dark"
                    enableColorScheme
                    themes={['atom-one-dark', 'nord', 'dracula']}
                >
                    <SideMenu />
                    <header className="fixed right-6 top-6 z-10">
                        <ThemeToggles />
                    </header>
                    <div className="flex-1 ml-16 md:ml-64">{children}</div>
                </ThemeProvider>
            </body>
        </html>
    )
}
