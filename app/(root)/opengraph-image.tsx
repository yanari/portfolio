import { ogSize, renderOgImage } from '@/components/site/og-image'

export const alt = 'Marcelle Yanari — Senior Frontend & Mobile Developer'
export const size = ogSize
export const contentType = 'image/png'

export default function Image() {
    return renderOgImage('en')
}
