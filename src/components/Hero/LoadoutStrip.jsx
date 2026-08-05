import PropTypes from "prop-types";
import { loadout } from "../../portfolio";
import TagChip from "../brutal/TagChip";

const LoadoutStrip = ({ items = loadout }) => (
  <div className="mt-6 min-w-0 sm:mt-8">
    <div className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {items.map((skill, i) => (
        <div
          key={skill}
          className="flex shrink-0 flex-col items-center gap-0.5 rounded-lg border-2 border-black bg-white px-2.5 py-1.5 shadow-[2px_2px_0_#000] sm:gap-1 sm:rounded-xl sm:border-[3px] sm:px-3 sm:py-2 sm:shadow-[3px_3px_0_#000]"
        >
          <TagChip index={i}>{skill}</TagChip>
          <span className="text-[0.55rem] font-bold uppercase text-black/50 sm:text-[0.6rem]">
            Equipped
          </span>
        </div>
      ))}
    </div>
  </div>
);

LoadoutStrip.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
};

export default LoadoutStrip;
