import uniqid from "uniqid";
import { skills } from "../../portfolio";

const Skills = () => {
  if (!skills.length) return null;

  return (
    <section id="skills" className="py-12 md:py-16">
      <h2 className="mb-6 text-left text-xl font-semibold tracking-tight text-[var(--clr-fg-alt)]">
        Skills
      </h2>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={uniqid()}
            className="rounded-full border border-[var(--clr-border)] bg-[var(--clr-bg-alt)] px-3 py-1 text-xs font-medium text-[var(--clr-muted)]"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
