import { about } from "../../portfolio";
import SectionShell from "../brutal/SectionShell";
import BrutalButton from "../brutal/BrutalButton";
import LoadoutStrip from "./LoadoutStrip";
import MemoryMatchGame from "./MemoryMatchGame";

const Hero = () => {
  const { name, role, description } = about;

  return (
    <SectionShell
      id="hero"
      bgClass="bg-brutal-lavender"
      innerClassName="py-10 sm:py-16 md:py-24"
    >
      <div className="grid min-w-0 items-center gap-6 sm:gap-8 md:grid-cols-2 md:gap-12">
        <div className="min-w-0 text-left">
          {name && (
            <h1 className="text-3xl font-extrabold leading-none tracking-tight text-black sm:text-4xl md:text-6xl">
              {name}
            </h1>
          )}
          {role && (
            <p className="mt-2 text-lg font-bold text-black/80 sm:mt-3 sm:text-xl md:text-2xl">
              {role}
            </p>
          )}
          {description && (
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-black/90 sm:mt-5 sm:text-base md:text-lg">
              {description}
            </p>
          )}
          <div className="mt-6 sm:mt-8">
            <BrutalButton
              href="#work"
              variant="primary"
              className="w-full sm:w-auto"
            >
              See my work
            </BrutalButton>
          </div>
          <LoadoutStrip />
        </div>

        <div className="mx-auto w-full min-w-0 max-w-sm sm:max-w-md md:mx-0 md:max-w-none">
          <MemoryMatchGame />
        </div>
      </div>
    </SectionShell>
  );
};

export default Hero;
