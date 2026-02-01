import uniqid from "uniqid";
import { experience } from "../../portfolio";
import { Reveal } from "../utils/Reveal";
import "./Experience.css";

const Experience = () => {
  if (!experience?.length) return null;

  return (
    <section id="experience" className="section experience">
      <h2 className="section__title">Experience</h2>
      <div className="experience__list">
        {experience.map((job) => (
          <Reveal key={uniqid()} width="100%">
            <article className="experience__card">
              <header className="experience__header">
                <h3 className="experience__role">{job.role}</h3>
                <p className="experience__meta">
                  <span className="experience__company">{job.company}</span>
                  <span className="experience__location">{job.location}</span>
                </p>
                <p className="experience__period">{job.period}</p>
              </header>
              {job.highlights?.length > 0 && (
                <ul className="experience__highlights">
                  {job.highlights.map((item) => (
                    <li key={uniqid()} className="experience__highlight">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {job.tech?.length > 0 && (
                <div className="experience__tech">
                  {job.tech.map((t) => (
                    <span key={uniqid()} className="experience__tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Experience;
