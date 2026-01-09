import "../styles/modal.css";

export default function ProjectModal({ project, closeModal }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal reveal" onClick={(e) => e.stopPropagation()}>
        <h3>{project.title}</h3>
        <p className="modal-tech">{project.tech}</p>

        <p className="modal-desc">{project.description}</p>

        <div className="modal-actions">
          <a href={project.live} target="_blank" rel="noreferrer">
            Live Demo
          </a>
          <a href={project.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>

        <button className="modal-close" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
}
