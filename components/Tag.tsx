import * as React from 'react'

const Tag: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <span className="text-xs rounded-xl bg-secondary text-background py-1 px-2">
            {children}
        </span>
    )
}

export default Tag
