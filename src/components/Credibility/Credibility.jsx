import { credibility } from "../../portfolio";
import SectionShell from "../brutal/SectionShell";

const Credibility = () => {
  if (!credibility?.headline) return null;

  return (
    <SectionShell id="credibility" bgClass="bg-brutal-orange">
      <div className="text-left">
        <h2 className="text-2xl font-extrabold leading-tight text-black sm:text-3xl md:text-4xl">
          {credibility.headline}
        </h2>
        {credibility.subtext && (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-black/85 sm:text-base md:text-lg">
            {credibility.subtext}
          </p>
        )}
      </div>
    </SectionShell>
  );
};

export default Credibility;
