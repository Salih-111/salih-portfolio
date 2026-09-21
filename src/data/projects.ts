import JATImage from "../assets/JAT.png"
import SGMImage from "../assets/SGM.png"
import PPWImage from "../assets/PPW.png"

export type Project = {
  title: string
  description: string
  technologies: string[]
  github: string
  liveDemo?: string
  image?: string
  live?: string
}

export const projects: Project[] = [
  {
    title: "Job Application Tracker",
    description:
      "A React-based web application for organizing and tracking job applications in one place. It includes a dashboard, application management, search, filtering, sorting, editing, and persistent local storage.",
    technologies: [
      "React",
      "TypeScript",
      "React Router",
      "Tailwind CSS",
      "LocalStorage",
    ],
    github: "https://github.com/Salih-111/Job-Application-Tracker",
    live: "https://salih-111.github.io/Job-Application-Tracker/",
    image: JATImage,
  },

  {
    title: "Student Grade Management System",
    description:
      "A console-based Java application for managing student records and academic performance. It handles student data, subject marks, automatic total and percentage calculations, grade evaluation, search, deletion, and class summaries.",
    technologies: ["Java", "OOP", "ArrayList"],
    github: "https://github.com/Salih-111/Student-Grade-Manager",
    image: SGMImage,
  },

  {
    title: "Personal Developer Portfolio",
    description:
      "A modern, responsive developer portfolio built to showcase my frontend skills, projects, and contact information using a clean and professional interface.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Formspree"],
    github: "https://github.com/Salih-111/salih-portfolio",
    live: "https://salih-portfolio-zeta.vercel.app",
    image: PPWImage,
  },
]
