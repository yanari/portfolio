import '@/app/globals.css'
import Link from 'next/link'
import { RootDocument } from '@/components/site/RootDocument'

export default function NotFound() {
    return (
        <RootDocument locale="en">
            <main className="flex min-h-svh flex-col justify-center gap-4 px-6 sm:px-16">
                <p className="text-sm text-muted">
                    <span className="text-syn-property">Error:</span> ENOENT: no such file or directory
                </p>
                <h1 className="glow font-display text-6xl text-primary">404</h1>
                <p className="font-prose text-lg text-fg">This page doesn&apos;t exist.</p>
                <Link href="/" className="text-primary underline underline-offset-4">
                    ← open profile.ts
                </Link>
            </main>
        </RootDocument>
    )
}
