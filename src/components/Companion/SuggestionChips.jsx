import PropTypes from "prop-types";
import TagChip from "../brutal/TagChip";

const SUGGESTIONS = [
  "What's his React experience?",
  "Tell me about SpaceHQ",
  "Is he open to freelance work?",
  "Match me to a job",
];

const SuggestionChips = ({ onSelect, visible = true }) => {
  if (!visible) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {SUGGESTIONS.map((label, index) => (
        <button
          key={label}
          type="button"
          onClick={() => onSelect(label)}
          className="cursor-pointer border-none bg-transparent p-0"
        >
          <TagChip index={index}>{label}</TagChip>
        </button>
      ))}
    </div>
  );
};

SuggestionChips.propTypes = {
  onSelect: PropTypes.func.isRequired,
  visible: PropTypes.bool,
};

export default SuggestionChips;
