import PropTypes from "prop-types";

const CompanionFab = ({ open, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-expanded={open}
    aria-label={open ? "Close Ask Ayo" : "Open Ask Ayo"}
    className={`fixed bottom-6 right-6 z-50 flex size-16 items-center justify-center rounded-full border-[3px] border-black bg-brutal-yellow text-xs font-black uppercase leading-tight text-black shadow-[6px_6px_0_#000] transition-[transform,box-shadow] duration-100 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none md:size-auto md:min-h-14 md:px-5 md:py-3${open ? " max-md:hidden" : ""}`}
  >
    {open ? "✕" : "Ask Ayo"}
  </button>
);

CompanionFab.propTypes = {
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CompanionFab;
