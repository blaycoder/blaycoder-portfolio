import PropTypes from "prop-types";
import BrutalButton from "../brutal/BrutalButton";

const CompanionInput = ({
  value,
  onChange,
  onSubmit,
  disabled = false,
  placeholder = "Ask about Ayomide's work…",
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value.trim() || disabled) return;
    onSubmit(value.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        rows={2}
        className="min-h-11 flex-1 resize-none rounded-2xl border-[3px] border-black bg-white px-3 py-2 text-sm font-medium text-black shadow-[3px_3px_0_#000] placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-black disabled:opacity-60"
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
          }
        }}
      />
      <BrutalButton
        type="submit"
        variant="primary"
        disabled={disabled || !value.trim()}
        className="min-h-11 min-w-20 self-end px-4"
      >
        Send
      </BrutalButton>
    </form>
  );
};

CompanionInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
};

export default CompanionInput;
