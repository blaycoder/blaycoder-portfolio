import PropTypes from "prop-types";

import { loadout } from "../../portfolio";

import TagChip from "../brutal/TagChip";

import "./LoadoutStrip.css";

const LoadoutChip = ({ skill, index }) => (
  <div className="flex shrink-0 flex-col items-center gap-0.5 rounded-lg border-2 border-black bg-white px-2.5 py-1.5 shadow-[2px_2px_0_#000] sm:gap-1 sm:rounded-xl sm:border-[3px] sm:px-3 sm:py-2 sm:shadow-[3px_3px_0_#000]">
    <TagChip index={index}>{skill}</TagChip>

    <span className="text-[0.55rem] font-bold uppercase text-black/50 sm:text-[0.6rem]">
      Equipped
    </span>
  </div>
);

LoadoutChip.propTypes = {
  skill: PropTypes.string.isRequired,

  index: PropTypes.number.isRequired,
};

const LoadoutStrip = ({ items = loadout }) => {
  const loop = [...items, ...items];

  return (
    <div className="mt-6 min-w-0 sm:mt-8">
      <div className="loadout-marquee overflow-hidden pb-2">
        <div className="loadout-track flex gap-2" aria-hidden="true">
          {loop.map((skill, i) => (
            <LoadoutChip
              key={`${skill}-${i}`}
              skill={skill}
              index={i % items.length}
            />
          ))}
        </div>

        <div className="sr-only">{items.join(", ")}</div>
      </div>
    </div>
  );
};

LoadoutStrip.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
};

export default LoadoutStrip;
