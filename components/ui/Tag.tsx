import * as React from 'react'

const Tag: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <span className="border-neutral-700 font-mono text-sm rounded-xl bg-secondary text-background py-1 px-2">
            {children}
        </span>
    )
}

export default Tag
