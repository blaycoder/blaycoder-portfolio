import { experience } from "../../portfolio";
import SectionShell from "../brutal/SectionShell";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  if (!experience?.length) return null;

  return (
    <SectionShell id="experience" bgClass="bg-brutal-green">
      <h2 className="mb-8 text-left text-3xl font-extrabold text-black md:mb-12 md:text-4xl">
        Experience
      </h2>
      <div>
        {experience.map((job, index) => (
          <ExperienceItem
            key={`${job.company}-${job.period}`}
            job={job}
            questNumber={index + 1}
          />
        ))}
      </div>
    </SectionShell>
  );
};

export default Experience;
