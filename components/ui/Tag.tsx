import { ReactNode } from 'react'

interface TagProps {
    children: ReactNode
}

export function Tag({ children }: TagProps) {
    return (
        <span className="border-neutral-700 font-mono text-sm rounded-xl bg-secondary text-background py-1 px-2">
            {children}
        </span>
    )
}

export default Tag
