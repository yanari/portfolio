export const locales = ['en', 'pt'] as const
export type Locale = (typeof locales)[number]

export type Localized<T = string> = Record<Locale, T>

export const localeMeta: Record<Locale, { htmlLang: string; label: string; path: string; ogLocale: string }> = {
    en: { htmlLang: 'en', label: 'EN', path: '/', ogLocale: 'en_US' },
    pt: { htmlLang: 'pt-BR', label: 'PT-BR', path: '/pt', ogLocale: 'pt_BR' },
}

export const ui = {
    skipToContent: { en: 'Skip to content', pt: 'Pular para o conteúdo' },
    explorer: { en: 'Explorer', pt: 'Explorador' },
    primaryNav: { en: 'Sections', pt: 'Seções' },
    links: { en: 'Links', pt: 'Links' },
    // Section titles (the human-readable label next to each file name)
    sectionProfile: { en: 'Profile', pt: 'Perfil' },
    sectionAbout: { en: 'About', pt: 'Sobre' },
    sectionProjects: { en: 'Projects', pt: 'Projetos' },
    sectionExperience: { en: 'Experience', pt: 'Experiência' },
    sectionStack: { en: 'Stack', pt: 'Stack' },
    sectionContact: { en: 'Contact', pt: 'Contato' },
    // Hero actions
    viewProjects: { en: 'view projects', pt: 'ver projetos' },
    getInTouch: { en: 'get in touch', pt: 'entrar em contato' },
    downloadResume: { en: 'resume.pdf', pt: 'currículo.pdf' },
    // Projects
    projectsIntro: {
        en: 'Products I built or led the frontend for — client work first, then side projects.',
        pt: 'Produtos que construí ou cujo frontend liderei — primeiro trabalhos profissionais, depois projetos pessoais.',
    },
    problem: { en: 'Problem', pt: 'Problema' },
    solution: { en: 'Solution', pt: 'Solução' },
    myRole: { en: 'My role', pt: 'Meu papel' },
    highlights: { en: 'Highlights', pt: 'Destaques' },
    stack: { en: 'Stack', pt: 'Stack' },
    liveDemo: { en: 'Live demo', pt: 'Ver online' },
    sourceCode: { en: 'Source code', pt: 'Código-fonte' },
    // Experience
    present: { en: 'present', pt: 'atual' },
    education: { en: 'Education', pt: 'Formação' },
    fullHistory: {
        en: 'Full history and details in my resume',
        pt: 'Histórico completo e detalhes no meu currículo',
    },
    // Contact
    contactIntro: {
        en: "Hiring for a senior frontend or mobile role, or building something that needs both? Send me a message — I'll reply by email.",
        pt: 'Contratando para uma vaga sênior de frontend ou mobile, ou construindo algo que precise dos dois? Me mande uma mensagem — respondo por email.',
    },
    formName: { en: 'Name', pt: 'Nome' },
    formEmail: { en: 'Email', pt: 'Email' },
    formMessage: { en: 'Message', pt: 'Mensagem' },
    formSend: { en: 'Send message', pt: 'Enviar mensagem' },
    formSending: { en: 'Sending…', pt: 'Enviando…' },
    formSuccess: {
        en: "Message sent. Thanks — I'll get back to you soon.",
        pt: 'Mensagem enviada. Obrigada — respondo em breve.',
    },
    formError: {
        en: 'Something went wrong. Please email me directly instead.',
        pt: 'Algo deu errado. Por favor, me mande um email diretamente.',
    },
    // Status bar
    openToWork: { en: 'Open to work', pt: 'Disponível' },
    theme: { en: 'Color theme', pt: 'Tema de cores' },
    language: { en: 'Language', pt: 'Idioma' },
    switchLanguage: { en: 'Leia em português', pt: 'Read in English' },
    builtWith: {
        en: 'Built with Next.js, TypeScript and Tailwind CSS.',
        pt: 'Feito com Next.js, TypeScript e Tailwind CSS.',
    },
    opensInNewTab: { en: '(opens in a new tab)', pt: '(abre em nova aba)' },
} satisfies Record<string, Localized>
