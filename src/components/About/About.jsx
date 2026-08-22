import { aboutSection } from "../../portfolio";
import SectionShell from "../brutal/SectionShell";

const About = () => {
  if (!aboutSection?.paragraphs?.length) return null;

  return (
    <SectionShell id="about" bgClass="bg-brutal-purple">
      <h2 className="mb-6 text-left text-3xl font-extrabold text-black md:mb-8 md:text-4xl">
        {aboutSection.heading || "About"}
      </h2>
      <div className="max-w-2xl space-y-4 text-left">
        {aboutSection.paragraphs.map((paragraph) => (
          <p
            key={paragraph.slice(0, 24)}
            className="text-sm leading-relaxed text-black/90 sm:text-base md:text-lg"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </SectionShell>
  );
};

export default About;
