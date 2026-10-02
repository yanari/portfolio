'use client'

import { useSyncExternalStore } from 'react'
import { sectionIds, type SectionId } from './sections'

/*
 * One shared IntersectionObserver for every consumer (tabs, explorer).
 * A section is active when it crosses a line ~40% down the viewport.
 */
let active: SectionId = sectionIds[0]
const listeners = new Set<() => void>()
let started = false

function set(id: SectionId) {
    if (id === active) return
    active = id
    listeners.forEach((l) => l())
}

function start() {
    if (started || typeof window === 'undefined') return
    started = true

    const observer = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) set(entry.target.id as SectionId)
            }
        },
        { rootMargin: '-40% 0px -59% 0px' }
    )
    sectionIds.forEach((id) => {
        const el = document.getElementById(id)
        if (el) observer.observe(el)
    })

    // The last section may be too short to reach the line.
    window.addEventListener(
        'scroll',
        () => {
            const { scrollY, innerHeight } = window
            if (scrollY + innerHeight >= document.documentElement.scrollHeight - 4) {
                set(sectionIds[sectionIds.length - 1])
            }
        },
        { passive: true }
    )
}

function subscribe(listener: () => void) {
    start()
    listeners.add(listener)
    return () => listeners.delete(listener)
}

export function useActiveSection() {
    return useSyncExternalStore(
        subscribe,
        () => active,
        () => sectionIds[0]
    )
}
