import Image from 'next/image'
import { about } from '@/content/about'
import type { Locale } from '@/content/i18n'
import photo from '@/public/images/watashi.webp'

export function About({ locale }: { locale: Locale }) {
    return (
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_15rem] lg:gap-14">
            <div className="max-w-[68ch] font-prose text-base leading-relaxed text-fg sm:text-lg">
                {about.intro[locale].map((paragraph) => (
                    <p key={paragraph.slice(0, 24)} className="mb-5">
                        {paragraph}
                    </p>
                ))}

                <h3 className="mb-4 mt-10 font-mono text-lg font-bold text-fg">
                    <span aria-hidden="true" className="text-subtle">
                        ##{' '}
                    </span>
                    {about.howIWorkTitle[locale]}
                </h3>
                <ul className="space-y-3">
                    {about.howIWork[locale].map((item) => (
                        <li key={item} className="flex gap-3">
                            <span aria-hidden="true" className="font-mono text-primary">
                                -
                            </span>
                            {item}
                        </li>
                    ))}
                </ul>

                <p className="mt-8 text-muted">{about.offTheClock[locale]}</p>
            </div>

            <figure className="max-w-60 self-start border bg-sidebar md:order-none">
                <figcaption className="flex items-center justify-between border-b px-3 py-1.5 font-mono text-xs text-muted">
                    <span>watashi.webp</span>
                    <span aria-hidden="true">
                        {photo.width} × {photo.height}
                    </span>
                </figcaption>
                <Image
                    src={photo}
                    alt={about.photoAlt[locale]}
                    sizes="240px"
                    placeholder="blur"
                    className="aspect-[4/5] w-full object-cover object-[30%_20%]"
                />
            </figure>
        </div>
    )
}
