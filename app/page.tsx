"use client";

import Navigation from "@/components/Navigation";

import SectionData from "../data/menu.json";
import dynamic from "next/dynamic";
import { useVisibleSection } from "@/hooks";

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
  return (
    <>
      <Navigation menuItems={SectionData} visibleSection={visibleSection} />
      <main className="bg-gray-900">
        {SectionData.map((data, index) => {
          const Component = Components[data.id];
          const color = index % 2 === 0 ? "bg-gray-800" : "";

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
