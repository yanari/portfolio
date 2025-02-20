import Tag from "./Tag";
import { IExperience } from "@/shared/interfaces/experience.interface";

export default function JobExperience({ experience }: { experience: IExperience}) {
    return (
        <li key={experience.name} className="rounded-md py-4">
            <h5 className="text-2xl md:text-xl md:inline-block mr-2 text-gray-200 block">
                {experience.name}
            </h5>
            <span className="text-xs text-gray-400">{experience.date}</span>
            <p className="text-gray-300 text-xs md:text-sm hidden md:block">
                {experience.summary}
            </p>
            <ul className="flex gap-2 mt-4 md:mt-2 flex-wrap">
                {experience.skills.map((skill: string) => (
                    <li key={skill} className="inline-flex">
                        <Tag>{skill}</Tag>
                    </li>
                ))}
            </ul>
        </li>
    );
}
