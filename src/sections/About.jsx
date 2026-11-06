
import './About.css';

function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-heading">
        <span className="section-label">01 / ABOUT ME</span>
        <h2>
          ENGINEERING
          <br />
          <span>INTELLIGENCE.</span>
        </h2>
      </div>

      <div className="about-content">

        <div className="about-intro">
          <span className="about-small-label">
            WHO I AM
          </span>

          <p>
            I'm <strong>Sriram Singamaneni</strong>,
            an AI Engineer specializing in RAG pipelines,
            LLM integration and intelligent applications.
          </p>

          <p>
            My work involves building and optimizing
            Retrieval-Augmented Generation systems,
            integrating vector databases with Large
            Language Models, and developing AI-powered
            applications.
          </p>

          <p>
            With experience in Python, SQL, Machine Learning
            and statistical modeling, I enjoy transforming
            complex data and AI technologies into practical
            solutions.
          </p>
        </div>

        <div className="about-details">

          <div className="about-detail">
            <span>01 / CURRENT ROLE</span>
            <h3>AI Engineer</h3>
            <p>Abhyanth Solutions Pvt Ltd</p>
            <small>June 2025 – Present · Hyderabad</small>
          </div>

          <div className="about-detail">
            <span>02 / PREVIOUS EXPERIENCE</span>
            <h3>AI Development Intern</h3>
            <p>Vodafone</p>
            <small>May 2022 – January 2023</small>
          </div>

          <div className="about-detail">
            <span>03 / EDUCATION</span>
            <h3>B.Tech – Computer Science</h3>
            <p>SRM University AP, Amaravati</p>
            <small>2020 – 2025 · CGPA 7.3 / 10</small>
          </div>

        </div>
      </div>

      <div className="about-footer">
        <span>AI ENGINEERING</span>
        <span>RAG & LLM SYSTEMS</span>
        <span>DATA-DRIVEN INNOVATION</span>
      </div>

    </section>
  );
}

export default About;
