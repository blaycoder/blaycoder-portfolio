import { findCaseStudy } from "../../data/case-studies";
import BrutalCard from "../brutal/BrutalCard";
import BrutalButton from "../brutal/BrutalButton";

const FEATURED_SLUG = "eschool-ng";

const HeroCaseStudyCard = () => {
  const study = findCaseStudy(FEATURED_SLUG);
  if (!study) return null;

  return (
    <BrutalCard className="overflow-hidden p-0 md:p-0">
      <div className="aspect-[16/10] w-full overflow-hidden border-b-[3px] border-black bg-white">
        <img
          src={study.heroImage}
          alt={study.heroAlt}
          className="h-full w-full object-cover object-top"
        />
      </div>

      <div className="p-4 text-left sm:p-5 md:p-6">
        <span className="inline-flex items-center rounded-full border-[2px] border-black bg-brutal-yellow px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-black sm:text-xs">
          Featured Case Study
        </span>
        <h2 className="mt-3 text-xl font-extrabold text-black sm:text-2xl">
          {study.title}
        </h2>
        <p className="mt-1 text-sm font-semibold text-black/75 sm:text-base">
          {study.tagline}
        </p>
        <p className="mt-1 text-xs font-medium text-black/55 sm:text-sm">
          {study.badge}
        </p>

        <BrutalButton
          to={`/case-studies/${study.slug}`}
          variant="accent"
          className="mt-4 w-full sm:mt-5 sm:w-auto"
        >
          Read the Case Study
        </BrutalButton>
      </div>
    </BrutalCard>
  );
};

export default HeroCaseStudyCard;
