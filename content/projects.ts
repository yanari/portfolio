import type { Localized } from './i18n'

export type ProjectType = 'work' | 'personal'
export type ProjectStatus = 'live' | 'shipped' | 'delivered' | 'archived' | 'in-progress'

export interface Project {
    slug: string
    type: ProjectType
    name: string
    /** Who it was for / where it happened, e.g. "Accenture · for RD" */
    context?: Localized
    period?: string
    status?: ProjectStatus
    /** Short label for the kind of product: "Mobile apps", "Web platform"… */
    kind: Localized
    /** One or two sentences. Always shown. */
    summary: Localized
    problem?: Localized
    solution?: Localized
    role?: Localized
    highlights?: Localized<string[]>
    stack: string[]
    images?: { src: string; alt: Localized; width: number; height: number }[]
    links?: { live?: string; github?: string }
}

/*
 * Optional fields left undefined are simply not rendered. Anything marked
 * TODO(marcelle) needs first-hand information that the resume doesn't cover —
 * fill it in rather than guessing.
 */
export const projects: Project[] = [
    {
        slug: 'rd-mobile-apps',
        type: 'work',
        name: 'RD mobile apps',
        context: { en: 'Accenture · for RaiaDrogasil (RD)', pt: 'Accenture · para RaiaDrogasil (RD)' },
        period: '2022 — 2024',
        status: 'delivered',
        kind: { en: 'Mobile apps · Martech', pt: 'Apps mobile · Martech' },
        summary: {
            en: 'Analytics and CRM integrations for the React Native and Flutter apps of RD, one of the largest pharmacy groups in Brazil — the channel behind 75% of its digital interactions and 17% of its sales.',
            pt: 'Integrações de analytics e CRM nos apps React Native e Flutter da RD, um dos maiores grupos de farmácias do Brasil — o canal por trás de 75% das interações digitais e 17% das vendas da empresa.',
        },
        role: {
            en: 'Led the integration of Google Analytics and Salesforce into the apps, including a Flutter in-app messaging project.',
            pt: 'Liderei a integração do Google Analytics e do Salesforce nos apps, incluindo um projeto Flutter de mensagens in-app.',
        },
        highlights: {
            en: [
                'Personalized communication delivered directly through the mobile apps',
                'Upgraded the GA infrastructure to GA4, enabling precise behavior tracking',
            ],
            pt: [
                'Comunicação personalizada entregue diretamente pelos apps',
                'Migração da infraestrutura de GA para o GA4, com rastreamento preciso de comportamento',
            ],
        },
        stack: ['React Native', 'Flutter', 'Google Analytics 4', 'Salesforce'],
    },
    {
        slug: 'auto-financing-platform',
        type: 'work',
        name: 'Auto financing platform',
        context: { en: 'Accenture · for a leading Mexican bank', pt: 'Accenture · para um grande banco mexicano' },
        period: '2022 — 2024',
        status: 'delivered',
        kind: { en: 'Web platform · Fintech', pt: 'Plataforma web · Fintech' },
        summary: {
            en: 'A complete vehicle financing platform with quick approvals and flexible loan terms from 12 to 60 months.',
            pt: 'Uma plataforma completa de financiamento de veículos, com aprovações rápidas e prazos flexíveis de 12 a 60 meses.',
        },
        role: {
            en: 'Built the platform with React and Redux, working from Figma designs.',
            pt: 'Construí a plataforma com React e Redux, a partir dos designs no Figma.',
        },
        // TODO(marcelle): problem / solution / highlights — e.g. the hardest flow, team size.
        stack: ['React', 'Redux', 'Figma'],
    },
    {
        slug: 'multtv-plus',
        type: 'work',
        name: 'MultTV Plus',
        context: { en: 'MultTV', pt: 'MultTV' },
        period: '2021 — 2022',
        status: 'shipped',
        kind: { en: 'Streaming app · iOS, Android, set-top box', pt: 'App de streaming · iOS, Android, set-top box' },
        summary: {
            en: 'A white-label streaming app with 70+ live TV channels and 3,000+ on-demand titles, released on the App Store, Google Play and set-top boxes.',
            pt: 'Um app de streaming white-label com mais de 70 canais ao vivo e 3.000+ títulos sob demanda, publicado na App Store, Google Play e em set-top boxes.',
        },
        // TODO(marcelle): problem / solution in your own words.
        role: {
            en: 'Led development end to end — planning, TDD, CI/CD and store releases — working directly with the CEO.',
            pt: 'Conduzi o desenvolvimento de ponta a ponta — planejamento, TDD, CI/CD e publicação nas lojas — trabalhando direto com o CEO.',
        },
        highlights: {
            en: [
                'White-label customization for regional ISPs',
                '1,000+ downloads on Google Play',
                'Automated CI/CD with GitHub Actions',
            ],
            pt: [
                'Customização white-label para provedores regionais',
                'Mais de 1.000 downloads no Google Play',
                'CI/CD automatizado com GitHub Actions',
            ],
        },
        stack: ['Flutter', 'Dart', 'TDD', 'GitHub Actions'],
    },
    {
        slug: 'lopti',
        type: 'work',
        name: 'Lopti',
        context: { en: 'Lopti · San Francisco', pt: 'Lopti · San Francisco' },
        period: '2025',
        kind: { en: 'AI product · Web', pt: 'Produto com IA · Web' },
        summary: {
            en: 'Frontend for an AI product: turning what the models can do into interfaces people can actually use.',
            pt: 'Frontend de um produto com IA: transformar o que os modelos fazem em interfaces que as pessoas conseguem de fato usar.',
        },
        // TODO(marcelle): what the product does, the problem it solves and 1–2 features you're proud of.
        role: {
            en: 'Frontend lead — architecture, development standards, reusable components and code reviews, working with product, design, backend and AI teams.',
            pt: 'Liderança de frontend — arquitetura, padrões de desenvolvimento, componentes reutilizáveis e code review, junto com os times de produto, design, backend e IA.',
        },
        stack: ['React', 'TypeScript', 'UI/UX'],
    },
    {
        slug: 'tim-data-platform',
        type: 'work',
        name: 'Data monetization platform',
        context: { en: 'Accenture · for TIM Brasil', pt: 'Accenture · para a TIM Brasil' },
        period: '2022 — 2024',
        status: 'delivered',
        kind: { en: 'Cloud platform · Data', pt: 'Plataforma cloud · Dados' },
        summary: {
            en: 'A GCP platform that stitches behavioral data for 62M+ telecom customers, opening new data-driven business opportunities.',
            pt: 'Uma plataforma no GCP que unifica dados comportamentais de mais de 62 milhões de clientes de telecom, abrindo novas oportunidades de negócio com dados.',
        },
        stack: ['GCP', 'Cloud Run', 'Pub/Sub', 'BigQuery', 'Python', 'Flask'],
    },
    {
        slug: 'neurotimer',
        type: 'personal',
        name: 'Neurotimer',
        status: 'live',
        kind: { en: 'Web app · Productivity', pt: 'Web app · Produtividade' },
        summary: {
            en: 'A Pomodoro timer with ambient soundscapes for focus — pink noise, brown noise and coffee shop sounds, each with a short note on its cognitive benefits.',
            pt: 'Um timer Pomodoro com sons ambientes para foco — ruído rosa, ruído marrom e som de cafeteria, cada um com uma nota curta sobre seus benefícios cognitivos.',
        },
        stack: ['React', 'TypeScript', 'Tailwind CSS', 'Context API'],
        images: [
            {
                src: '/images/neurotimer_desktop.webp',
                alt: { en: 'Neurotimer focus session with ambient sound options', pt: 'Sessão de foco do Neurotimer com opções de som ambiente' },
                width: 1600,
                height: 1001,
            },
            {
                src: '/images/neurotimer_mobile.webp',
                alt: { en: 'Neurotimer long break timer', pt: 'Timer de pausa longa do Neurotimer' },
                width: 800,
                height: 800,
            },
        ],
        links: { live: 'https://neurotimer.vercel.app', github: 'https://github.com/yanari/neuro-timer' },
    },
    {
        slug: 'elemental-sign',
        type: 'personal',
        name: "What's Your Elemental Sign?",
        status: 'live',
        kind: { en: 'Full-stack web app', pt: 'Web app full stack' },
        summary: {
            en: 'Calculates the dominant element — fire, earth, air or water — in a birth chart. Users enter their birth data and get a charted analysis based on astrology rules.',
            pt: 'Calcula o elemento dominante — fogo, terra, ar ou água — em um mapa astral. A pessoa informa seus dados de nascimento e recebe uma análise em gráfico baseada em regras de astrologia.',
        },
        stack: ['Nuxt', 'Vue', 'Python', 'Chart.js'],
        images: [
            {
                src: '/images/whatsyourelementalsign_desktop.webp',
                alt: { en: 'Elemental sign result with element breakdown chart', pt: 'Resultado do signo elemental com gráfico dos elementos' },
                width: 1600,
                height: 1001,
            },
            {
                src: '/images/whatsyourelementalsign_mobile.webp',
                alt: { en: 'Elemental sign app on mobile', pt: 'App do signo elemental no mobile' },
                width: 800,
                height: 800,
            },
        ],
        links: {
            live: 'https://whatyourelementalsign.vercel.app',
            github: 'https://github.com/yanari/whats_your_elemental_sign',
        },
    },
]
