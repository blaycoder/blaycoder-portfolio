import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

const BrutalCard = ({ children, className, interactive = false, ...props }) => (
  <div
    className={cn(
      "rounded-2xl border-[3px] border-black bg-white p-5 shadow-[4px_4px_0_#000] md:p-6",
      interactive &&
        "transition-[transform,box-shadow] duration-100 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none",
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

BrutalCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  interactive: PropTypes.bool,
};

export default BrutalCard;
