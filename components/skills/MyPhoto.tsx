import Image from 'next/image'

export function MyPhoto() {
    return (
        <Image
            priority
            className="object-center object-cover h-72 w-72 md:h-full md:w-full"
            style={{ filter: 'url(#gooey-filter)' }}
            alt="Marcelle Yanari Photo"
            src="/images/watashi.jpeg"
            width={300}
            height={500}
        />
    )
}
