import { useEffect, useState, useCallback } from "react";
import CloseIcon from "@material-ui/icons/Close";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { about, contact } from "../../portfolio";
import "./ExitIntentModal.css";

const STORAGE_KEY = "exitIntentShown";
const DESKTOP_MIN_WIDTH = 1024;
const EXIT_INTENT_TOP_THRESHOLD = 15; // px from top - cursor moving to address bar/back

const ExitIntentModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isDesktop = () => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(`(min-width: ${DESKTOP_MIN_WIDTH}px)`).matches;
  };

  const tryShow = useCallback(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    setIsOpen(true);
    try {
      sessionStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // sessionStorage may be unavailable (private mode, etc.)
    }
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // sessionStorage may be unavailable
    }
  }, []);

  const handleMouseLeave = useCallback(
    (e) => {
      if (!isDesktop()) return;
      if (sessionStorage.getItem(STORAGE_KEY)) return;
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

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDesktop()) return;
      if (sessionStorage.getItem(STORAGE_KEY)) return;
      if (e.clientY <= EXIT_INTENT_TOP_THRESHOLD) {
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
    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      doc.removeEventListener("mouseleave", handleMouseLeave);
      doc.removeEventListener("mouseout", handleMouseLeave);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseLeave, handleMouseMove]);

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
      className="exit-intent-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-intent-title"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div className="exit-intent-modal">
        <button
          type="button"
          className="exit-intent-close"
          onClick={handleClose}
          aria-label="Close modal"
        >
          <CloseIcon />
        </button>
        <h2 id="exit-intent-title" className="exit-intent-title">
          Before you go—let&apos;s connect?
        </h2>
        <p className="exit-intent-message">
          I&apos;d love to hear from you. Reach out via email or connect on
          LinkedIn or GitHub.
        </p>
        <div className="exit-intent-links">
          {email && (
            <a
              href={`mailto:${email}`}
              className="exit-intent-link"
              rel="noopener noreferrer"
            >
              <EmailIcon fontSize="small" />
              Email
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="exit-intent-link"
            >
              <GitHubIcon fontSize="small" />
              GitHub
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="exit-intent-link"
            >
              <LinkedInIcon fontSize="small" />
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExitIntentModal;
