"use client";

import SectionData from "../data/menu.json";
import Navigation from "@/components/Navigation";
import { useVisibleSection } from "@/hooks/useVisibleSection";
import { useThemeStore } from "@/providers/theme-provider";
import Sections from "@/sections";

export default function Home() {
    const visibleSection = useVisibleSection();
    const { config } = useThemeStore(state => state);
    return (
        <>
            <Navigation
                menuItems={SectionData}
                visibleSection={visibleSection}
            />
            <main className='bg-slate-800'>
                {SectionData.map((data, index) => {
                    const Component = Sections[data.id];
                    // TODO: select theme: vscode themes and backgrounds
                    const color = index % 2 === 0 ? config?.background : config?.secondary;

                    return (
                        <section
                            id={data.id}
                            data-section
                            className={`${color} pl-navBarMobile md:pl-80 m-auto text-3xl h-screen`}
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
