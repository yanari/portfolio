"use client";

import SectionData from "../data/menu.json";
import Navigation from "@/components/Navigation";
import { useVisibleSection } from "@/hooks/useVisibleSection";
import Sections from "@/sections";
import { ISections } from "@/shared/interfaces/section.interface";

const sections: ISections = Sections;

export default function Home() {
    const visibleSection = useVisibleSection();
    return (
        <>
            <Navigation
                menuItems={SectionData}
                visibleSection={visibleSection}
            />
            <main className='bg-slate-800'>
                {SectionData.map((data, index) => {
                    const Component = sections[data.id];

                    const grayscale = index % 2 === 0 ? '' : 'grayscale-45';
                    return (
                        <section
                            id={data.id}
                            data-section
                            className={`bg-theme md:pl-60 m-auto text-3xl h-screen ${grayscale}`}
                            key={data.id}
                        >
                            <Component />
                        </section>
                    );
                })}
            </main>
        </>
    );
}
