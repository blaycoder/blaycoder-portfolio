import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

const SectionShell = ({
  id,
  bgClass,
  children,
  className,
  innerClassName,
}) => (
  <section id={id} className={cn("w-full", bgClass, className)}>
    <div
      className={cn(
        "mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24",
        innerClassName,
      )}
    >
      {children}
    </div>
  </section>
);

SectionShell.propTypes = {
  id: PropTypes.string,
  bgClass: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  innerClassName: PropTypes.string,
};

export default SectionShell;
