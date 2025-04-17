import Sections from './sections'
import { ISections } from '@/shared/section.interface'

const sectionData = ['about', 'projects', 'skills', 'experience', 'contact']

const sections: ISections = Sections

export default function Home() {
    return (
        <div className="w-full container mx-auto">
            <main className="flex flex-col items-center justify-center text-gray-100">
                {sectionData.map((data, index) => {
                    const Component = sections[data]

                    return (
                        <section
                            id={data}
                            data-section
                            className="container md:px-20 px-4 py-8 bg-theme/40 m-auto text-3xl min-h-fit md:min-h-[760px] h-screen"
                            key={data}
                        >
                            <Component />
                        </section>
                    )
                })}
            </main>
        </div>
    )
}
