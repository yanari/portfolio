import { Skeleton } from '../ui/skeleton'

export function Loading() {
    return (
        <div className="space-y-2">
            <Skeleton className="h-11 w-[200px]" />
            <Skeleton className="h-11 w-[250px]" />
        </div>
    )
}
