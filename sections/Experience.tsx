import experienceList from '../data/experience.json';
import JobExperience from '@/components/JobExperience';

export default function Experience() {
    
    return (
        <div  className="text-gray-50 px-8 md:py-16 flex flex-col">
            <ul>
                {experienceList.map((experience) => {
                    return <JobExperience key={experience.name} experience={experience} />
                })}
            </ul>
        </div>
    )
}