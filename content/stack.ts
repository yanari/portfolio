import type { Localized } from './i18n'

export interface StackGroup {
    key: string
    /** Rendered as a `//` comment: what this group means in practice. */
    note: Localized
    items: string[]
}

// Grouped by what I do with it, not by how many logos fit on a screen.
export const stack: StackGroup[] = [
    {
        key: 'frontend',
        note: {
            en: 'my main area — production web apps since 2019',
            pt: 'minha área principal — web apps em produção desde 2019',
        },
        items: ['React', 'TypeScript', 'Next.js', 'JavaScript', 'Redux', 'Tailwind CSS', 'Styled Components', 'SASS'],
    },
    {
        key: 'mobile',
        note: {
            en: 'shipped to the App Store, Google Play and set-top boxes',
            pt: 'publicado na App Store, Google Play e em set-top boxes',
        },
        items: ['React Native', 'Flutter', 'Dart'],
    },
    {
        key: 'backend',
        note: {
            en: 'APIs and services behind the interfaces I build',
            pt: 'APIs e serviços por trás das interfaces que construo',
        },
        items: ['Node.js', 'REST APIs', 'Laravel', 'PHP', 'Python', 'Flask'],
    },
    {
        key: 'cloudAndData',
        note: {
            en: 'GCP services in production for enterprise clients',
            pt: 'serviços GCP em produção para clientes enterprise',
        },
        items: ['GCP', 'Firebase', 'Supabase', 'AWS', 'PostgreSQL', 'BigQuery'],
    },
    {
        key: 'ai',
        note: {
            en: 'AI features in products, AI-assisted development day to day',
            pt: 'features de IA em produtos, desenvolvimento assistido por IA no dia a dia',
        },
        items: ['AI-powered features', 'AI-assisted development'],
    },
    {
        key: 'practice',
        note: {
            en: 'how the work gets done',
            pt: 'como o trabalho acontece',
        },
        items: ['UI/UX', 'Figma', 'Frontend architecture', 'Code review', 'TDD', 'CI/CD', 'Analytics (GA4)', 'Agile'],
    },
]
