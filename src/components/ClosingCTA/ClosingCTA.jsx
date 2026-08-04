import { Github, Linkedin, Youtube } from "lucide-react";
import { about, closingCta, contact } from "../../portfolio";
import SectionShell from "../brutal/SectionShell";
import BrutalButton from "../brutal/BrutalButton";

const ClosingCTA = () => {
  const { social } = about;

  return (
    <SectionShell id="contact" bgClass="bg-brutal-yellow">
      <div className="text-left">
        <h2 className="text-3xl font-extrabold text-black md:text-4xl">
          {closingCta.headline}
        </h2>
        <p className="mt-4 max-w-lg text-base font-medium text-black/85 md:text-lg">
          {closingCta.subtext}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          {contact.email && (
            <BrutalButton href={`mailto:${contact.email}`} variant="default">
              Continue
            </BrutalButton>
          )}
          {about.resume && (
            <BrutalButton
              href={about.resume}
              target="_blank"
              rel="noopener noreferrer"
              variant="accent"
            >
              Resume
            </BrutalButton>
          )}
        </div>

        {social && (
          <div className="mt-6 flex flex-wrap gap-3">
            {social.github && (
              <a
                href={social.github}
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-black bg-white shadow-[3px_3px_0_#000] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none"
              >
                <Github size={18} />
              </a>
            )}
            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-black bg-white shadow-[3px_3px_0_#000] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none"
              >
                <Linkedin size={18} />
              </a>
            )}
            {social.medium && (
              <a
                href={social.medium}
                aria-label="Medium"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-black bg-white text-sm font-extrabold shadow-[3px_3px_0_#000] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none"
              >
                M
              </a>
            )}
            {social.youtube && (
              <a
                href={social.youtube}
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-black bg-white shadow-[3px_3px_0_#000] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none"
              >
                <Youtube size={18} />
              </a>
            )}
          </div>
        )}
      </div>
    </SectionShell>
  );
};

export default ClosingCTA;
