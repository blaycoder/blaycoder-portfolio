import PropTypes from "prop-types";
import { loadout } from "../../portfolio";
import TagChip from "../brutal/TagChip";

const LoadoutStrip = ({ items = loadout }) => (
  <div className="mt-8">
    <p className="mb-3 text-xs font-bold uppercase tracking-widest text-black/70">
      Loadout — Equipped
    </p>
    <div className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {items.map((skill, i) => (
        <div
          key={skill}
          className="flex shrink-0 flex-col items-center gap-1 rounded-xl border-[3px] border-black bg-white px-3 py-2 shadow-[3px_3px_0_#000]"
        >
          <TagChip index={i}>{skill}</TagChip>
          <span className="text-[0.6rem] font-bold uppercase text-black/50">
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
