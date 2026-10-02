import type { Localized } from './i18n'

export const siteUrl = 'https://portfolio-yanari.vercel.app'

export const profile = {
    name: 'Marcelle Yanari',
    fullName: 'Marcelle Yanari Yamaguti',
    role: {
        en: 'Senior Frontend & Mobile Developer',
        pt: 'Desenvolvedora Frontend & Mobile Sênior',
    } satisfies Localized,
    tagline: {
        en: 'I build web and mobile products end to end — from the interface architecture to the APIs behind it.',
        pt: 'Construo produtos web e mobile de ponta a ponta — da arquitetura da interface às APIs por trás dela.',
    } satisfies Localized,
    location: { en: 'São Paulo, Brazil', pt: 'São Paulo, Brasil' } satisfies Localized,
    since: 2019,
    openToWork: true,
    email: 'yanarimy@gmail.com',
    github: 'https://github.com/yanari',
    linkedin: 'https://www.linkedin.com/in/yanari',
    resume: '/marcelle-yanari-resume.pdf',
    // What the hero code block lists as `stack` / `focus`
    mainStack: ['React', 'TypeScript', 'Next.js', 'React Native', 'Flutter'],
    focus: {
        en: ['product UI', 'frontend architecture', 'mobile apps', 'AI-powered features'],
        pt: ['UI de produto', 'arquitetura frontend', 'apps mobile', 'features com IA'],
    } satisfies Localized<string[]>,
}

export const seo = {
    title: {
        en: 'Marcelle Yanari — Senior Frontend & Mobile Developer',
        pt: 'Marcelle Yanari — Desenvolvedora Frontend & Mobile Sênior',
    } satisfies Localized,
    description: {
        en: 'Senior Frontend & Mobile Developer based in São Paulo. React, TypeScript, Next.js, React Native and Flutter — building web and mobile products for fintech, retail, telecom and AI teams since 2019.',
        pt: 'Desenvolvedora Frontend & Mobile Sênior em São Paulo. React, TypeScript, Next.js, React Native e Flutter — construindo produtos web e mobile para fintech, varejo, telecom e times de IA desde 2019.',
    } satisfies Localized,
}
