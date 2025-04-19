import Image from 'next/image'
import { cn } from '@/lib/utils'
import GooeySvgFilter from '@/fancy/components/filter/gooey-svg-filter'
import { IProject } from '@/shared/interfaces/project.interface'

interface ProjectImagesProps {
    project: IProject
    isOdd: boolean
}

export function ProjectImages({ project, isOdd }: ProjectImagesProps) {
    const imageGap = isOdd ? 'last-section-goo' : 'first-section-goo'
    const mobilePlacement = isOdd ? 'bottom-0 right-0' : 'left-0 top-0'
    return (
        <>
            <GooeySvgFilter id="gooey-filter" />
            <div
                style={{ filter: 'url(#gooey-filter)' }}
                className="max-w-[460px] mb-3 md:mb-0 relative"
            >
                <div className="flex items-start w-full h-full col-start-1 row-start-1">
                    {project.desktopImageUrls.map((image, index) => {
                        const className =
                            index === 0
                                ? 'hover:opacity-100'
                                : 'absolute hover:opacity-0'
                        return (
                            <Image
                                style={{
                                    filter: 'url(#gooey-filter)',
                                }}
                                className={cn(
                                    'object-cover object-left md:object-center ease-in-out duration-500',
                                    className,
                                    imageGap
                                )}
                                key={image}
                                alt={project.title}
                                src={image}
                                height={368}
                                width={588}
                            />
                        )
                    })}
                </div>
                <Image
                    alt={project.title}
                    src={project.mobileImageUrl}
                    className={cn(
                        'row-start-1 col-start-1 absolute max-w-16 md:max-w-fit',
                        mobilePlacement
                    )}
                    height={120}
                    width={120}
                />
            </div>
        </>
    )
}
