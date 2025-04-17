import Tag from '@/components/ui/Tag'
import experienceList from '@/data/experience.json'

export default function Experience() {
    return (
        <div className="text-gray-50 px-4 md:px-8 md:py-16 flex flex-col">
            <h2 className="mb-8 text-3xl font-[var(--font-vt323)] text-primary">
                Experience
            </h2>
            <ul>
                {experienceList.map((experience) => {
                    return (
                        <li
                            key={experience.name}
                            className="first:pt-0 rounded-md py-4"
                        >
                            <h5 className="text-2xl md:text-xl md:inline-block mr-2 text-primary block">
                                {experience.name}
                            </h5>
                            <span className="text-xs text-gray-400">
                                {experience.date}
                            </span>
                            {/* <p className="text-gray-300 text-xs md:text-sm hidden md:block">
                                {experience.summary}
                            </p> */}
                            <div className="text-gray-300 text-xs md:text-sm">
                                <span className="font-semibold text-sm mr-2">
                                    Role:
                                </span>
                                <span>{experience.role}</span>
                            </div>
                            <ul className="flex gap-2 mt-4 md:mt-2 flex-wrap">
                                {experience.skills.map((skill: string) => (
                                    <li key={skill} className="inline-flex">
                                        <Tag>{skill}</Tag>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
