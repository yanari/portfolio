import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface SideMenuItemProps {
    handleClick: () => void
    activeSection?: string
    itemId?: string
    itemLabel: string
    itemIcon: ReactNode
}

export function SideMenuItem({
    handleClick,
    activeSection,
    itemIcon,
    itemId,
    itemLabel,
}: SideMenuItemProps) {
    const isActive = activeSection === itemId
    return (
        <button
            onClick={handleClick}
            className={cn(
                'cursor-pointer uppercase flex items-center w-full py-3 px-4 text-sidebar-foreground hover:text-primary hover:bg-sidebar-accent rounded-none transition-all',
                isActive &&
                    'color-primary translate-x-1 border-l-4 border-primary active '
            )}
        >
            <span className="flex-shrink-0">{itemIcon}</span>
            <span className="ml-3 hidden md:block">{itemLabel}</span>
            {isActive && (
                <div className="h-full w-1 bg-primary absolute right-0" />
            )}
        </button>
    )
}
