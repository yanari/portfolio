'use client'

import { useThemeStore } from "@/providers/theme-provider"
import React from "react"

export const ThemePicker: React.FC<{
    className: string
}> = ({ className }) => {
    const {
        setTheme,
        name
    } = useThemeStore(state => state);

    console.log("name", name)
    return (
        <div className={`group ${className}`}>
            <button
                // className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white bg-background hover:bg-neutral-200 hover:text-accent-foreground dark:hover:bg-neutral-800 size-10"
                aria-haspopup
                aria-expanded
                className="cursor-pointer focus:outline-none rounded-md p-2 ring text-[#bb9af7] hover:bg-slate-800"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-swatch-book"><path d="M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"/><path d="M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"/><path d="M 7 17h.01"/><path d="m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"/></svg>
            </button>
            <div className="group-hover:block hidden absolute right-0 top-12 rounded-md w-56 ring text-[#bb9af7]">
                <div className="absolute transparent right-0 -top-2 h-2 w-full"/>
                <ul>
                    <li>
                        <button className={`${"cursor-pointer text-left px-4 py-2 w-full hover:bg-slate-500/50"}`} onClick={() => setTheme('atom-one-dark')}>
                            Atom One Dark
                        </button>
                    </li>
                    <li>
                        <button className={`${"cursor-pointer text-left px-4 py-2 w-full hover:bg-slate-500/50"}`} onClick={() => setTheme('tokyo-night-dark')}>
                            Tokyo Night Dark
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}