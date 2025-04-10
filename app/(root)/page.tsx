import Sections from './sections'
import { ISections } from '@/shared/section.interface'

const sectionData = ['about', 'projects', 'skills', 'experience', 'contact']

const sections: ISections = Sections

export default function Home() {
    return (
        <div className="w-full container p-4 mx-auto">
            <main className="flex flex-col items-center justify-center text-gray-100">
                {sectionData.map((data, index) => {
                    const Component = sections[data]

                    const grayscale = index % 2 === 0 ? '' : 'grayscale-45'
                    return (
                        <section
                            id={data}
                            data-section
                            className={`bg-theme m-auto text-3xl h-screen ${grayscale}`}
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
