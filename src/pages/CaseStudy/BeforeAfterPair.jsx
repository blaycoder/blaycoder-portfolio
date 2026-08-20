import PropTypes from "prop-types";
import BrutalCard from "../../components/brutal/BrutalCard";

const Shot = ({ src, label, alt }) => (
  <a
    href={src}
    target="_blank"
    rel="noopener noreferrer"
    className="group block overflow-hidden rounded-xl border-[3px] border-black bg-white"
    aria-label={`Open ${label} screenshot full size`}
  >
    <span className="block border-b-[3px] border-black bg-black px-3 py-1.5 text-xs font-extrabold uppercase tracking-wide text-white">
      {label}
    </span>
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="max-h-[420px] w-full object-cover object-top transition-transform duration-200 group-hover:scale-[1.02]"
    />
  </a>
);

Shot.propTypes = {
  src: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

const BeforeAfterPair = ({ pair }) => (
  <BrutalCard className="p-4 md:p-5">
    <h4 className="mb-4 text-left text-lg font-extrabold text-black">
      {pair.label}
    </h4>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <Shot src={pair.before} label="Before" alt={`${pair.label} — before redesign`} />
      <Shot src={pair.after} label="After" alt={`${pair.label} — after redesign`} />
    </div>
    {pair.note && (
      <p className="mt-4 text-left text-sm leading-relaxed text-black/70">
        {pair.note}
      </p>
    )}
  </BrutalCard>
);

BeforeAfterPair.propTypes = {
  pair: PropTypes.shape({
    label: PropTypes.string.isRequired,
    before: PropTypes.string.isRequired,
    after: PropTypes.string.isRequired,
    note: PropTypes.string,
  }).isRequired,
};

export default BeforeAfterPair;
