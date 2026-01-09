import "../styles/footer.css";
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub
} from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer-name">Pratik Kumar Gautam</h3>

      <ul className="footer-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer-social">
        <a href="https://www.instagram.com/gautam_pratik0412?igsh=ZGo5aXF5b2pnZnhu" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/pratik-k-gautam-101703259/" target="_blank" rel="noreferrer">
          <FaLinkedinIn />
        </a>
        <a href="https://leetcode.com/u/Pratikgautam12/" target="_blank" rel="noreferrer">
          <SiLeetcode />
        </a>
        <a href="https://www.codechef.com/users/pratikgautam04" target="_blank" rel="noreferrer">
          <SiCodechef />
        </a>
        <a href="https://github.com/PratikGautam04" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} Pratik Kumar Gautam. All rights reserved.
      </p>
    </footer>
  );
}
