import "../styles/education.css";

export default function Education() {
  return (
    <section id="education" className="education-section">
      <h2 className="education-title">Education</h2>

      <div className="education-container">
        <div className="edu-card reveal">
          <span className="edu-dot"></span>

          <h3>B.E. in Computer Science</h3>
          <h4>
            PCET's Nutan Maharashtra Institute of Engineering and Technology, Pune
          </h4>
          <p className="edu-duration">2021 – 2025</p>
          <span className="edu-board">Affiliated to SPPU University</span>
        </div>

        <div className="edu-card reveal">
          <span className="edu-dot"></span>

          <h3>Higher Secondary (HSC)</h3>
          <h4>Shriniwas Bagarka Junior College</h4>
          <p className="edu-duration">2019 – 2021</p>
          <span className="edu-board">Maharashtra State Board</span>
        </div>

        <div className="edu-card reveal">
          <span className="edu-dot"></span>

          <h3>Secondary School (SSC)</h3>
          <h4>Shree Gaurishankar Kedia English School</h4>
          <p className="edu-duration">2018 – 2019</p>
          <span className="edu-board">Maharashtra State Board</span>
        </div>
      </div>
    </section>
  );
}
