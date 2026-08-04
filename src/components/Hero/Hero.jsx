import { about } from "../../portfolio";
import SectionShell from "../brutal/SectionShell";
import BrutalButton from "../brutal/BrutalButton";
import LoadoutStrip from "./LoadoutStrip";
import MemoryMatchGame from "./MemoryMatchGame";

const Hero = () => {
  const { name, role, description } = about;

  return (
    <SectionShell id="hero" bgClass="bg-brutal-lavender">
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
        <div className="text-left">
          {name && (
            <h1 className="text-4xl font-extrabold leading-none tracking-tight text-black md:text-6xl">
              {name}
            </h1>
          )}
          {role && (
            <p className="mt-3 text-xl font-bold text-black/80 md:text-2xl">
              {role}
            </p>
          )}
          {description && (
            <p className="mt-5 max-w-lg text-base leading-relaxed text-black/90 md:text-lg">
              {description}
            </p>
          )}
          <div className="mt-8">
            <BrutalButton href="#work" variant="primary">
              See my work
            </BrutalButton>
          </div>
          <LoadoutStrip />
        </div>

        <div className="w-full">
          <MemoryMatchGame />
        </div>
      </div>
    </SectionShell>
  );
};

export default Hero;
