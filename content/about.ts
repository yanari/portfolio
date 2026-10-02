import type { Localized } from './i18n'

/*
 * TODO(marcelle): this draft only uses facts from the resume and the old
 * README. Rewrite in your own voice — especially `intro` and `offTheClock`.
 */
export const about = {
    intro: {
        en: [
            'I started in 2019 building a company website from scratch with React, and I have been building products ever since: a health services platform, a streaming app shipped to iOS, Android and set-top boxes, mobile apps for one of the largest pharmacy groups in Brazil, a financing platform for a Mexican bank and, most recently, the frontend of an AI product.',
            'Most of my work sits between design and engineering — making interfaces feel simple while keeping the architecture underneath them maintainable. Today I am a full-stack engineer back at Análise Editorial, where I started, going deeper into backend and data, and studying Artificial Intelligence at FAM.',
        ],
        pt: [
            'Comecei em 2019 construindo do zero o site de uma empresa com React, e desde então construo produtos: uma plataforma de serviços de saúde, um app de streaming publicado para iOS, Android e set-top boxes, apps mobile para um dos maiores grupos de farmácias do Brasil, uma plataforma de financiamento para um banco mexicano e, mais recentemente, o frontend de um produto com IA.',
            'A maior parte do meu trabalho fica entre design e engenharia — fazer interfaces parecerem simples mantendo sustentável a arquitetura por baixo delas. Hoje sou full-stack engineer de volta à Análise Editorial, onde comecei, me aprofundando em backend e dados, e estudo Inteligência Artificial na FAM.',
        ],
    } satisfies Localized<string[]>,
    howIWorkTitle: { en: 'How I work', pt: 'Como eu trabalho' } satisfies Localized,
    howIWork: {
        en: [
            'I own features from requirements to release, together with product, design, backend and AI teams.',
            'I build reusable components and UI patterns so the next feature is faster than the last.',
            'I act as a technical reference: architecture decisions, code reviews, unblocking people.',
            'I use AI-assisted workflows daily — and still understand every line that ships.',
        ],
        pt: [
            'Assumo features do requisito ao release, junto com produto, design, backend e times de IA.',
            'Construo componentes reutilizáveis e padrões de UI para que a próxima feature saia mais rápido que a anterior.',
            'Atuo como referência técnica: decisões de arquitetura, code review, destravar o time.',
            'Uso fluxos de desenvolvimento com IA no dia a dia — e continuo entendendo cada linha que vai para produção.',
        ],
    } satisfies Localized<string[]>,
    offTheClock: {
        en: 'Off the clock: cats, and more editor themes than anyone needs.',
        pt: 'Fora do trabalho: gatos, e mais temas de editor do que alguém precisa.',
    } satisfies Localized,
    photoAlt: {
        en: 'Marcelle working on a laptop at a café table in São Paulo',
        pt: 'Marcelle trabalhando no notebook em uma mesa de café em São Paulo',
    } satisfies Localized,
}
