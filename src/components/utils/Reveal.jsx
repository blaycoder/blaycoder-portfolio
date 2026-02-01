import React, { useEffect, useRef, useMemo } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const Reveal = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const reduced = useMemo(() => prefersReducedMotion(), []);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  const contentVariants = reduced
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } };

  const slideVariants = reduced
    ? { hidden: { opacity: 1 }, visible: { opacity: 0 } }
    : { hidden: { left: 0 }, visible: { left: "100%" } };

  const transition = reduced
    ? { duration: 0.15 }
    : { duration: 0.5, delay: 0.25 };

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate={mainControls}
        transition={transition}
      >
        {children}
      </motion.div>
      {!reduced && (
        <motion.div
          variants={slideVariants}
          initial="hidden"
          animate={slideControls}
          transition={{ duration: 0.5, ease: "easeIn" }}
          style={{
            position: "absolute",
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            background: "var(--clr-primary)",
            zIndex: 20,
          }}
        />
      )}
    </div>
  );
};
