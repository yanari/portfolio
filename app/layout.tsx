import './globals.css'
import { ThemeProvider } from '../components/ThemeProvider'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="bg-background min-h-[100dvh]">
                <ThemeProvider
                    defaultTheme="atom-one-dark"
                    enableColorScheme
                    themes={['atom-one-dark', 'nord', 'dracula']}
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
