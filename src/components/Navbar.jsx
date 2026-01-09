import { useState } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`nav ${open ? "nav-open" : ""}`}>
      <h3 className="logo">Pratik Portfolio</h3>

      {/* Hamburger Icon */}
      <div
        className={`menu-toggle ${open ? "rotate" : ""}`}
        onClick={() => setOpen(!open)}
      >
        ☰
      </div>

      <ul className={open ? "open" : ""}>
        <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
        <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
        <li><a href="#education" onClick={() => setOpen(false)}>Education</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
        <li>
          <a
            href="https://github.com/PratikGautam04"
            target="_blank"
            rel="noreferrer"
            className="git"
            onClick={() => setOpen(false)}
          >
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  );
}
