import type { Localized } from './i18n'

export interface Experience {
    company: string
    role: Localized
    /** ISO year-month. `end` omitted = current position. */
    start: string
    end?: string
    location?: Localized
    /** One or two lines. The resume holds the details. */
    summary: Localized
    stack: string[]
}

// Source: Marcelle_Yanari_Yamaguti_Frontend.pdf (resume). Keep both in sync.
export const experience: Experience[] = [
    {
        company: 'Análise Editorial',
        role: { en: 'Full Stack Engineer', pt: 'Full Stack Engineer' },
        start: '2026-01',
        location: { en: 'São Paulo, Brazil', pt: 'São Paulo, Brasil' },
        summary: {
            en: 'Full-stack work on internal reporting, sales and intranet systems — dynamic filters, data-driven interfaces and complex SQL behind them.',
            pt: 'Trabalho full stack em sistemas internos de relatórios, vendas e intranet — filtros dinâmicos, interfaces orientadas a dados e SQL complexo por trás delas.',
        },
        stack: ['Laravel', 'PHP', 'PostgreSQL', 'SQL'],
    },
    {
        company: 'Lopti',
        role: { en: 'Senior Frontend Developer', pt: 'Senior Frontend Developer' },
        start: '2025-05',
        end: '2025-09',
        location: { en: 'San Francisco, CA', pt: 'San Francisco, EUA' },
        summary: {
            en: 'Led frontend development: owned the architecture and key features, and worked with the AI team to turn AI capabilities into usable product experiences.',
            pt: 'Liderei o desenvolvimento frontend: responsável pela arquitetura e features principais, trabalhando com o time de IA para transformar capacidades de IA em experiências de produto usáveis.',
        },
        stack: ['React', 'TypeScript', 'UI/UX', 'AI features'],
    },
    {
        company: 'Accenture',
        role: {
            en: 'Application Development Senior Consultant',
            pt: 'Application Development Senior Consultant',
        },
        start: '2022-02',
        end: '2024-10',
        summary: {
            en: 'Mobile and web delivery for enterprise clients: React Native and Flutter apps for RD, an auto financing platform for a Mexican bank, and GCP data platforms.',
            pt: 'Entregas mobile e web para clientes enterprise: apps React Native e Flutter para a RD, uma plataforma de financiamento automotivo para um banco mexicano e plataformas de dados no GCP.',
        },
        stack: ['React Native', 'Flutter', 'React', 'Redux', 'Node.js', 'GCP'],
    },
    {
        company: 'MultTV',
        role: { en: 'Software Developer', pt: 'Software Developer' },
        start: '2021-09',
        end: '2022-02',
        location: { en: 'São Paulo, Brazil', pt: 'São Paulo, Brasil' },
        summary: {
            en: 'Led the MultTV Plus streaming app from planning to store release on iOS, Android and set-top boxes, working directly with the CEO.',
            pt: 'Conduzi o app de streaming MultTV Plus do planejamento à publicação nas lojas para iOS, Android e set-top boxes, trabalhando direto com o CEO.',
        },
        stack: ['Flutter', 'Dart', 'TDD', 'GitHub Actions'],
    },
    {
        company: 'wepulse',
        role: { en: 'Frontend Developer', pt: 'Frontend Developer' },
        start: '2019-10',
        end: '2020-03',
        location: { en: 'São Paulo, Brazil', pt: 'São Paulo, Brasil' },
        summary: {
            en: 'Built a responsive health services platform and its reusable UI components, integrated with REST APIs.',
            pt: 'Construí uma plataforma responsiva de serviços de saúde e seus componentes de UI reutilizáveis, integrada a APIs REST.',
        },
        stack: ['React', 'Redux', 'Styled Components', 'SASS'],
    },
    {
        company: 'Análise Editorial',
        role: { en: 'Frontend Developer', pt: 'Frontend Developer' },
        start: '2019-03',
        end: '2019-09',
        location: { en: 'São Paulo, Brazil', pt: 'São Paulo, Brasil' },
        summary: {
            en: 'Built the company website from scratch, with custom animated components and REST integration with a CRM developed in parallel.',
            pt: 'Construí o site da empresa do zero, com componentes animados próprios e integração REST com um CRM desenvolvido em paralelo.',
        },
        stack: ['React', 'Redux', 'CSS Modules', 'React Spring'],
    },
]

export const education: { school: string; course: Localized; period?: string }[] = [
    {
        school: 'Centro Universitário FAM',
        course: {
            en: 'Artificial Intelligence, Information Technology',
            pt: 'Inteligência Artificial, Tecnologia da Informação',
        },
        period: '2026 — 2028',
    },
    {
        school: 'FATEC-SP',
        course: {
            en: 'Technologist, Systems Analysis and Development',
            pt: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
        },
    },
]
