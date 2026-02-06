import { useEffect, useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return isVisible ? (
    <div className="scroll-top" role="presentation">
      <a href="#top" aria-label="Scroll to top" className="scroll-top__link">
        <ArrowUpwardIcon fontSize="large" />
      </a>
    </div>
  ) : null;
};

export default ScrollToTop;
