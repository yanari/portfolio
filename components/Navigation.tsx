'use client'

import * as React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

type MenuItem = { id: string; title: string };

const Navigation: React.FC<{ menuItems: Array<MenuItem>, visibleSection: string | null }> = ({ menuItems, visibleSection }) => {
    console.log('visiblesection', visibleSection);
    return (
        <nav className="fixed w-navBarMobile md:w-80 h-screen md:py-40 px-8 bg-primary md:bg-transparent">
            {/* <ul className="font-mono text-2xl flex flex-col items-end justify-evenly h-full backdrop-opacity-95 bg-white/30 rounded-md"> */}
            <ul className="font-mono text-base md:text-2xl flex flex-col md:items-end justify-evenly h-full md:border-r md:border-r-gray-100 md:pr-4">
                {menuItems.map(({ id, title }: MenuItem) => (
                    <li key={id}>
                        <AnchorLink
                            // className={`${visibleSection === id ? 'bg-white md:bg-transparent text-primary' : 'text-white'} transition-all -rotate-90 md:rotate-0 block`}
                            href={`#${id}`}
                            className={`${visibleSection === id ? 'bg-white md:bg-transparent text-primary' : 'text-white'} transition-all md:[writing-mode:horizontal-tb] [writing-mode:sideways-lr]`}
                            // className="md:[writing-mode:horizontal-tb] [writing-mode:sideways-lr]"
                        >
                            {title}
                        </AnchorLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation;