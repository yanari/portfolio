import { ogSize, renderOgImage } from '@/components/site/og-image'

export const alt = 'Marcelle Yanari — Desenvolvedora Frontend & Mobile Sênior'
export const size = ogSize
export const contentType = 'image/png'

export default function Image() {
    return renderOgImage('pt')
}
