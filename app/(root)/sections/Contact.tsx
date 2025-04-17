'use client'

import { ContactForm } from '@/components/contact/ContactForm'
import Float from '@/fancy/components/blocks/float'
import ScrambleIn from '@/fancy/components/text/scramble-in'

import { SiGithub } from '@icons-pack/react-simple-icons'
import { Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
    return (
        <div className="text-gray-50 px-4 md:px-8 py-16 flex flex-col">
            <h2 className="mb-8 text-3xl font-[var(--font-vt323)] text-primary">
                Let's Talk!
            </h2>
            <div className="grid md:grid-cols-[2fr_1fr] gap-8 text-gray-50">
                <ContactForm />

                <div className="md:block flex flex-col items-center">
                    <h4 className="text-primary">
                        <ScrambleIn text="Or find me on:" />
                    </h4>
                    <div className="flex gap-8 mt-8">
                        <Float>
                            <Link href="https://www.github.com/yanari">
                                <SiGithub size={48} />
                            </Link>
                        </Float>
                        <Float>
                            <Link href="https://www.linkedin.com/in/yanari">
                                <Linkedin size={48} />
                            </Link>
                        </Float>
                    </div>
                </div>
            </div>
        </div>
    )
}
