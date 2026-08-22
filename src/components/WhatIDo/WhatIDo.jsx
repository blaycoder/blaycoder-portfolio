import { capabilities } from "../../portfolio";
import SectionShell from "../brutal/SectionShell";
import BrutalCard from "../brutal/BrutalCard";

const WhatIDo = () => {
  if (!capabilities?.length) return null;

  return (
    <SectionShell id="what-i-do" bgClass="bg-brutal-teal">
      <h2 className="mb-8 text-left text-3xl font-extrabold text-black md:mb-12 md:text-4xl">
        What I Do
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        {capabilities.map((item) => (
          <BrutalCard key={item.title}>
            <h3 className="text-left text-lg font-extrabold text-black md:text-xl">
              {item.title}
            </h3>
            <p className="mt-2 text-left text-sm leading-relaxed text-black/85 md:text-base">
              {item.description}
            </p>
          </BrutalCard>
        ))}
      </div>
    </SectionShell>
  );
};

export default WhatIDo;
