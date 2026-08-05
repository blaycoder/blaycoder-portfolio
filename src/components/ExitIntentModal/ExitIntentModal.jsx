import { useEffect, useState, useCallback, useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { about, contact } from "../../portfolio";
import BrutalButton from "../brutal/BrutalButton";
import BrutalCard from "../brutal/BrutalCard";

const STORAGE_KEY = "exitIntentShown";
const DESKTOP_MIN_WIDTH = 1024;
const EXIT_INTENT_TOP_THRESHOLD = 15;

const ExitIntentModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const switchedAwayRef = useRef(false);

  const isDesktop = () => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(`(min-width: ${DESKTOP_MIN_WIDTH}px)`).matches;
  };

  const hasShown = () => {
    try {
      return sessionStorage.getItem(STORAGE_KEY) === "true";
    } catch {
      return false;
    }
  };

  const markShown = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // sessionStorage may be unavailable
    }
  };

  const tryShow = useCallback(() => {
    if (hasShown()) return;
    setIsOpen(true);
    markShown();
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    markShown();
  }, []);

  const handleMouseLeave = useCallback(
    (e) => {
      if (!isDesktop() || hasShown()) return;
      if (e.clientY > EXIT_INTENT_TOP_THRESHOLD) return;

      const relatedTarget = e.relatedTarget;
      if (
        relatedTarget === null ||
        !document.documentElement.contains(relatedTarget)
      ) {
        tryShow();
      }
    },
    [tryShow],
  );

  useEffect(() => {
    if (!isDesktop()) return;

    const doc = document.documentElement;
    doc.addEventListener("mouseleave", handleMouseLeave);
    doc.addEventListener("mouseout", handleMouseLeave);

    return () => {
      doc.removeEventListener("mouseleave", handleMouseLeave);
      doc.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [handleMouseLeave]);

  useEffect(() => {
    const handleVisibility = () => {
      if (hasShown()) return;

      if (document.hidden) {
        switchedAwayRef.current = true;
        return;
      }

      if (switchedAwayRef.current) {
        switchedAwayRef.current = false;
        tryShow();
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, [tryShow]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") handleClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  const email = contact?.email;
  const github = about?.social?.github;
  const linkedin = about?.social?.linkedin;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-intent-title"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <BrutalCard className="relative w-full max-w-md">
        <button
          type="button"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-black bg-white text-black shadow-[2px_2px_0_#000] transition-[transform,box-shadow] duration-100 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={handleClose}
          aria-label="Close modal"
        >
          <CloseIcon fontSize="small" />
        </button>

        <h2
          id="exit-intent-title"
          className="pr-10 text-xl font-extrabold text-black sm:text-2xl"
        >
          Before you go—let&apos;s connect?
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-black/90 sm:text-base">
          I&apos;d love to hear from you. Reach out via email or connect on
          LinkedIn or GitHub.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {email && (
            <BrutalButton
              href={`mailto:${email}`}
              variant="primary"
              className="gap-2"
            >
              <EmailIcon fontSize="small" />
              Email
            </BrutalButton>
          )}
          {github && (
            <BrutalButton
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              variant="accent"
              className="gap-2"
            >
              <GitHubIcon fontSize="small" />
              GitHub
            </BrutalButton>
          )}
          {linkedin && (
            <BrutalButton
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              variant="default"
              className="gap-2"
            >
              <LinkedInIcon fontSize="small" />
              LinkedIn
            </BrutalButton>
          )}
        </div>
      </BrutalCard>
    </div>
  );
};

export default ExitIntentModal;
