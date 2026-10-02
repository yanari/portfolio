import { ui } from '@/content/i18n'
import type { FileKind } from '@/components/ui/FileIcon'

export const sections = [
    { id: 'profile', file: 'profile.ts', kind: 'ts', title: ui.sectionProfile },
    { id: 'about', file: 'README.md', kind: 'md', title: ui.sectionAbout },
    { id: 'projects', file: 'projects', kind: 'folder', title: ui.sectionProjects },
    { id: 'experience', file: 'experience.log', kind: 'log', title: ui.sectionExperience },
    { id: 'stack', file: 'stack.json', kind: 'json', title: ui.sectionStack },
    { id: 'contact', file: 'contact.sh', kind: 'sh', title: ui.sectionContact },
] as const satisfies readonly { id: string; file: string; kind: FileKind; title: unknown }[]

export type SectionId = (typeof sections)[number]['id']
export const sectionIds = sections.map((s) => s.id)
