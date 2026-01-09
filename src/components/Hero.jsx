import { useTypewriter } from "react-simple-typewriter";
import "../styles/hero.css";

export default function Hero() {
  const [text] = useTypewriter({
    words: ["Front-End Developer", "React Developer"],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <section id="about" className="hero">
      {/* LEFT CONTENT */}
      <div className="hero-text reveal">
        <h1>
          Hi, I am <br />
          <span className="name">Pratik Kumar Gautam</span>
        </h1>

        <h2 className="hero-role">
          <span className="static-text">I am a</span>
          <span className="typing-text">{text}</span>
        </h2>

        <p>
          I am a dedicated front-end developer with a strong interest in creating
          responsive and interactive web experiences. I enjoy solving problems,
          learning new tools, and turning ideas into functional and visually
          appealing applications.
        </p>

        <a href="Pratik Resume.pdf" download className="btn">
          Check Resume
        </a>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hero-img-wrapper reveal">
        <div className="aura-ring"></div>

        <div className="hero-img">
          <img src="portfolio photo.png" alt="Profile" />
        </div>
      </div>
    </section>
  );
}
