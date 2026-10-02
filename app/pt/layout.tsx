import '../globals.css'
import { buildMetadata, RootDocument } from '@/components/site/RootDocument'

export { viewport } from '@/components/site/RootDocument'
export const metadata = buildMetadata('pt')

export default function PortugueseLayout({ children }: { children: React.ReactNode }) {
    return <RootDocument locale="pt">{children}</RootDocument>
}
