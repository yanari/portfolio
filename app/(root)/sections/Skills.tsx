import { SiGithub } from '@icons-pack/react-simple-icons'
import Float from '@/fancy/components/blocks/float'
import Link from 'next/link'
import VerticalCutReveal from '@/fancy/components/text/vertical-cut-reveal'
import { MoreHorizontal } from 'lucide-react'
import Image from 'next/image'
import GooeySvgFilter from '@/fancy/components/filter/gooey-svg-filter'

export default function Skills() {
    return (
        <div className="text-gray-50 px-4 md:px-8 py-16 flex flex-col">
            <GooeySvgFilter id="gooey-filter" />
            <h2 className="mb-8 text-3xl font-[var(--font-vt323)] text-primary">
                Stack
            </h2>
            <div className="grid md:grid-cols-[1fr_300px] gap-12 text-slate-800">
                <div className="min-h-72 md:col-start-2 md:row-start-1 md:row-span-3 overflow-hidden brightness-75">
                    <Image
                        priority
                        className="object-center object-cover"
                        style={{ filter: 'url(#gooey-filter)' }}
                        alt="Marcelle"
                        src="/images/watashi.jpeg"
                        fill
                        sizes="(max-width: 768px) 100vw"
                    />
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
                    <p className="flex-1/2 text-white/80 text-sm">
                        Some of my
                        <br />
                        <span className="font-semibold italic">
                            favorite tech
                        </span>
                        ...
                    </p>
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
