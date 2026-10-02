import { ImageResponse } from 'next/og'
import type { Locale } from '@/content/i18n'
import { profile } from '@/content/profile'
import oneDark from '@/themes/one-dark'

export const ogSize = { width: 1200, height: 630 }

/** Social preview: the hero's profile.ts in Atom One Dark. */
export function renderOgImage(locale: Locale) {
    const { ui: c, syntax: s } = oneDark
    return new ImageResponse(
        (
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', background: c.editor, color: c.foreground, fontFamily: 'monospace' }}>
                <div style={{ display: 'flex', background: c.tabBar, height: 64, alignItems: 'flex-end' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: c.editor, borderTop: `3px solid ${c.primary}`, padding: '0 28px', height: 60, fontSize: 24 }}>
                        <span style={{ color: s.function, fontWeight: 700, fontSize: 18 }}>TS</span>
                        profile.ts
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', padding: '56px 72px', gap: 18, flex: 1 }}>
                    <div style={{ color: s.comment, fontSize: 28 }}>{'/**'}</div>
                    <div style={{ fontSize: 92, color: c.foreground, fontWeight: 700, letterSpacing: -2 }}>{profile.name}</div>
                    <div style={{ fontSize: 40, color: c.primary }}>{profile.role[locale]}</div>
                    <div style={{ color: s.comment, fontSize: 28 }}>{'*/'}</div>
                    <div style={{ display: 'flex', fontSize: 30, gap: 14, marginTop: 12 }}>
                        <span style={{ color: s.property }}>stack</span>
                        <span>:</span>
                        <span style={{ color: s.string }}>{profile.mainStack.join(' · ')}</span>
                    </div>
                </div>
                <div style={{ display: 'flex', background: c.statusBar, color: c.statusBarForeground, height: 44, alignItems: 'center', padding: '0 24px', fontSize: 20, gap: 24 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 10, color: c.secondary }}>
                        <span style={{ width: 12, height: 12, borderRadius: 6, background: c.secondary }} />
                        {locale === 'en' ? 'Open to work' : 'Disponível'}
                    </span>
                    <span>{profile.location[locale]}</span>
                </div>
            </div>
        ),
        ogSize
    )
}
