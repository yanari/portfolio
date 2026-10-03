import type { Localized } from './i18n'

/*
 * Resume-only content. Everything else (name, links, roles, dates, stack,
 * education) comes from the other content files, so the site and the resume
 * stay in sync. Build with `pnpm resume`.
 */
export const resume = {
    summary: {
        en: 'Senior Frontend & Mobile Developer with 6+ years of experience building web and mobile products with React, TypeScript, Next.js, React Native and Flutter. Shipped products for retail, fintech, streaming, telecom and legal AI — from interface architecture and reusable components to API integration and cloud services on GCP.',
        pt: 'Desenvolvedora Frontend & Mobile Sênior com mais de 6 anos de experiência construindo produtos web e mobile com React, TypeScript, Next.js, React Native e Flutter. Entreguei produtos para varejo, fintech, streaming, telecom e IA jurídica — da arquitetura de interface e componentes reutilizáveis à integração com APIs e serviços cloud no GCP.',
    } satisfies Localized,

    sectionTitles: {
        summary: { en: 'Summary', pt: 'Resumo' },
        experience: { en: 'Experience', pt: 'Experiência' },
        skills: { en: 'Skills', pt: 'Competências' },
        education: { en: 'Education', pt: 'Formação' },
    } satisfies Record<string, Localized>,

    /** Labels for the groups in `content/stack.ts` */
    skillLabels: {
        frontend: { en: 'Frontend', pt: 'Frontend' },
        mobile: { en: 'Mobile', pt: 'Mobile' },
        backend: { en: 'Backend', pt: 'Backend' },
        cloudAndData: { en: 'Cloud & Data', pt: 'Cloud & Dados' },
        ai: { en: 'AI', pt: 'IA' },
        practice: { en: 'Practices', pt: 'Práticas' },
    } satisfies Record<string, Localized>,

    inProgress: { en: 'in progress', pt: 'em andamento' } satisfies Localized,

    /** Bullets per position, keyed by `${company}@${start}` from `content/experience.ts` */
    bullets: {
        'Análise Editorial@2026-01': {
            en: [
                'Develop and maintain full-stack applications with Laravel, PHP and PostgreSQL, focused on data-intensive features.',
                'Build internal reporting systems with dynamic filters and data-driven interfaces tailored to business requirements.',
                'Design and optimize complex SQL queries for reporting, data retrieval, filtering and internal workflows.',
                'Enhance internal sales and intranet systems with new features, workflows and integrations, using AI-assisted development workflows.',
            ],
            pt: [
                'Desenvolvo e mantenho aplicações full-stack com Laravel, PHP e PostgreSQL, com foco em funcionalidades intensivas em dados.',
                'Construo sistemas internos de relatórios com filtros dinâmicos e interfaces orientadas a dados.',
                'Projeto e otimizo consultas SQL complexas para relatórios, recuperação de dados, filtros e fluxos internos.',
                'Evoluo sistemas internos de vendas e intranet com novas funcionalidades, fluxos e integrações, usando desenvolvimento assistido por IA.',
            ],
        },
        'Lopti@2025-05': {
            en: [
                'Built core screens and reusable UI components of a legal AI platform with React, Redux and TypeScript.',
                'Implemented real-time communication for the AI chat using WebSockets.',
                'Worked closely with the AI team on the frontend experience around legal documents and AI responses.',
                'Contributed to frontend architecture, development standards and code reviews.',
            ],
            pt: [
                'Desenvolvi as principais telas e componentes de UI reutilizáveis de uma plataforma de IA jurídica com React, Redux e TypeScript.',
                'Implementei a comunicação em tempo real do chat com IA usando WebSockets.',
                'Trabalhei junto ao time de IA na experiência frontend envolvendo documentos jurídicos e respostas da IA.',
                'Contribuí com a arquitetura frontend, padrões de desenvolvimento e code reviews.',
            ],
        },
        'Accenture@2022-02': {
            en: [
                'Led Google Analytics 4 and Salesforce integrations in the React Native and Flutter apps of RaiaDrogasil (RD) — the channel behind 75% of its digital interactions and 17% of its sales.',
                'Built the frontend of AutoMarket, a vehicle marketplace and financing platform for a major Mexican bank, with React and Redux from Figma designs, in a Spanish-speaking team.',
                'Co-designed and implemented a GCP data monetization platform for TIM Brasil (Cloud Run, Pub/Sub, Cloud Functions, BigQuery, Python, Flask) over behavioral data from 62M+ customers.',
                'Migrated a legacy system to Node.js with cron jobs and GCP services (Pub/Sub, Cloud Scheduler, Cloud Functions).',
            ],
            pt: [
                'Liderei integrações de Google Analytics 4 e Salesforce nos apps React Native e Flutter da RaiaDrogasil (RD) — canal responsável por 75% das interações digitais e 17% das vendas.',
                'Desenvolvi o frontend do AutoMarket, marketplace de veículos com financiamento para um grande banco mexicano, com React e Redux a partir do Figma, em um time de língua espanhola.',
                'Projetei e implementei uma plataforma de monetização de dados no GCP para a TIM Brasil (Cloud Run, Pub/Sub, Cloud Functions, BigQuery, Python, Flask) sobre dados comportamentais de mais de 62 milhões de clientes.',
                'Migrei um sistema legado para Node.js com cron jobs e serviços GCP (Pub/Sub, Cloud Scheduler, Cloud Functions).',
            ],
        },
        'MultTV@2021-09': {
            en: [
                'Led development of MultTV Plus, a white-label Flutter streaming app for iOS, Android and set-top boxes, working directly with the CEO.',
                'Shipped to the App Store and Google Play: 5,000+ Google Play downloads, 70+ live TV channels and 3,000+ on-demand titles.',
                'Applied TDD and automated CI/CD with GitHub Actions for multi-platform releases.',
            ],
            pt: [
                'Liderei o desenvolvimento do MultTV Plus, app de streaming white-label em Flutter para iOS, Android e set-top boxes, trabalhando direto com o CEO.',
                'Publiquei na App Store e no Google Play: mais de 5.000 downloads no Google Play, 70+ canais ao vivo e 3.000+ títulos sob demanda.',
                'Apliquei TDD e automatizei CI/CD com GitHub Actions para releases multiplataforma.',
            ],
        },
        'wepulse@2019-10': {
            en: [
                'Built a responsive health services platform with React, Redux, Styled Components and SASS.',
                'Created reusable UI components and integrated REST APIs with the backend team.',
                'Improved load times with code-splitting and lazy loading.',
            ],
            pt: [
                'Construí uma plataforma responsiva de serviços de saúde com React, Redux, Styled Components e SASS.',
                'Criei componentes de UI reutilizáveis e integrei APIs REST junto ao time de backend.',
                'Melhorei o tempo de carregamento com code-splitting e lazy loading.',
            ],
        },
        'Análise Editorial@2019-03': {
            en: [
                'Built the company website from scratch with React, Redux and CSS Modules, mobile-first.',
                'Created custom animated components (mobile menu, carousel) with React Spring.',
                'Integrated the website with a CRM developed in parallel, via REST APIs.',
            ],
            pt: [
                'Construí o site da empresa do zero com React, Redux e CSS Modules, mobile-first.',
                'Criei componentes animados próprios (menu mobile, carrossel) com React Spring.',
                'Integrei o site a um CRM desenvolvido em paralelo, via APIs REST.',
            ],
        },
    } satisfies Record<string, Localized<string[]>>,
}
