import PropTypes from "prop-types";

const CompanionAvatar = ({ className = "" }) => (
  <div
    className={`flex size-10 shrink-0 items-center justify-center rounded-full border-[3px] border-black bg-brutal-teal text-sm font-black text-black shadow-[3px_3px_0_#000] animate-[bounce_2s_ease-in-out_infinite] ${className}`}
    aria-hidden="true"
  >
    A
  </div>
);

CompanionAvatar.propTypes = {
  className: PropTypes.string,
};

export default CompanionAvatar;
