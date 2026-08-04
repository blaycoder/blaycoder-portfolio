import { useState } from "react";
import PropTypes from "prop-types";
import { ChevronDown } from "lucide-react";
import BrutalCard from "../brutal/BrutalCard";
import TagChip from "../brutal/TagChip";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

const ExperienceItem = ({ job, questNumber }) => {
  const [open, setOpen] = useState(false);
  const hasDetails = job.details?.length > 0;

  return (
    <BrutalCard className="mb-6 last:mb-0">
      <div className="mb-4">
        <span className="rounded-full border-[2px] border-black bg-brutal-yellow px-3 py-1 text-xs font-bold uppercase">
          Quest {String(questNumber).padStart(2, "0")}
        </span>
      </div>

      <h3 className="text-left text-xl font-extrabold text-black">{job.role}</h3>
      <p className="mt-1 text-left text-sm font-semibold text-black/70">
        {job.company}
        {job.location && (
          <>
            <span className="mx-1.5">·</span>
            {job.location}
          </>
        )}
      </p>
      <p className="mt-0.5 text-left text-xs font-medium text-black/60">
        {job.period}
      </p>

      {job.description && (
        <p className="mt-4 text-left text-sm leading-relaxed text-black/90">
          {job.description}
        </p>
      )}

      {job.tech?.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {job.tech.map((t, i) => (
            <TagChip key={t} index={i}>
              {t}
            </TagChip>
          ))}
        </div>
      )}

      {hasDetails && (
        <Collapsible open={open} onOpenChange={setOpen} className="mt-4">
          <CollapsibleTrigger className="inline-flex min-h-11 items-center gap-1.5 text-sm font-bold text-black underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-black">
            Continue
            <ChevronDown
              size={16}
              className={`transition-transform ${open ? "rotate-180" : ""}`}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="overflow-hidden pt-3">
            <ul className="list-disc space-y-2 pl-5 text-left text-sm text-black/85">
              {job.details.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CollapsibleContent>
        </Collapsible>
      )}
    </BrutalCard>
  );
};

ExperienceItem.propTypes = {
  job: PropTypes.shape({
    role: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string,
    period: PropTypes.string.isRequired,
    description: PropTypes.string,
    details: PropTypes.arrayOf(PropTypes.string),
    tech: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  questNumber: PropTypes.number.isRequired,
};

export default ExperienceItem;
