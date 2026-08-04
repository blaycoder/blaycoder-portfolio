import PropTypes from "prop-types";

const SpeechBubble = ({ children, isLoading = false }) => (
  <div className="rounded-2xl border-[3px] border-black bg-white px-4 py-3 text-sm leading-relaxed text-black shadow-[4px_4px_0_#000]">
    {isLoading ? (
      <span className="inline-flex gap-1 font-bold" aria-label="Thinking">
        <span className="animate-bounce [animation-delay:0ms]">.</span>
        <span className="animate-bounce [animation-delay:150ms]">.</span>
        <span className="animate-bounce [animation-delay:300ms]">.</span>
      </span>
    ) : (
      children
    )}
  </div>
);

SpeechBubble.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
};

export default SpeechBubble;
