import type { Localized } from './i18n'

export type ProjectType = 'work' | 'personal'
export type ProjectStatus =
    'live' | 'shipped' | 'delivered' | 'archived' | 'in-progress'

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

export const projects: Project[] = [
    {
        slug: 'rd-mobile-apps',
        type: 'work',
        name: 'RD mobile apps',
        context: {
            en: 'Accenture · for RaiaDrogasil (RD)',
            pt: 'Accenture · para RaiaDrogasil (RD)',
        },
        period: '2022 — 2024',
        status: 'delivered',
        kind: { en: 'Mobile apps · Martech', pt: 'Apps mobile · Martech' },
        summary: {
            en: 'Analytics and CRM integrations for the React Native and Flutter apps of RaiaDrogasil (RD), one of Brazil’s largest pharmacy groups. The apps accounted for 75% of the company’s digital interactions and 17% of its sales.',
            pt: 'Integrações de analytics e CRM nos apps React Native e Flutter da RaiaDrogasil (RD), um dos maiores grupos de farmácias do Brasil. Os apps representavam 75% das interações digitais e 17% das vendas da empresa.',
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
        name: 'AutoMarket',
        context: {
            en: 'Accenture · for a major Mexican bank',
            pt: 'Accenture · para um grande banco mexicano',
        },
        period: '2022 — 2024',
        status: 'delivered',
        kind: {
            en: 'Web platform · Fintech · Automotive',
            pt: 'Plataforma web · Fintech · Automotivo',
        },
        summary: {
            en: 'A digital automotive marketplace that combines a used-car showroom with financing and credit flows, helping customers find a vehicle, simulate financing and move through the purchase journey online.',
            pt: 'Uma plataforma digital de compra e venda de veículos que combina um showroom de seminovos com fluxos de financiamento e crédito, permitindo que clientes encontrem um carro, simulem o financiamento e avancem pela jornada de compra online.',
        },
        problem: {
            en: 'The project brought together a traditionally fragmented car-buying journey — browsing vehicles, evaluating options, simulating financing and moving through the credit process — into a single digital experience.',
            pt: 'O projeto reunia em uma única experiência digital uma jornada de compra de veículos que normalmente é fragmentada entre encontrar o carro, avaliar opções, simular o financiamento e passar pelo processo de crédito.',
        },
        solution: {
            en: 'We built a web experience where customers could browse a vehicle showroom, explore individual listings, simulate financing and go through credit-related flows as part of the same journey.',
            pt: 'Construímos uma experiência web em que clientes podiam navegar pelo showroom de veículos, explorar anúncios individuais, simular financiamentos e passar pelos fluxos relacionados ao crédito dentro da mesma jornada.',
        },
        role: {
            en: 'Built the frontend alongside other developers, translating Figma designs into responsive React interfaces and working closely with the backend team to integrate the product flows and APIs. The project was developed with a Spanish-speaking team and daily communication.',
            pt: 'Desenvolvi o frontend junto com outros desenvolvedores, transformando os designs do Figma em interfaces responsivas com React e trabalhando em conjunto com o time de backend para integrar os fluxos e APIs do produto. O projeto foi desenvolvido com um time de língua espanhola e comunicação diária em espanhol.',
        },
        highlights: {
            en: [
                'Built customer-facing interfaces for vehicle discovery, showroom and financing flows',
                'Worked closely with backend developers to integrate frontend flows and APIs',
                'Translated detailed Figma designs into responsive production interfaces',
            ],
            pt: [
                'Desenvolvimento das interfaces voltadas ao cliente para descoberta de veículos, showroom e fluxos de financiamento',
                'Trabalho próximo ao time de backend na integração dos fluxos e APIs',
                'Transformação de designs detalhados do Figma em interfaces responsivas para produção',
            ],
        },
        stack: ['React', 'Redux', 'Figma'],
    },
    {
        slug: 'multtv-plus',
        type: 'work',
        name: 'MultTV Plus',
        context: { en: 'MultTV', pt: 'MultTV' },
        period: '2021 — 2022',
        status: 'shipped',
        kind: {
            en: 'Streaming app · iOS, Android, set-top box',
            pt: 'App de streaming · iOS, Android, set-top box',
        },
        summary: {
            en: 'A white-label streaming app with 70+ live TV channels and 3,000+ on-demand titles, released on the App Store, Google Play and set-top boxes.',
            pt: 'Um app de streaming white-label com mais de 70 canais ao vivo e mais de 3.000 títulos sob demanda, publicado na App Store, Google Play e em set-top boxes.',
        },
        problem: {
            en: 'The platform needed to support multiple regional ISPs with their own branded streaming experiences while sharing the same underlying product.',
            pt: 'A plataforma precisava atender diferentes provedores regionais com experiências de streaming próprias e personalizadas, compartilhando a mesma base do produto.',
        },
        solution: {
            en: 'We built a white-label streaming app that could be customized for different providers while supporting live TV, on-demand content and multiple device platforms.',
            pt: 'Construímos um app de streaming white-label que podia ser personalizado para diferentes provedores, com suporte a TV ao vivo, conteúdo sob demanda e múltiplas plataformas.',
        },
        role: {
            en: 'Led the development of the app, working directly with the CEO across planning, implementation, TDD, CI/CD and store releases.',
            pt: 'Liderei o desenvolvimento do app, trabalhando diretamente com o CEO em planejamento, implementação, TDD, CI/CD e publicação nas lojas.',
        },
        highlights: {
            en: [
                'Built and shipped a white-label streaming app for regional ISPs',
                '5,000+ downloads on Google Play',
                'Applied TDD throughout development while learning and adopting the practice',
                'Automated CI/CD with GitHub Actions for multi-platform releases',
            ],
            pt: [
                'Desenvolvimento e publicação de um app de streaming white-label para provedores regionais',
                'Mais de 5.000 downloads no Google Play',
                'Aplicação de TDD durante o desenvolvimento, enquanto aprendia e incorporava a prática',
                'CI/CD automatizado com GitHub Actions para releases multiplataforma',
            ],
        },
        stack: ['Flutter', 'Dart', 'TDD', 'GitHub Actions'],
    },
    {
        slug: 'lopti',
        type: 'work',
        name: 'Lopti',
        context: {
            en: 'Lopti · San Francisco',
            pt: 'Lopti · San Francisco',
        },
        period: '2025',
        status: 'delivered',
        kind: {
            en: 'AI product · Legal tech · Web',
            pt: 'Produto com IA · Legal tech · Web',
        },
        summary: {
            en: 'A legal AI platform that helped lawyers analyze and work with legal documents through an AI-powered chat and document workflows.',
            pt: 'Uma plataforma de IA jurídica que ajudava advogados a analisar e trabalhar com documentos jurídicos através de um chat com IA e fluxos de trabalho baseados em documentos.',
        },
        problem: {
            en: 'Legal professionals deal with large volumes of complex documents and need to identify relevant information, inconsistencies and potential issues efficiently.',
            pt: 'Profissionais do direito lidam com grandes volumes de documentos complexos e precisam identificar informações relevantes, inconsistências e possíveis problemas de forma eficiente.',
        },
        solution: {
            en: 'The platform combined document analysis with an AI chat, allowing users to review documents, identify discrepancies and interact with the AI about their contents.',
            pt: 'A plataforma combinava análise de documentos com um chat de IA, permitindo revisar documentos, identificar discrepâncias e interagir com a IA sobre seu conteúdo.',
        },
        role: {
            en: 'Worked primarily on the core frontend of the platform, building interfaces with React and Redux and collaborating closely with the AI team on how documents and AI responses were presented and handled in the product. I also worked with WebSockets for the chat experience and occasionally contributed to the landing page.',
            pt: 'Trabalhei principalmente no frontend core da plataforma, construindo interfaces com React e Redux e colaborando de perto com o time de IA sobre como documentos e respostas da IA eram apresentados e tratados no produto. Também trabalhei com WebSockets na experiência de chat e contribuí pontualmente com a landing page.',
        },
        highlights: {
            en: [
                'Built core platform screens and reusable UI components from scratch',
                'Worked closely with the AI team on the frontend experience around documents and AI conversations',
                'Implemented real-time communication for the AI chat using WebSockets',
                'Worked with React and Redux across a complex, document-driven product',
            ],
            pt: [
                'Desenvolvimento das principais telas da plataforma e de componentes de UI reutilizáveis do zero',
                'Trabalho próximo ao time de IA na experiência frontend envolvendo documentos e conversas com a IA',
                'Implementação da comunicação em tempo real do chat com IA utilizando WebSockets',
                'Desenvolvimento com React e Redux em um produto complexo e orientado a documentos',
            ],
        },
        stack: ['React', 'Redux', 'TypeScript', 'WebSockets', 'UI/UX'],
    },
    {
        slug: 'tim-data-platform',
        type: 'work',
        name: 'Data monetization platform',
        context: {
            en: 'Accenture · for TIM Brasil',
            pt: 'Accenture · para a TIM Brasil',
        },
        period: '2022 — 2024',
        status: 'delivered',
        kind: { en: 'Cloud platform · Data', pt: 'Plataforma cloud · Dados' },
        summary: {
            en: 'A GCP-based data platform that unified behavioral data from 62M+ telecom customers, supporting data monetization and new business opportunities.',
            pt: 'Uma plataforma de dados baseada em GCP que unificava dados comportamentais de mais de 62 milhões de clientes de telecom, apoiando a monetização de dados e novas oportunidades de negócio.',
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
            en: 'A focus timer built around the Pomodoro technique, combining timed work sessions with ambient soundscapes such as pink noise, brown noise and coffee shop sounds.',
            pt: 'Um timer de foco baseado na técnica Pomodoro, combinando sessões cronometradas com sons ambientes como ruído rosa, ruído marrom e som de cafeteria.',
        },
        stack: ['React', 'TypeScript', 'Tailwind CSS', 'Context API'],
        images: [
            {
                src: '/images/neurotimer_desktop.webp',
                alt: {
                    en: 'Neurotimer focus session with ambient sound options',
                    pt: 'Sessão de foco do Neurotimer com opções de som ambiente',
                },
                width: 1600,
                height: 1001,
            },
            {
                src: '/images/neurotimer_mobile.webp',
                alt: {
                    en: 'Neurotimer long break timer',
                    pt: 'Timer de pausa longa do Neurotimer',
                },
                width: 800,
                height: 800,
            },
        ],
        links: {
            live: 'https://neurotimer.vercel.app',
            github: 'https://github.com/yanari/neuro-timer',
        },
    },
    {
        slug: 'elemental-sign',
        type: 'personal',
        name: "What's Your Elemental Sign?",
        status: 'live',
        kind: { en: 'Full-stack web app', pt: 'Web app full stack' },
        summary: {
            en: 'A full-stack web app that calculates the dominant element in a birth chart — fire, earth, air or water — and visualizes the result through an interactive breakdown.',
            pt: 'Uma aplicação web full-stack que calcula o elemento dominante de um mapa astral — fogo, terra, ar ou água — e apresenta o resultado através de uma análise visual interativa.',
        },
        stack: ['Nuxt', 'Vue', 'Python', 'Chart.js'],
        images: [
            {
                src: '/images/whatsyourelementalsign_desktop.webp',
                alt: {
                    en: 'Elemental sign result with element breakdown chart',
                    pt: 'Resultado do signo elemental com gráfico dos elementos',
                },
                width: 1600,
                height: 1001,
            },
            {
                src: '/images/whatsyourelementalsign_mobile.webp',
                alt: {
                    en: 'Elemental sign app on mobile',
                    pt: 'App do signo elemental no mobile',
                },
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
