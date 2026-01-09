import "../styles/skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaCode
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiVercel,
  SiPostman,
  SiFigma
} from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <p className="skills-subtitle">
        Technologies and tools I’ve worked with
      </p>

      <div className="skills-grid">
        {/* Frontend */}
        <div className="skills-card glow">
          <h3>Frontend</h3>
          <div className="skills-items">
            <Skill icon={<FaHtml5 />} name="HTML" />
            <Skill icon={<FaCss3Alt />} name="CSS" />
            <Skill icon={<FaJs />} name="JavaScript" />
            <Skill icon={<FaReact />} name="React.js" />
            <Skill icon={<SiTailwindcss />} name="Tailwind" />
            <Skill icon={<FaBootstrap />} name="Bootstrap" />
          </div>
        </div>

        {/* Backend */}
        <div className="skills-card glow">
          <h3>Backend</h3>
          <div className="skills-items">
            <Skill icon={<FaNodeJs />} name="Node.js" />
            <Skill icon={<SiMongodb />} name="MongoDB" />
            <Skill icon={<SiMysql />} name="SQL" />
          </div>
        </div>

        {/* Others */}
        <div className="skills-card skills-card-full glow">
          <h3>Others</h3>
          <div className="skills-items">
            <Skill icon={<FaGitAlt />} name="Git" />
            <Skill icon={<FaGithub />} name="GitHub" />
            <Skill icon={<FaDocker />} name="Docker" />
            <Skill icon={<SiNetlify />} name="Netlify" />
            <Skill icon={<SiVercel />} name="Vercel" />
            <Skill icon={<FaCode />} name="VS Code" />
            <Skill icon={<SiPostman />} name="Postman" />
            <Skill icon={<SiFigma />} name="Figma" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Skill({ icon, name }) {
  return (
    <div className="skill-item">
      <span className="skill-icon">{icon}</span>
      <span className="skill-name">{name}</span>
    </div>
  );
}
