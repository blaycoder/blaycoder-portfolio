const header = {
  homepage: "https://github.com/blaycoder",
  title: "OA",
};

const about = {
  name: "Ayomide",
  role: "Front End Engineer",
  description:
    "I'm a Frontend Developer and an alumnus of Altschool Africa. I'm passionate about sharing knowledge, documentation, contributing to open source and others. I create technical content (on my Medium, and YouTube). I build useful projects. I believe the impossible can become possible if a step is taken and focus is constant.",
  resume:
    "https://drive.google.com/file/d/1yi9G4Imf1Ie41fKmY41OUVvJvWSG0wfM/view?usp=sharing",
  social: {
    linkedin: "https://www.linkedin.com/in/ayomide-onatola-3180281a5/",
    github: "https://github.com/blaycoder",
    medium: "https://medium.com/@blaycoder",
    youtube: "https://www.youtube.com/@blaycoder",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "AKI Solutions Website (UK & Nigeria)",
    description:
      "Revamped the entire website to improve visual appeal and attract prospective clients. Migrated the tech stack from HTML, CSS, JavaScript, and PHP to React.js, Bootstrap, and Framer Motion.",
    stack: ["React.js", "Bootstrap", "Framer Motion", "PHP"],
    links: [
      { label: "UK", url: "https://akisolutions.co.uk" },
      { label: "Nigeria", url: "https://akisolutions.com.ng" },
    ],
  },
  {
    name: "Charity Management System",
    description:
      "Built the frontend of a charity management portal featuring an admin dashboard, analytics and reporting charts, CRUD operations, and API integration.",
    stack: ["React.js", "Tailwind CSS", "Recharts"],
    livePreview: "https://chibobecfoundation.org/",
  },
  {
    name: "May Nwokoro Portfolio",
    description:
      "Designed and developed a modern, responsive personal portfolio with smooth animations and clean UI to showcase her work.",
    stack: ["React.js", "Tailwind CSS", "GSAP"],
    livePreview: "https://may-portfolio-eight.vercel.app/",
  },
  {
    name: "Simileoluwa Ajisafe Portfolio",
    description:
      "Designed and developed a modern, responsive personal portfolio with smooth animations and clean UI to showcase her work.",
    stack: ["React.js", "Tailwind CSS", "GSAP"],
    livePreview: "https://simi-portfolio-one.vercel.app/",
  },
  {
    name: "An Online Bookstore",
    description:
      "Developed an e-commerce platform for selling books online, designed to provide a user-friendly experience for both customers and administrators.",
    credit:
      "This project was created during my tenure at AKI Solutions. Copyright AKI Solutions.",
    stack: ["WordPress"],
    livePreview: "https://simcomfort.co.uk/",
  },
  {
    name: "TBS Academy Website",
    description:
      " The website offers a range of educational resources and courses designed to enhance the learning experience for students. ",
    credit:
      "This project was created during my tenure at AKI Solutions. Copyright AKI Solutions.",
    stack: ["WordPress"],
    livePreview: "https://mytbsacademy.com/",
  },
  {
    name: "Simi's Birthday",
    description: "Developed a personalized birthday webpage",
    stack: ["TailwindCSS", "ReactJs"],
    sourceCode: "https://github.com/blaycoder/simi-birthday",
    livePreview: "https://simi-birthday.vercel.app/",
  },
  {
    name: "GitHub Repo Portfolio",
    description:
      "Developed a portfolio website designed to showcase GitHub repositories. The application pulls data from GitHub to display project details, such as descriptions, languages used, and stars, in an organized and visually appealing format.",
    stack: ["TailwindCSS", "ReactJs", "Vercel", "GitHub API"],
    sourceCode: "https://github.com/blaycoder/github-repo-portfolio",
    livePreview: "https://github-repo-portfolio.vercel.app/",
  },
  {
    name: "Carefinder",
    description:
      "Developed a web application to help find the nearest hospital or clinic in Nigeria. The application provides users with a list of healthcare facilities based on their location, allowing them to easily access medical services.",
    stack: ["TailwindCSS", "ReactJs", "Vercel", "NextJs"],
    sourceCode: "https://github.com/blaycoder/carefinder-project",
    livePreview: "https://carefinder-six.vercel.app/",
  },
  {
    name: "Coffee Shop Website",
    description:
      "Developed a website for a coffee shop, providing customers with information about the menu, location, and contact details. The site features a responsive design and interactive elements to enhance the user experience.",
    stack: ["HTML", "CSS", "Javascript", "GitHub Pages"],
    sourceCode: "https://github.com/blaycoder/our-coffee-shop",
    livePreview: "https://blaycoder.github.io/our-coffee-shop/",
  },
  {
    name: "School Management System Dashboard",
    description:
      "Developed a dashboard for a school management system with a team member Boluwatife Oluwagbamila (https://github.com/Boluwatt) as a project, designed to provide administrators with an overview of student data, attendance, and performance. The dashboard features interactive charts and tables for easy data visualization.",
    stack: ["HTML", "CSS", "Javascript", "GitHub Pages"],
    sourceCode: "https://github.com/blaycoder/Eschoolpedia-student-dashboard",
    livePreview: "https://blaycoder.github.io/Eschoolpedia-student-dashboard",
  },
  {
    name: "Coloured Text",
    description:
      "Developed a web application for generating colored text. The tool allows users to input text and apply different colors, offering a simple and intuitive interface for creating visually engaging content. ",
    stack: ["HTML", "CSS", "Javascript", "GitHub Pages"],
    sourceCode: "https://github.com/blaycoder/Coloured-Text",
    livePreview: "https://blaycoder.github.io/Coloured-Text/",
  },
  {
    name: "Phone Number Validator",
    description:
      "Developed a web application for validating phone numbers. The tool checks if a phone number is valid based on the country code and number format, providing users with instant feedback on the input.",
    stack: ["HTML", "CSS", "Javascript", "GitHub Pages", "NumVerify API"],
    sourceCode: "https://github.com/blaycoder/phone-number-validator",
    livePreview: "https://blaycoder.github.io/phone-number-validator/",
  },
  {
    name: "Simple Pizza Machine",
    description:
      "Created a simple web application that simulates a pizza ordering process. ",
    stack: ["HTML", "CSS", "Javascript", "GitHub Pages"],
    sourceCode: "https://github.com/blaycoder/simple-pizza-machine",
    livePreview: "https://blaycoder.github.io/simple-pizza-machine/",
  },
];

const projectsLink = {
  link: "https://github.com/blaycoder",
};

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "ReactJs",
  "VueJs",
  "Nextjs",
  "WordPress",
  "Shopify",
  "Material UI",
  "Git",
  "GitHub Pages",
  "Framer Motion",
  "Figma",
  "Adobe Photoshop",
  "GSAP"
];

const experience = [
  {
    period: "December 2022 – Present",
    role: "Frontend Developer (Team Lead)",
    company: "AK Infotech Solutions Ltd",
    location: "Ikeja, Lagos State",
    highlights: [
      "Implemented security protocols and resolved redirect hacks on WordPress websites, improving integrity and customer trust.",
      "Built, maintained, and enhanced over 15 responsive websites, ensuring compatibility across desktops, tablets, and mobile devices.",
      "Enhanced existing management software, improving usability and increasing adoption by 25%.",
      "Designed responsive websites using HTML, CSS, JavaScript, and Reactjs optimized for performance and accessibility.",
      "Collaborated effectively with backend developers.",
      "Utilized version control systems like Git to manage code changes and collaborate with team members.",
      "Used browser developer tools to troubleshoot and debug frontend issues efficiently.",
      "Implemented smooth transitions and UI animations to enhance user engagement.",
      "Provided technical support to clients, resolving issues and offering website maintenance.",
      "Onboarded and mentored new interns, offering guidance and support throughout their learning process.",
      "Worked closely with cross-functional teams to deliver high-quality web solutions on time.",
    ],
    tech: ["WordPress", "HTML", "CSS", "JavaScript", "React", "Git", "TailwindCSS"],
  },
  {
    period: "August 2023 – Present",
    role: "Open Source Contributor",
    company: "Hack for LA",
    location: "United States",
    highlights: [
      "Resolve issues related to frontend development by picking up issues on the project board.",
      "Work on any issues within the project that align with my skillset and capabilities.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Git"],
  },
  {
    period: "November 2024 – December 2025",
    role: "Junior Mobile App Developer (Remote)",
    company: "Harris Consult",
    location: "Lagos State, Nigeria",
    highlights: [
      "Collaborated with frontend developers by suggesting practical ideas that enhanced the development and functionality of their projects.",
      "Integrated 10+ REST APIs with backend systems, ensuring seamless functionality and reducing app load time by 20%.",
      "Contributed to the full lifecycle of a mobile application design, implementation, and optimization.",
      "Contributed to the creation and customization of WordPress websites, including implementing design changes and functionality updates as needed.",
      "Assisted an intern in the successful development of their assigned web project, offering guidance and hands-on support.",
      "Played a key role in developing a mobile application, contributing to its design, implementation, and optimization.",
    ],
    tech: ["REST APIs", "WordPress",  "React Native", "Reactjs", "Ionic", "Git"],
  },
  {
    period: "October 2023 – December 2023",
    role: "Frontend Developer (Remote)",
    company: "Revize",
    location: "United States",
    highlights: [
      "Converted Figma and Photoshop designs into responsive websites using HTML, CSS, Javascript, and bootstrap.",
      "Ensured cross-platform compatibility across desktops and tablets.",
      "Debugged and optimized frontend performance using browser developer tools.",
      "Implemented transitions where necessary to enhance user engagement and create a better dynamic user experience.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Figma", "Photoshop", "Git"],
  },
  {
    period: "September 2021 – October 2022",
    role: "Web Developer Intern",
    company: "AK Infotech Solutions Ltd",
    location: "Ikeja, Lagos State",
    highlights: [
      "Completed over 15 websites.",
      "Conducted a demo and onboarding session with clients.",
      "Created websites.",
      "Provided technical support to clients.",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

const contact = {
  email: "ayomideonatola@gmail.com",
};

export { header, about, projects, projectsLink, skills, experience, contact };
