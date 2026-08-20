/**
 * Case study content for professional work completed at AKI Solutions Ltd.
 *
 * Source of truth: Revised_Portfolio_Case_Studies_AKI_Solutions_eSchool.docx
 * (supplied by the site owner). Wording is taken directly from that document.
 * Do not add metrics, claims, technologies, responsibilities or outcomes that
 * are not present in the source document.
 */

const BADGE = "Professional Work · AKI Solutions Ltd.";

export const caseStudies = [
  {
    slug: "aki-solutions",
    projectId: "aki-solutions",
    title: "AKI Solutions",
    tagline: "Corporate Website Redesign & Digital Transformation",
    badge: BADGE,
    role: "Role: Frontend / Web Development contribution",
    heroImage: "/case-studies/aki-solutions/after-homepage-hero.png",
    heroAlt: "AKI Solutions redesigned homepage hero section",
    overview:
      "Contributed to the redesign and modernization of the AKI Solutions corporate website, improving its visual presentation, information architecture, service communication, project storytelling and overall user experience. The work combined frontend implementation with UX, content structure, SEO, performance, accessibility and website maintenance improvements.",
    challengeIntro:
      "The previous website had a conventional corporate presentation that relied heavily on text and did not communicate the company's capabilities as clearly or visually as it could. The company also needed to introduce new services and present its projects in a more compelling way.",
    challenge: [
      "Text-heavy visual presentation.",
      "Generic homepage positioning and limited emphasis on business outcomes.",
      "Basic service presentation.",
      "Project pages provided limited storytelling and context.",
      "Need for new service content and a training certification section.",
      "Opportunities to improve UX, accessibility, SEO and performance.",
    ],
    roleIntro:
      "I contributed to the frontend redesign and implementation, restructuring the interface and improving how the company's services and projects were communicated to visitors.",
    contributions: [
      "Reworked the frontend structure and introduced reusable React components for a more maintainable interface.",
      "Redesigned major pages and improved visual hierarchy, spacing, typography and navigation.",
      "Created stronger service sections and improved capability presentation.",
      "Used imagery, animations and product GIFs to improve visual storytelling.",
      "Improved navigation and overall page flow.",
      "Implemented a dynamic training certification section.",
      "Restructured project pages into clearer, story-driven presentations.",
      "Worked on SEO-related improvements including metadata, content structure and image optimization.",
      "Contributed to accessibility and performance improvements.",
      "Worked on website maintenance/security improvements, including plugin/theme updates and spam-protection measures where applicable.",
    ],
    approachTitle: "Design & UX Approach",
    approach:
      "The redesign focused on helping visitors understand what AKI Solutions does, why its services matter and where to go next. The experience was restructured around clearer information hierarchy, visual communication, service discovery and project storytelling.",
    beforeAfterSummary: [
      { before: "Text-heavy corporate presentation", after: "More visual and engaging communication" },
      { before: "Generic homepage positioning", after: "Clearer value proposition and service presentation" },
      { before: "Basic service cards", after: "Benefit-oriented service sections" },
      { before: "Simple project entries", after: "Structured project storytelling" },
      { before: "Limited visual product communication", after: "Images, animations and product GIFs" },
      { before: "Less cohesive user journey", after: "Improved navigation and page flow" },
    ],
    imagePairs: [
      {
        label: "Homepage",
        before: "/case-studies/aki-solutions/before-homepage-hero.png",
        after: "/case-studies/aki-solutions/after-homepage-hero.png",
      },
      {
        label: "About / Who We Are",
        before: "/case-studies/aki-solutions/before-about-us.png",
        after: "/case-studies/aki-solutions/after-about-us.png",
      },
      {
        label: "Services",
        before: "/case-studies/aki-solutions/before-services.png",
        after: "/case-studies/aki-solutions/after-services.png",
      },
    ],
    outcome:
      "The redesigned website presents AKI Solutions in a more modern, professional and visually engaging way. Services are easier to understand, projects have stronger context, and the overall experience provides a clearer path through the company's digital presence. The work also incorporated improvements across accessibility, SEO, performance and website maintenance.",
    evidenceNote:
      "No numerical before/after performance or SEO scores are claimed, as the original baseline was not recorded.",
    tech: [
      "React",
      "JavaScript",
      "HTML/CSS",
      "Responsive UI",
      "UI/UX",
      "SEO",
      "Accessibility",
      "Performance Optimization",
      "Website Maintenance",
    ],
    gallery: [
      {
        src: "/case-studies/aki-solutions/before-why-choose-us.png",
        caption: "Previous “Why Choose Us” section on the corporate site.",
      },
      {
        src: "/case-studies/aki-solutions/before-project-detail.png",
        caption: "Previous project detail page layout — used as reference when restructuring project storytelling.",
      },
      {
        src: "/case-studies/aki-solutions/before-testimonials.png",
        caption: "Client testimonials section on the corporate site.",
      },
    ],
    links: {
      uk: "https://akisolutions.co.uk",
      ng: "https://akisolutions.com.ng",
    },
  },
  {
    slug: "eschool-ng",
    projectId: "eschool-ng",
    title: "eSchool.ng",
    tagline: "School Management Platform — Product Development & UX",
    badge: BADGE,
    role: "Role: Frontend / Full-stack contribution",
    heroImage: "/case-studies/eschool-ng/after-homepage-hero.png",
    heroAlt: "eSchool.ng redesigned homepage hero section",
    overview:
      "Contributed to the development and improvement of eSchool.ng, a customizable school management platform designed to centralize major school administration and academic workflows. The product supports student and staff management, attendance, results, fees and accounting, inventory, communication, live learning and AI-assisted lesson-note workflows.",
    challengeIntro:
      "The existing eSchool website had a poor user interface, too much text, missing sections and limited visual representation of the product. The website did not immediately communicate the value of the school management platform to potential schools.",
    challenge: [
      "Poor visual hierarchy and UI presentation.",
      "Too much reliance on text.",
      "Important product sections were missing.",
      "Limited visual explanation of the platform's capabilities.",
      "Potential school customers needed to understand the product quickly.",
    ],
    roleIntro:
      "I contributed to the redesign and development of the eSchool web experience, focusing on making the product easier to understand and more compelling to potential school customers. I also worked on backend functionality for the website's demo request flow.",
    contributions: [
      "Redesigned the website across its major pages.",
      "Improved visual hierarchy and overall UI.",
      "Restructured layouts around how potential schools understand and evaluate the product.",
      "Reduced reliance on text by introducing stronger visual representation.",
      "Added relevant content and previously missing sections.",
      "Added animations and interactive elements where appropriate.",
      "Improved accessibility.",
      "Improved presentation of product features and benefits.",
      "Worked on the backend for the demo request form.",
    ],
    approachTitle: "Product Communication Strategy",
    approach:
      "The redesign focused on communicating the value of the platform rather than simply listing features. Product information was reorganized so schools could more quickly understand what eSchool offers, how its modules support school operations and why the platform is useful to them.",
    productAreas: [
      "Student and staff administration",
      "Attendance",
      "Results and academic records",
      "Fees and accounting",
      "Inventory",
      "Communication / Bulk SMS",
      "Live classes",
      "AI-assisted lesson notes",
      "School management workflows",
    ],
    imagePairs: [
      {
        label: "Homepage / Hero",
        before: "/case-studies/eschool-ng/before-homepage-hero.png",
        after: "/case-studies/eschool-ng/after-homepage-hero.png",
        note: "Clear product positioning and school-focused messaging.",
      },
      {
        label: "Features / Benefits",
        before: "/case-studies/eschool-ng/before-features.png",
        after: "/case-studies/eschool-ng/after-features.png",
        note: "Outcome-focused product communication in place of a plain feature list.",
      },
      {
        label: "Testimonials",
        before: "/case-studies/eschool-ng/before-testimonials.png",
        after: "/case-studies/eschool-ng/after-testimonials.png",
      },
      {
        label: "Demo Request Flow",
        before: "/case-studies/eschool-ng/before-demo-request.png",
        after: "/case-studies/eschool-ng/after-demo-cta.png",
        note: "Conversion-focused UX and backend form workflow.",
      },
    ],
    outcome:
      "The redesigned experience became more professional, visually engaging and easier for potential schools to understand. The company reported increased interest from potential clients, including more demo requests and better feedback about the website. Accessibility and SEO were also improved.",
    evidenceNote:
      "No numerical before/after performance, SEO or conversion metrics are claimed, as no baseline was recorded. Increased demo interest is a qualitative reported outcome, not a quantified conversion result.",
    tech: [
      "Frontend Development",
      "UI/UX",
      "Responsive Design",
      "Backend/API Integration",
      "Forms",
      "Accessibility",
      "SEO",
      "Product Design",
    ],
    gallery: [
      {
        src: "/case-studies/eschool-ng/after-outcomes.png",
        caption: "“What schools achieve with eSchool.ng” — outcome-focused benefits section introduced in the redesign.",
      },
      {
        src: "/case-studies/eschool-ng/after-product-interface.png",
        caption: "Full features page showing platform depth across results, attendance, fees and communication modules.",
      },
      {
        src: "/case-studies/eschool-ng/after-faq.png",
        caption: "New FAQ section added to answer common platform, access and pricing questions — previously missing from the site.",
      },
    ],
    links: {
      live: "https://eschool-ng.com",
    },
  },
];

export function findCaseStudy(slug) {
  return caseStudies.find((cs) => cs.slug === slug);
}
