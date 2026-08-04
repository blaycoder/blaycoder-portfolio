import PropTypes from "prop-types";
import BrutalButton from "../brutal/BrutalButton";

const CompanionStatus = ({ error, onRetry }) => {
  if (!error) return null;

  return (
    <div className="rounded-2xl border-[3px] border-black bg-brutal-red px-4 py-3 text-sm font-bold text-white shadow-[4px_4px_0_#000]">
      <p>Companion offline — is the Mastra server running?</p>
      {onRetry && (
        <BrutalButton
          variant="default"
          className="mt-3 min-h-11 bg-white text-black"
          onClick={onRetry}
        >
          Retry
        </BrutalButton>
      )}
    </div>
  );
};

CompanionStatus.propTypes = {
  error: PropTypes.object,
  onRetry: PropTypes.func,
};

export default CompanionStatus;
