import type { Localized } from './i18n'

export const about = {
    intro: {
        en: [
            "I started coding professionally in 2019, building a company website from scratch with React. Since then, I've worked on everything from health and streaming products to mobile apps for one of Brazil's largest pharmacy groups, a vehicle financing platform for a Mexican bank, data platforms at scale, and most recently, the frontend of an AI product.",
            "I tend to gravitate toward the space between design and engineering: turning complex things into interfaces that feel simple, while keeping the codebase healthy enough to evolve. These days, I'm working across the stack at Análise Editorial, where I started my career, while going deeper into backend, data and AI.",
        ],
        pt: [
            'Comecei a trabalhar profissionalmente com desenvolvimento em 2019, construindo do zero o site de uma empresa com React. Desde então, trabalhei em produtos que vão de saúde e streaming a apps mobile para um dos maiores grupos de farmácias do Brasil, uma plataforma de financiamento de veículos para um banco mexicano, plataformas de dados em escala e, mais recentemente, o frontend de um produto com IA.',
            'Gosto especialmente de trabalhar no espaço entre design e engenharia: transformar coisas complexas em interfaces que parecem simples, sem deixar de lado uma arquitetura saudável o suficiente para evoluir. Hoje trabalho de forma full-stack na Análise Editorial, onde comecei minha carreira, enquanto me aprofundo em backend, dados e IA.',
        ],
    } satisfies Localized<string[]>,
    howIWorkTitle: {
        en: 'How I work',
        pt: 'Como eu trabalho',
    } satisfies Localized,
    howIWork: {
        en: [
            'I like to understand the problem before jumping into the implementation, especially when a feature sits between product, design and engineering.',
            "I care about the details users notice and the architecture they don't: good interactions, reusable components and code that remains understandable months later.",
            'I take ownership of features from idea to release, working closely with product, design, backend and AI teams.',
            "I enjoy being the person who helps connect the dots: making technical decisions, reviewing code, unblocking the team and figuring things out when there isn't an obvious answer.",
        ],
        pt: [
            'Gosto de entender o problema antes de partir para a implementação, especialmente quando uma feature fica entre produto, design e engenharia.',
            'Me importo tanto com os detalhes que o usuário percebe quanto com a arquitetura que ele nunca vai ver: boas interações, componentes reutilizáveis e código que continua compreensível meses depois.',
            'Gosto de assumir ownership das features do início ao release, trabalhando de perto com produto, design, backend e IA.',
            'Gosto de ser a pessoa que conecta os pontos: tomar decisões técnicas, revisar código, destravar o time e descobrir caminhos quando não existe uma resposta óbvia.',
        ],
    } satisfies Localized<string[]>,
    offTheClock: {
        en: 'Off the clock: cats, games, drawing, and an unreasonable number of editor themes.',
        pt: 'Fora do trabalho: gatos, jogos, desenho e uma quantidade injustificável de temas de editor.',
    } satisfies Localized,
    photoAlt: {
        en: 'Marcelle working on a laptop at a café table in São Paulo',
        pt: 'Marcelle trabalhando no notebook em uma mesa de café em São Paulo',
    } satisfies Localized,
}
