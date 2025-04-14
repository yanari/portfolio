'use client'

import React, { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { Home, User, Briefcase, Library, Mail } from 'lucide-react'

type MenuItem = {
    id: string
    label: string
    icon: React.ReactNode
}

const menuItems: MenuItem[] = [
    { id: 'about', label: 'About', icon: <User size={18} /> },
    { id: 'projects', label: 'Projects', icon: <Library size={18} /> },
    { id: 'skills', label: 'Skills', icon: <Briefcase size={18} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={18} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={18} /> },
]

export function SideMenu() {
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section[id]')

            const scrollPosition = window.scrollY + 200 // Offset for better calculation

            sections.forEach((section) => {
                const sectionTop = (section as HTMLElement).offsetTop
                const sectionHeight = section.clientHeight
                const sectionId = section.getAttribute('id') || ''

                if (
                    scrollPosition >= sectionTop &&
                    scrollPosition < sectionTop + sectionHeight
                ) {
                    setActiveSection(sectionId)
                }
            })
        }

        window.addEventListener('scroll', handleScroll)

        // Initial check when component mounts
        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className="fixed left-0 top-0 h-full w-16 md:w-64 bg-transparent border-r-4 border-border shadow-md flex flex-col py-8 z-10 font-mono">
            <nav className="mt-6 flex-1">
                <ul className="space-y-2">
                    {menuItems.map((item) => (
                        <li key={item.id}>
                            <button
                                onClick={() => scrollToSection(item.id)}
                                className={cn(
                                    'uppercase flex items-center w-full py-3 px-4 text-sidebar-foreground hover:text-primary hover:bg-sidebar-accent rounded-none transition-all',
                                    activeSection === item.id &&
                                        'color-primary translate-x-1 border-l-4 border-primary active '
                                )}
                            >
                                <span className="flex-shrink-0">
                                    {item.icon}
                                </span>
                                <span className="ml-3 hidden md:block">
                                    {item.label}
                                </span>
                                {activeSection === item.id && (
                                    <div className="h-full w-1 bg-primary absolute right-0" />
                                )}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default SideMenu
