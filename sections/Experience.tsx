import Tag from '../components/Tag';

import experienceList from '../data/experience.json';

export default function Experience() {
    return (
        <div  className="text-gray-50 px-8 py-16 flex flex-col">
            <ul>
                {experienceList.map((experience) => {
                    return (
                        <li key={experience.name} className="rounded-md py-4">
                            <h5 className="text-xl inline-block mr-2 text-gray-200">{experience.name}</h5>
                            <span className="text-xs text-gray-400">{experience.date}</span>
                            <p className="text-gray-300 text-xs md:text-sm">{experience.summary}</p>
                            <ul className="flex gap-2 mt-2 flex-wrap">
                                {experience.skills.map((skill) => (
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