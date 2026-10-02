import type { Metadata, Viewport } from 'next'
import { Fira_Mono, IBM_Plex_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { defaultTheme, themeCss, themeIds, themes } from '@/themes'
import { localeMeta, locales, type Locale } from '@/content/i18n'
import { profile, seo, siteUrl } from '@/content/profile'

const firaMono = Fira_Mono({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    variable: '--font-fira-mono',
    display: 'swap',
})

const plexMono = IBM_Plex_Mono({
    weight: ['600', '700'],
    subsets: ['latin', 'latin-ext'],
    variable: '--font-plex-mono',
    display: 'swap',
})

export function buildMetadata(locale: Locale): Metadata {
    const path = localeMeta[locale].path
    return {
        metadataBase: new URL(siteUrl),
        title: seo.title[locale],
        description: seo.description[locale],
        authors: [{ name: profile.fullName, url: siteUrl }],
        keywords: [
            'Senior Frontend Developer',
            'Frontend Engineer',
            'React Developer',
            'React Native Developer',
            'TypeScript',
            'Next.js',
            'Flutter',
            'Mobile Developer',
            'UI/UX',
            'AI applications',
            'São Paulo',
        ],
        alternates: {
            canonical: path,
            languages: {
                ...Object.fromEntries(locales.map((l) => [localeMeta[l].htmlLang, localeMeta[l].path])),
                'x-default': '/',
            },
        },
        openGraph: {
            type: 'profile',
            url: path,
            siteName: profile.name,
            title: seo.title[locale],
            description: seo.description[locale],
            locale: localeMeta[locale].ogLocale,
            alternateLocale: locales.filter((l) => l !== locale).map((l) => localeMeta[l].ogLocale),
            firstName: 'Marcelle',
            lastName: 'Yanari',
        },
        twitter: {
            card: 'summary_large_image',
            title: seo.title[locale],
            description: seo.description[locale],
        },
    }
}

export const viewport: Viewport = {
    themeColor: themes[defaultTheme].ui.editor,
    colorScheme: 'dark',
}

export function RootDocument({ locale, children }: { locale: Locale; children: React.ReactNode }) {
    return (
        <html lang={localeMeta[locale].htmlLang} suppressHydrationWarning className={`${firaMono.variable} ${plexMono.variable}`}>
            <body>
                <style dangerouslySetInnerHTML={{ __html: themeCss }} />
                <ThemeProvider
                    attribute="data-theme"
                    defaultTheme={defaultTheme}
                    themes={themeIds}
                    enableSystem={false}
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
