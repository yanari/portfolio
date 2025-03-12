"use client";

import { themes, useThemeStore } from "@/providers/theme-provider";
import React from "react";

export const ThemePicker: React.FC<{
    className: string;
}> = ({ className }) => {
    const { setTheme } = useThemeStore((state) => state);

    return (
        <div className={` ${className}`}>
            <div className='relative'>
                <button
                    aria-haspopup='menu'
                    aria-expanded
                    className='block group cursor-pointer focus:outline-none rounded-md p-2 ring text-secondary hover:bg-slate-800'
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='lucide lucide-swatch-book'
                    >
                        <path d='M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z' />
                        <path d='M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7' />
                        <path d='M 7 17h.01' />
                        <path d='m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8' />
                    </svg>

                    <div
                        className={`hidden group-focus:block group-active:block group-hover:block absolute right-0 top-12 rounded-md w-56 ring text-secondary bg-theme`}
                    >
                        <div className='absolute transparent right-0 -top-2 h-2 w-full' />
                        <ul>
                            {themes.map((theme) => (
                                <li key={theme.id}>
                                    <a
                                        className={`${"block cursor-pointer text-left px-4 py-2 w-full hover:bg-slate-500/50 active::bg-slate-500/50 focus::bg-slate-500/50"}`}
                                        onClick={() => setTheme(theme.id)}
                                    >
                                        {theme.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </button>
            </div>
        </div>
    );
};
