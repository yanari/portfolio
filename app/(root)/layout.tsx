import '../globals.css'
import { buildMetadata, RootDocument } from '@/components/site/RootDocument'

export { viewport } from '@/components/site/RootDocument'
export const metadata = buildMetadata('en')

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
    return <RootDocument locale="en">{children}</RootDocument>
}
