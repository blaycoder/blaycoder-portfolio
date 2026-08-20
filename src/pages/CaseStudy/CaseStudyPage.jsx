import { useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { caseStudies, findCaseStudy } from "../../data/case-studies";
import SectionShell from "../../components/brutal/SectionShell";
import BrutalCard from "../../components/brutal/BrutalCard";
import BrutalButton from "../../components/brutal/BrutalButton";
import TagChip from "../../components/brutal/TagChip";
import Footer from "../../components/Footer/Footer";
import BeforeAfterPair from "./BeforeAfterPair";

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border-[2px] border-black bg-brutal-yellow px-4 py-1.5 text-xs font-extrabold uppercase tracking-wide text-black shadow-[3px_3px_0_#000]">
    {children}
  </span>
);

Badge.propTypes = {
  children: PropTypes.node.isRequired,
};

const CaseStudyNotFound = () => (
  <SectionShell bgClass="bg-white">
    <h1 className="text-3xl font-extrabold text-black">Case study not found</h1>
    <p className="mt-4 text-black/70">
      That case study doesn&apos;t exist. Head back to the portfolio to see
      current work.
    </p>
    <BrutalButton to="/" variant="primary" className="mt-6">
      <ArrowLeft size={16} className="mr-2" /> Back to portfolio
    </BrutalButton>
  </SectionShell>
);

const CaseStudyPage = () => {
  const { slug } = useParams();
  const study = findCaseStudy(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (study) {
      document.title = `${study.title} Case Study — ${study.tagline}`;
    }
  }, [study]);

  if (!study) return <CaseStudyNotFound />;

  const otherStudy = caseStudies.find((cs) => cs.slug !== study.slug);

  return (
    <div className="w-full bg-white">
      {/* Mini header */}
      <header className="mx-auto flex max-w-5xl items-center justify-between border-b-[3px] border-black px-4 py-4 md:px-6">
        <Link to="/" className="text-lg font-extrabold text-black no-underline">
          OA
        </Link>
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-black no-underline hover:underline"
        >
          <ArrowLeft size={16} /> Back to portfolio
        </Link>
      </header>

      {/* Hero */}
      <SectionShell bgClass="bg-[#FFF9E6]" innerClassName="py-12 md:py-16">
        <Badge>{study.badge}</Badge>
        <h1 className="mt-5 text-left text-3xl font-extrabold leading-tight text-black md:text-5xl">
          {study.title}
        </h1>
        <p className="mt-3 max-w-2xl text-left text-lg text-black/80 md:text-xl">
          {study.tagline}
        </p>
        <p className="mt-2 text-left text-sm font-bold text-black/70">
          {study.role}
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border-[3px] border-black shadow-[6px_6px_0_#000]">
          <img
            src={study.heroImage}
            alt={study.heroAlt}
            className="w-full object-cover object-top"
            loading="eager"
          />
        </div>
      </SectionShell>

      {/* Overview */}
      <SectionShell bgClass="bg-white">
        <h2 className="text-left text-2xl font-extrabold text-black md:text-3xl">
          Overview
        </h2>
        <p className="mt-4 max-w-3xl text-left leading-relaxed text-black/80">
          {study.overview}
        </p>
      </SectionShell>

      {/* Challenge */}
      <SectionShell bgClass="bg-[#F4F4F4]">
        <h2 className="text-left text-2xl font-extrabold text-black md:text-3xl">
          The Challenge
        </h2>
        <p className="mt-4 max-w-3xl text-left leading-relaxed text-black/80">
          {study.challengeIntro}
        </p>
        <ul className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
          {study.challenge.map((item) => (
            <li key={item} className="flex gap-2 text-left text-black/85">
              <span aria-hidden="true" className="font-extrabold text-black">
                –
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </SectionShell>

      {/* Role & Contributions */}
      <SectionShell bgClass="bg-white">
        <h2 className="text-left text-2xl font-extrabold text-black md:text-3xl">
          My Role &amp; Contributions
        </h2>
        <p className="mt-4 max-w-3xl text-left leading-relaxed text-black/80">
          {study.roleIntro}
        </p>
        <ul className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
          {study.contributions.map((item) => (
            <li key={item} className="flex gap-2 text-left text-black/85">
              <span aria-hidden="true" className="font-extrabold text-black">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </SectionShell>

      {/* Approach */}
      <SectionShell bgClass="bg-[#F4F4F4]">
        <h2 className="text-left text-2xl font-extrabold text-black md:text-3xl">
          {study.approachTitle}
        </h2>
        <p className="mt-4 max-w-3xl text-left leading-relaxed text-black/80">
          {study.approach}
        </p>

        {study.productAreas && (
          <div className="mt-6 flex flex-wrap gap-2">
            {study.productAreas.map((area, i) => (
              <TagChip key={area} index={i}>
                {area}
              </TagChip>
            ))}
          </div>
        )}

        {study.beforeAfterSummary && (
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse overflow-hidden rounded-xl border-[3px] border-black text-left text-sm">
              <thead>
                <tr className="bg-black text-white">
                  <th className="border-r-[3px] border-black px-4 py-3 font-extrabold">
                    Before
                  </th>
                  <th className="px-4 py-3 font-extrabold">After</th>
                </tr>
              </thead>
              <tbody>
                {study.beforeAfterSummary.map((row) => (
                  <tr key={row.before} className="odd:bg-white even:bg-[#FFF9E6]">
                    <td className="border-r-[3px] border-t-[2px] border-black px-4 py-3 text-black/80">
                      {row.before}
                    </td>
                    <td className="border-t-[2px] border-black px-4 py-3 font-semibold text-black">
                      {row.after}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </SectionShell>

      {/* Before / After visuals */}
      <SectionShell bgClass="bg-white">
        <h2 className="text-left text-2xl font-extrabold text-black md:text-3xl">
          Before &rarr; After
        </h2>
        <p className="mt-3 max-w-3xl text-left text-sm text-black/60">
          Click any screenshot to view it full size.
        </p>
        <div className="mt-8 flex flex-col gap-8">
          {study.imagePairs.map((pair) => (
            <BeforeAfterPair key={pair.label} pair={pair} />
          ))}
        </div>
      </SectionShell>

      {/* Outcome */}
      <SectionShell bgClass="bg-[#EAF7EF]">
        <h2 className="text-left text-2xl font-extrabold text-black md:text-3xl">
          Outcome
        </h2>
        <p className="mt-4 max-w-3xl text-left leading-relaxed text-black/80">
          {study.outcome}
        </p>
        {study.evidenceNote && (
          <BrutalCard className="mt-6 max-w-3xl bg-white/80 p-4">
            <p className="text-left text-sm leading-relaxed text-black/70">
              <strong className="font-extrabold text-black">Note: </strong>
              {study.evidenceNote}
            </p>
          </BrutalCard>
        )}
      </SectionShell>

      {/* Tech / Areas of contribution */}
      <SectionShell bgClass="bg-white">
        <h2 className="text-left text-2xl font-extrabold text-black md:text-3xl">
          Technology / Areas of Contribution
        </h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {study.tech.map((item, i) => (
            <TagChip key={item} index={i}>
              {item}
            </TagChip>
          ))}
        </div>

        {study.links && (
          <div className="mt-8 flex flex-wrap gap-3">
            {Object.entries(study.links).map(([key, url]) => (
              <BrutalButton
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                variant="accent"
              >
                <ExternalLink size={16} className="mr-2" />
                Visit {study.title}
                {key !== "live" ? ` (${key.toUpperCase()})` : ""}
              </BrutalButton>
            ))}
          </div>
        )}
      </SectionShell>

      {/* Gallery */}
      {study.gallery?.length > 0 && (
        <SectionShell bgClass="bg-[#F4F4F4]">
          <h2 className="text-left text-2xl font-extrabold text-black md:text-3xl">
            Additional Screenshots
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {study.gallery.map((shot) => (
              <BrutalCard key={shot.src} className="overflow-hidden p-0">
                <a href={shot.src} target="_blank" rel="noopener noreferrer">
                  <img
                    src={shot.src}
                    alt={shot.caption}
                    loading="lazy"
                    className="max-h-[420px] w-full border-b-[3px] border-black object-cover object-top"
                  />
                </a>
                <p className="p-4 text-left text-sm leading-relaxed text-black/75">
                  {shot.caption}
                </p>
              </BrutalCard>
            ))}
          </div>
        </SectionShell>
      )}

      {/* Cross-link */}
      {otherStudy && (
        <SectionShell bgClass="bg-white" innerClassName="py-12 md:py-16">
          <BrutalCard interactive className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-wide text-black/50">
                Also from AKI Solutions Ltd.
              </p>
              <h3 className="mt-1 text-xl font-extrabold text-black">
                {otherStudy.title} — {otherStudy.tagline}
              </h3>
            </div>
            <BrutalButton to={`/case-studies/${otherStudy.slug}`} variant="primary">
              Read case study
            </BrutalButton>
          </BrutalCard>
        </SectionShell>
      )}

      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <Footer />
      </div>
    </div>
  );
};

export default CaseStudyPage;
