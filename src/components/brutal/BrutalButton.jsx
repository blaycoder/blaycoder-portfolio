import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

const BrutalButton = ({
  children,
  className,
  variant = "default",
  href,
  ...props
}) => {
  const base =
    "inline-flex min-h-11 items-center justify-center rounded-full border-[3px] border-black px-6 py-2.5 text-sm font-bold text-black no-underline shadow-[4px_4px_0_#000] transition-[transform,box-shadow] duration-100 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-black";

  const variants = {
    default: "bg-white",
    primary: "bg-brutal-yellow",
    accent: "bg-brutal-teal",
    danger: "bg-brutal-red text-white",
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
};

BrutalButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default", "primary", "accent", "danger"]),
  href: PropTypes.string,
};

export default BrutalButton;
