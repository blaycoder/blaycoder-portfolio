const header = {
  homepage: 'https://github.com/blaycoder',
  title: 'OA',
}

const about = {
  name: "Ayomide",
  role: "Front End Engineer",
  description:
    "I'm a Frontend Developer and an alumnus of Altschool Africa. I'm passionate about sharing knowledge, documentation, contributing to open source and others. I’m currently learning at Alx Africa. I create technical content (on my Medium, and YouTube). I build useful projects. I believe the impossible can become possible if a step is taken and focus is constant.",
  resume:
    "https://drive.google.com/file/d/1fMphe8XXhwG-bwa33ATwiKwErMj9X4Ab/view?usp=sharing",
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
    name: 'An Online Bookstore',
    description:
      'Developed an e-commerce platform for selling books online, designed to provide a user-friendly experience for both customers and administrators.',
    credit:
      'This project was created during my tenure at AKI Solutions. Copyright AKI Solutions.',
    stack: ['WordPress'],
    livePreview: 'https://simcomfort.co.uk/',
  },
  {
    name: 'TBS Academy Website',
    description:
      ' The website offers a range of educational resources and courses designed to enhance the learning experience for students. ',
    credit:
      'This project was created during my tenure at AKI Solutions. Copyright AKI Solutions.',
    stack: ['WordPress'],
    livePreview: 'https://mytbsacademy.com/',
  },
  {
    name: "Simi's Birthday",
    description: 'Developed a personalized birthday webpage',
    stack: ['TailwindCSS', 'ReactJs'],
    sourceCode: 'https://github.com/blaycoder/simi-birthday',
    livePreview: 'https://simi-birthday.vercel.app/',
  },
  {
    name: 'GitHub Repo Portfolio',
    description:
      'Developed a portfolio website designed to showcase GitHub repositories. The application pulls data from GitHub to display project details, such as descriptions, languages used, and stars, in an organized and visually appealing format.',
    stack: ['TailwindCSS', 'ReactJs', 'Vercel', 'GitHub API'],
    sourceCode: 'https://github.com/blaycoder/github-repo-portfolio',
    livePreview: 'https://github-repo-portfolio.vercel.app/',
  },
  {
    name: 'Coloured Text',
    description:
      'Developed a web application for generating colored text. The tool allows users to input text and apply different colors, offering a simple and intuitive interface for creating visually engaging content. ',
    stack: ['HTML', 'CSS', 'Javascript', 'GitHub Pages'],
    sourceCode: 'https://github.com/blaycoder/Coloured-Text',
    livePreview: 'https://blaycoder.github.io/Coloured-Text/',
  },
  {
    name: 'Simple Pizza Machine',
    description:
      'Created a simple web application that simulates a pizza ordering process. ',
    stack: ['HTML', 'CSS', 'Javascript', 'GitHub Pages'],
    sourceCode: 'https://github.com/blaycoder/simple-pizza-machine',
    livePreview: 'https://blaycoder.github.io/simple-pizza-machine/',
  },
]

const projectsLink = {
  link: 'https://github.com/blaycoder',
}

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'ReactJs',
  'VueJs',
  'WordPress',
  'Shopify',
  'Material UI',
  'Git',
  'GitHub Pages',
  'Framer Motion',
  'Figma',
  'Adobe Photoshop',
  'CorelDraw',
]

const contact = {
  email: 'ayomideonatola@gmail.com',
}

export { header, about, projects, projectsLink, skills, contact }
