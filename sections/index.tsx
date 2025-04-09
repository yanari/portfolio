import dynamic from 'next/dynamic'

const Sections = {
    about: dynamic(() => import('./About'), {
        loading: () => <p>Loading...</p>,
    }),
    projects: dynamic(() => import('./Projects'), {
        loading: () => <p>Loading...</p>,
    }),
    skills: dynamic(() => import('./Skills'), {
        loading: () => <p>Loading...</p>,
    }),
    experience: dynamic(() => import('./Experience'), {
        loading: () => <p>Loading...</p>,
    }),
    contact: dynamic(() => import('./Contact'), {
        loading: () => <p>Loading...</p>,
    }),
}

export default Sections
