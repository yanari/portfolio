'use client'

import { IMenuItem } from '@/shared/interfaces/menuItem.interface';
import * as React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navigation: React.FC<{
    menuItems: Array<IMenuItem>,
    visibleSection: string | null
}> = ({
    menuItems,
    visibleSection,
}) => {
    return (
        <nav className="z-10 md:block hidden fixed w-navBarMobile md:w-60 h-screen md:py-40 pr-8">
            <ul className="font-mono text-theme md:text-2xl flex flex-col md:items-end justify-evenly h-full md:border-r md:border-r-gray-100 md:pr-4">
                {menuItems.map(({ id, title }: IMenuItem) => (
                    <li key={id}>
                        <AnchorLink
                            href={`#${id}`}
                            className={`${visibleSection === id ? 'text-primary' : 'text-theme'} transition-all md:[writing-mode:horizontal-tb] [writing-mode:sideways-lr]`}
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