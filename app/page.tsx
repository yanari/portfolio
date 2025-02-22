"use client";

import dynamic from "next/dynamic";

import SectionData from "../data/menu.json";
import Navigation from "@/components/Navigation";
import { useVisibleSection } from "@/hooks/useVisibleSection";
import { useTheme } from "@/context/themeProvider";

const Components = {
    about: dynamic(() => import("../sections/About"), {
        loading: () => <p>Loading...</p>,
    }),
    projects: dynamic(() => import("../sections/Projects"), {
        loading: () => <p>Loading...</p>,
    }),
    skills: dynamic(() => import("../sections/Skills"), {
        loading: () => <p>Loading...</p>,
    }),
    experience: dynamic(() => import("../sections/Experience"), {
        loading: () => <p>Loading...</p>,
    }),
    contact: dynamic(() => import("../sections/Contact"), {
        loading: () => <p>Loading...</p>,
    }),
};

export default function Home() {
    const visibleSection = useVisibleSection();
    const { themeConfig } = useTheme();
    return (
        <>
            <Navigation
                menuItems={SectionData}
                visibleSection={visibleSection}
            />
            <main className='bg-slate-800'>
                {SectionData.map((data, index) => {
                    const Component = Components[data.id];
                    // TODO: select theme: vscode themes and backgrounds
                    const color = index % 2 === 0 ? themeConfig?.background : themeConfig?.secondary;

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
