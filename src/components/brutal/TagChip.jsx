import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

const COLORS = [
  "bg-[#FF9F43]",
  "bg-[#1DD1A1]",
  "bg-[#FECA57]",
  "bg-[#A29BFE]",
];

const TagChip = ({ children, index = 0, className }) => (
  <span
    className={cn(
      "inline-flex items-center rounded-full border-[2px] border-black px-3 py-1 text-xs font-bold text-black",
      COLORS[index % COLORS.length],
      className,
    )}
  >
    {children}
  </span>
);

TagChip.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number,
  className: PropTypes.string,
};

export default TagChip;
