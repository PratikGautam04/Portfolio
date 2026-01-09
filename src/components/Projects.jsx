import { useState } from "react";
import ProjectModal from "./ProjectModal";
import "../styles/projects.css";

const projectsData = [
  {
    title: "UTS Railway Ticket Booking System",
    description:
      "A web-based railway ticket booking system inspired by the UTS mobile app. Includes login, booking, fare calculation, and ticket summary features.",
    tech: "HTML, CSS, JavaScript",
    live: "https://pratikgautam04.github.io/UTS-Ticket-System/",
    github: "https://github.com/PratikGautam04/UTS-Ticket-System",
  },
  // {
  //   title: "Mutual Fund SIP Calculator",
  //   description:
  //     "A responsive SIP calculator that helps users calculate monthly investments and expected returns.",
  //   tech: "React.js, JavaScript, CSS",
  //   live: "#",
  //   github: "#",
  // },

  {
  title: "Personal Finance Manager",
  description:
    "A full-featured personal finance management application built with React. Users can securely log in, track income and expenses, manage transactions across multiple accounts (Cash/Bank/Wallet), set monthly budgets, view analytical charts, export data to CSV, and switch between light and dark themes. Designed with a clean, responsive UI and localStorage-based persistence.",
  tech: "React.js, JavaScript (ES6), CSS, Recharts",
  live: "https://pratikgautam04.github.io/Personal-Finance-Manager/",
    github: "https://github.com/PratikGautam04/Personal-Finance-Manager",
},
  {
    title: "Weather Forecast Application",
    description:
      "A weather forecast web application that displays real-time weather information using a public API.",
    tech: "HTML, CSS, JavaScript, API",
    live: "https://pratikgautam04.github.io/Weather-Forecast-/",
    github: "https://github.com/PratikGautam04/Weather-Forecast-",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A personal portfolio website showcasing skills, experience, projects, and education.",
    tech: "React.js, CSS, Vite",
    live: "#",
    github: "#",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <p className="projects-subtitle">
        Academic and personal projects that highlight my practical experience
      </p>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-overlay">
              <button onClick={() => setSelectedProject(project)}>
                View Details
              </button>
            </div>

            <h3>{project.title}</h3>
            <p className="project-tech">{project.tech}</p>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          closeModal={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
