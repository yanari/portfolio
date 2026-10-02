import type { MetadataRoute } from 'next'
import { localeMeta, locales } from '@/content/i18n'
import { siteUrl } from '@/content/profile'

export default function sitemap(): MetadataRoute.Sitemap {
    const languages = Object.fromEntries(locales.map((l) => [localeMeta[l].htmlLang, `${siteUrl}${localeMeta[l].path}`]))
    return locales.map((l) => ({
        url: `${siteUrl}${localeMeta[l].path === '/' ? '' : localeMeta[l].path}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: l === 'en' ? 1 : 0.8,
        alternates: { languages },
    }))
}
