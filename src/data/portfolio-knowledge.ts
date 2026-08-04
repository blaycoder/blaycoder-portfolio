export type ProjectLink = { label: string; url: string };

export type Project = {
  id: string;
  name: string;
  featured: boolean;
  description: string;
  shortDescription?: string;
  stack: string[];
  sourceCode?: string;
  livePreview?: string;
  npmPackage?: string;
  links?: ProjectLink[];
  credit?: string;
  image?: string;
};

export type Experience = {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  summary: string[];
  details: string[];
  tech: string[];
};

export type FaqItem = { question: string; answer: string };

export const header = {
  homepage: "https://github.com/blaycoder",
  title: "OA",
};

export const about = {
  name: "Ayomide",
  role: "Front End Engineer",
  description:
    "Frontend engineer and Altschool Africa alumnus. I build responsive web products, contribute to open source, and create technical content on Medium and YouTube.",
  resume:
    "https://drive.google.com/file/d/1iR8FQ2BpddE_5RmnzwHeCWixzKlHiyth/view?usp=sharing",
  social: {
    linkedin: "https://www.linkedin.com/in/ayomide-onatola-3180281a5/",
    github: "https://github.com/blaycoder",
    medium: "https://medium.com/@blaycoder",
    youtube: "https://www.youtube.com/@blaycoder",
  },
};

export const loadout = [
  "Git",
  "GitHub",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
];

export const projects: Project[] = [
  {
    id: "spacehq",
    name: "SpaceHQ",
    featured: true,
    shortDescription:
      "Production React.js SaaS for a UK co-working and virtual address provider — signup and plan-selection flows with Stripe Checkout, customer and admin dashboards, subscription management.",
    description:
      "Built a production React.js SaaS platform for SpaceHQ Ltd, a UK co-working and virtual address provider. Implemented signup and plan-selection flows with Stripe Checkout, customer and admin dashboards, and subscription management using TanStack Query, Zustand, Stripe, and Framer Motion. Applied security patterns including safeUser whitelisting and idempotency keys on payment flows.",
    stack: ["React.js", "TanStack Query", "Zustand", "Stripe", "Framer Motion"],
    livePreview: "https://spacehqltd.com/",
  },
  {
    id: "saabis-beauty",
    name: "Saabi's Beauty",
    featured: true,
    shortDescription:
      "WordPress hair salon site with a custom-built Booking Pro plugin — Stripe + Paystack checkout, deposit and fee logic, PHP 8.2 compatible.",
    description:
      "Developed saabisbeauty.co.uk, a WordPress hair salon website featuring a custom-built Booking Pro plugin with Stripe and Paystack checkout, deposit and fee logic, built on PHP 8.2.",
    stack: ["WordPress", "PHP 8.2", "Stripe", "Paystack"],
    livePreview: "https://saabisbeauty.co.uk",
  },
  {
    id: "sentinel",
    name: "Sentinel",
    featured: true,
    shortDescription:
      "Open-source static analysis CLI that catches API contract mismatches before deployment — MIT licensed, zero/minimal runtime deps, npm workspaces monorepo.",
    description:
      "Created Sentinel, an open-source static analysis CLI that catches API contract mismatches before deployment. MIT licensed with zero/minimal runtime dependencies, published as @sentinel-scan/core and built as an npm workspaces monorepo.",
    stack: ["Node.js", "TypeScript", "CLI", "npm workspaces"],
    sourceCode: "https://github.com/blaycoder/sentinel",
    npmPackage: "https://www.npmjs.com/package/@sentinel-scan/core",
  },
  {
    id: "aki-solutions",
    name: "AKI Solutions Website (UK & Nigeria)",
    featured: false,
    shortDescription:
      "Revamped corporate sites for UK and Nigeria — migrated legacy stack to React.js, Bootstrap, and Framer Motion.",
    description:
      "Revamped the entire website to improve visual appeal and attract prospective clients. Migrated the tech stack from HTML, CSS, JavaScript, and PHP to React.js, Bootstrap, and Framer Motion.",
    stack: ["React.js", "Bootstrap", "Framer Motion", "PHP"],
    links: [
      { label: "UK", url: "https://akisolutions.co.uk" },
      { label: "Nigeria", url: "https://akisolutions.com.ng" },
    ],
  },
  {
    id: "charity-management",
    name: "Charity Management System",
    featured: false,
    shortDescription:
      "Charity portal frontend with admin dashboard, analytics charts, CRUD operations, and API integration.",
    description:
      "Built the frontend of a charity management portal featuring an admin dashboard, analytics and reporting charts, CRUD operations, and API integration.",
    stack: ["React.js", "Tailwind CSS", "Recharts"],
    livePreview: "https://chibobecfoundation.org/",
  },
  {
    id: "may-portfolio",
    name: "May Nwokoro Portfolio",
    featured: false,
    shortDescription:
      "Modern responsive personal portfolio with smooth animations and clean UI to showcase creative work.",
    description:
      "Designed and developed a modern, responsive personal portfolio with smooth animations and clean UI to showcase her work.",
    stack: ["React.js", "Tailwind CSS", "GSAP"],
    livePreview: "https://may-portfolio-eight.vercel.app/",
  },
  {
    id: "carefinder",
    name: "Carefinder",
    featured: false,
    shortDescription:
      "Location-based web app to find the nearest hospital or clinic in Nigeria.",
    description:
      "Developed a web application to help find the nearest hospital or clinic in Nigeria based on user location.",
    stack: ["TailwindCSS", "ReactJs", "Vercel", "NextJs"],
    sourceCode: "https://github.com/blaycoder/carefinder-project",
    livePreview: "https://carefinder-six.vercel.app/",
  },
  {
    id: "simi-portfolio",
    name: "Simileoluwa Ajisafe Portfolio",
    featured: false,
    shortDescription:
      "Responsive personal portfolio with smooth animations and a clean, modern UI.",
    description:
      "Designed and developed a modern, responsive personal portfolio with smooth animations and clean UI.",
    stack: ["React.js", "Tailwind CSS", "GSAP"],
    livePreview: "https://simi-portfolio-one.vercel.app/",
  },
  {
    id: "bookstore",
    name: "An Online Bookstore",
    featured: false,
    shortDescription: "WordPress e-commerce platform for selling books online.",
    description: "E-commerce platform for selling books online.",
    credit: "Created during tenure at AKI Solutions. Copyright AKI Solutions.",
    stack: ["WordPress"],
    livePreview: "https://simcomfort.co.uk/",
  },
  {
    id: "simi-birthday",
    name: "Simi's Birthday",
    featured: false,
    shortDescription: "Personalized interactive birthday webpage built with React.",
    description: "Personalized birthday webpage.",
    stack: ["TailwindCSS", "ReactJs"],
    sourceCode: "https://github.com/blaycoder/simi-birthday",
    livePreview: "https://simi-birthday.vercel.app/",
  },
  {
    id: "coffee-shop",
    name: "Coffee Shop Website",
    featured: false,
    shortDescription:
      "Static coffee shop site with menu, location, and contact details on GitHub Pages.",
    description: "Coffee shop website with menu, location, and contact details.",
    stack: ["HTML", "CSS", "Javascript", "GitHub Pages"],
    sourceCode: "https://github.com/blaycoder/our-coffee-shop",
    livePreview: "https://blaycoder.github.io/our-coffee-shop/",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const moreProjects = projects.filter((p) => !p.featured);
export const projectsLink = { link: "https://github.com/blaycoder" };

export const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "ReactJs", "VueJs", "Nextjs",
  "WordPress", "Shopify", "Material UI", "Git", "GitHub Pages", "Framer Motion",
  "Figma", "Adobe Photoshop", "GSAP",
];

export const experience: Experience[] = [
  {
    id: "ak-infotech-lead",
    period: "December 2022 – Present",
    role: "Frontend Developer (Team Lead)",
    company: "AK Infotech Solutions Ltd",
    location: "Ikeja, Lagos State",
    description:
      "Leading frontend delivery across 15+ responsive websites and internal management software — improving adoption by 25% while hardening WordPress security and mentoring the team.",
    summary: [
      "Built, maintained, and enhanced over 15 responsive websites across desktop, tablet, and mobile.",
      "Enhanced existing management software, improving usability and increasing adoption by 25%.",
      "Implemented security protocols and resolved redirect hacks on WordPress websites.",
    ],
    details: [
      "Designed responsive websites using HTML, CSS, JavaScript, and Reactjs optimized for performance and accessibility.",
      "Onboarded and mentored new interns.",
      "Worked closely with cross-functional teams to deliver high-quality web solutions on time.",
    ],
    tech: ["WordPress", "HTML", "CSS", "JavaScript", "React", "Git", "TailwindCSS"],
  },
  {
    id: "hack-for-la",
    period: "August 2023 – Present",
    role: "Open Source Contributor",
    company: "Hack for LA",
    location: "United States",
    description: "Contributing frontend fixes and features to civic-tech open source projects.",
    summary: [
      "Resolve frontend issues by picking up tasks on the project board.",
      "Work on issues that align with my skillset and capabilities.",
    ],
    details: [],
    tech: ["HTML", "CSS", "JavaScript", "Git"],
  },
  {
    id: "harris-consult",
    period: "November 2024 – December 2025",
    role: "Junior Mobile App Developer (Remote)",
    company: "Harris Consult",
    location: "Lagos State, Nigeria",
    description:
      "Integrated 10+ REST APIs into a mobile application lifecycle, reducing load time by 20%.",
    summary: [
      "Integrated 10+ REST APIs with backend systems, reducing app load time by 20%.",
      "Contributed to the full lifecycle of a mobile application — design, implementation, and optimization.",
    ],
    details: [
      "Contributed to WordPress website customization.",
      "Assisted an intern in the successful development of their assigned web project.",
    ],
    tech: ["REST APIs", "WordPress", "React Native", "Reactjs", "Ionic", "Git"],
  },
  {
    id: "revize",
    period: "October 2023 – December 2023",
    role: "Frontend Developer (Remote)",
    company: "Revize",
    location: "United States",
    description:
      "Converted Figma and Photoshop designs into responsive websites with optimized frontend performance.",
    summary: [
      "Converted Figma and Photoshop designs into responsive websites using HTML, CSS, Javascript, and bootstrap.",
      "Debugged and optimized frontend performance using browser developer tools.",
    ],
    details: ["Ensured cross-platform compatibility across desktops and tablets."],
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Figma", "Photoshop", "Git"],
  },
  {
    id: "ak-infotech-intern",
    period: "September 2021 – October 2022",
    role: "Web Developer Intern",
    company: "AK Infotech Solutions Ltd",
    location: "Ikeja, Lagos State",
    description:
      "Completed 15+ client websites, ran onboarding demos, and provided technical support.",
    summary: [
      "Completed over 15 websites.",
      "Conducted demo and onboarding sessions with clients.",
    ],
    details: ["Provided technical support to clients."],
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

export const faq: FaqItem[] = [
  {
    question: "What roles are you interested in?",
    answer:
      "Frontend engineering roles — especially product-focused teams building React/Next.js apps, design systems, or SaaS dashboards. Also open to freelance and contract work on WordPress and UI-heavy projects.",
  },
  {
    question: "How do you approach problem-solving?",
    answer:
      "Understand the user flow and constraints, break problems into shippable pieces, and validate with real data early before committing to architecture.",
  },
  {
    question: "What are your core strengths?",
    answer:
      "Responsive accessible interfaces, dashboard and checkout flows, legacy migrations, and technical content. Team lead experience mentoring juniors.",
  },
  {
    question: "How do you maintain code quality?",
    answer:
      "Component patterns, TypeScript where valuable, PR reviews, input whitelisting, idempotency keys on payments, Git branching, and cross-breakpoint testing.",
  },
];

export const closingCta = {
  headline: "Available for freelance & contract work",
  subtext: "Let's build something bold together — drop me a line.",
  availability: true,
};

export const contact = { email: "ayomideonatola@gmail.com" };

export type KnowledgeChunk = {
  id: string;
  type: "about" | "project" | "experience" | "faq" | "skills" | "availability";
  title: string;
  text: string;
  metadata: Record<string, string>;
};

export function buildKnowledgeChunks(): KnowledgeChunk[] {
  const chunks: KnowledgeChunk[] = [
    {
      id: "about",
      type: "about",
      title: "About Ayomide",
      text: `${about.name} — ${about.role}. ${about.description} Skills loadout: ${loadout.join(", ")}. Resume: ${about.resume}`,
      metadata: { type: "about" },
    },
    {
      id: "skills",
      type: "skills",
      title: "Skills",
      text: `Technical skills: ${skills.join(", ")}`,
      metadata: { type: "skills" },
    },
    {
      id: "availability",
      type: "availability",
      title: "Availability",
      text: `${closingCta.headline}. ${closingCta.subtext} Email: ${contact.email}. LinkedIn: ${about.social.linkedin}. GitHub: ${about.social.github}.`,
      metadata: { type: "availability" },
    },
  ];

  for (const project of projects) {
    chunks.push({
      id: `project-${project.id}`,
      type: "project",
      title: project.name,
      text: `Project: ${project.name}. ${project.shortDescription || project.description} Stack: ${project.stack.join(", ")}.${project.livePreview ? ` Live: ${project.livePreview}.` : ""}${project.sourceCode ? ` Code: ${project.sourceCode}.` : ""}${project.npmPackage ? ` npm: ${project.npmPackage}.` : ""}`,
      metadata: { type: "project", projectId: project.id, featured: String(project.featured) },
    });
  }

  for (const job of experience) {
    chunks.push({
      id: `experience-${job.id}`,
      type: "experience",
      title: `${job.role} at ${job.company}`,
      text: `${job.role} at ${job.company} (${job.period}, ${job.location}). ${job.description} Highlights: ${job.summary.join(" ")} Tech: ${job.tech.join(", ")}.`,
      metadata: { type: "experience", experienceId: job.id, company: job.company },
    });
  }

  for (const item of faq) {
    chunks.push({
      id: `faq-${item.question.slice(0, 30).replace(/\W+/g, "-").toLowerCase()}`,
      type: "faq",
      title: item.question,
      text: `Q: ${item.question} A: ${item.answer}`,
      metadata: { type: "faq" },
    });
  }

  return chunks;
}

export function findProject(query: string) {
  const q = query.toLowerCase();
  return projects.find(
    (p) =>
      p.id.includes(q) ||
      p.name.toLowerCase().includes(q) ||
      p.stack.some((s) => s.toLowerCase().includes(q)),
  );
}

export function findProjectsByStack(stack: string) {
  const q = stack.toLowerCase();
  return projects.filter((p) =>
    p.stack.some((s) => s.toLowerCase().includes(q) || q.includes(s.toLowerCase())),
  );
}

export function findExperience(query: string) {
  const q = query.toLowerCase();
  return experience.filter(
    (job) =>
      job.company.toLowerCase().includes(q) ||
      job.role.toLowerCase().includes(q) ||
      job.tech.some((t) => t.toLowerCase().includes(q)) ||
      job.id.includes(q),
  );
}
