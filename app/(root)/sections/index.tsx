import { Loading } from '@/components/layout/Loading'
import dynamic from 'next/dynamic'

const Sections = {
    about: dynamic(() => import('./About'), {
        loading: () => <Loading />,
    }),
    projects: dynamic(() => import('./Projects'), {
        loading: () => <Loading />,
    }),
    skills: dynamic(() => import('./Skills'), {
        loading: () => <Loading />,
    }),
    experience: dynamic(() => import('./Experience'), {
        loading: () => <Loading />,
    }),
    contact: dynamic(() => import('./Contact'), {
        loading: () => <Loading />,
    }),
}

export default Sections
