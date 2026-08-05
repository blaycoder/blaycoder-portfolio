import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ScrollToTop = ({ companionOpen = false }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () =>
      setIsVisible(window.pageYOffset > 500);

    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible || companionOpen) return null;

  return (
    <a
      href="#top"
      aria-label="Scroll to top"
      className="fixed bottom-24 right-6 z-40 hidden size-12 items-center justify-center rounded-full border-[3px] border-black bg-white text-black shadow-[4px_4px_0_#000] transition-[transform,box-shadow] duration-100 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none md:inline-flex"
    >
      <ArrowUpwardIcon fontSize="small" />
    </a>
  );
};

ScrollToTop.propTypes = {
  companionOpen: PropTypes.bool,
};

export default ScrollToTop;
