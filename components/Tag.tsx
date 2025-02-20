import * as React from 'react';

const Tag: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <span className="text-xs rounded-xl bg-primary text-slate-700 py-1 px-2">
            { children }
        </span>
    )
}

export default Tag;