import { SiGithub } from '@icons-pack/react-simple-icons'
import Float from '@/fancy/components/blocks/float'
import Link from 'next/link'
import VerticalCutReveal from '@/fancy/components/text/vertical-cut-reveal'
import { MoreHorizontal } from 'lucide-react'

export default function Skills() {
    return (
        <div className="text-gray-50 px-8 py-16 flex flex-col">
            <h2 className="mb-8 text-3xl font-[var(--font-vt323)] text-primary">
                Stack
            </h2>
            <div className="grid md:grid-cols-2 gap-12 text-slate-800">
                <div className="md:col-start-2 md:row-span-4 bg-white">
                    {/* Foto Minha */}
                </div>
                <div className="bg-primary p-8 rounded-4xl">
                    <h4 className="text-2xl mb-4">Frontend</h4>
                    <p className="text-base font-mono">
                        <VerticalCutReveal
                            splitBy="characters"
                            staggerDuration={0.025}
                            staggerFrom="center"
                            transition={{
                                type: 'spring',
                                stiffness: 200,
                                damping: 21,
                            }}
                        >
                            React / Typescript / NextJs / NuxtJs / Vue / React
                            Native / Flutter
                        </VerticalCutReveal>
                    </p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="bg-secondary p-8 rounded-4xl w-3/4">
                        <h4 className="text-2xl mb-4">Styles</h4>
                        <p className="text-base font-mono">
                            <VerticalCutReveal
                                splitBy="characters"
                                staggerDuration={0.025}
                                staggerFrom="first"
                                transition={{
                                    type: 'spring',
                                    stiffness: 200,
                                    damping: 21,
                                    delay: 0.5,
                                }}
                            >
                                SCSS / SASS / Tailwind CSS / Styled Components /
                                Bulma / Nuxt UI
                            </VerticalCutReveal>
                        </p>
                    </div>
                    <Float>
                        <Link href="https://www.github.com/yanari">
                            <SiGithub size={48} className="text-white" />
                        </Link>
                    </Float>
                </div>
                <div className="flex items-center justify-between">
                    <Link
                        className="rounded-full"
                        href="/projects"
                        aria-label="More projects"
                    >
                        <MoreHorizontal size={48} className="text-primary" />
                    </Link>
                    <div className="bg-primary p-8 rounded-4xl w-3/4">
                        <p className="text-base font-mono">
                            <VerticalCutReveal
                                splitBy="characters"
                                staggerDuration={0.025}
                                staggerFrom="first"
                                transition={{
                                    type: 'spring',
                                    stiffness: 200,
                                    damping: 21,
                                    delay: 1.1,
                                }}
                            >
                                GCP / NPM / Git / Bash
                            </VerticalCutReveal>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
