
import './About.css';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <span className="section-label">01 / ABOUT ME</span>

        <h2 className="about-title">
          ENGINEERING
          <br />
          <span>INTELLIGENCE.</span>
        </h2>

        <div className="about-grid">

          <div className="about-intro">
            <h3>WHO I AM</h3>

            <p>
              I'm <strong>Sriram Singamaneni</strong>, an AI Engineer
              focused on building intelligent applications using
              Python, Retrieval-Augmented Generation (RAG),
              Large Language Models (LLMs), and vector databases.
            </p>

            <p>
              My work involves developing RAG pipelines, integrating
              ChromaDB with LLMs, and building AI-powered applications
              that transform complex problems into practical solutions.
            </p>

            <p>
              I also have experience in Machine Learning, data
              preprocessing, statistical analysis, and predictive
              modeling. I'm passionate about developing reliable
              AI systems and exploring Agentic AI workflows.
            </p>
          </div>

          <div className="about-details">

            <div className="about-detail">
              <span>01 / CURRENT ROLE</span>
              <h3>AI Engineer</h3>
              <p>Abhyanth Solutions Pvt Ltd</p>
              <p>June 2025 – Present · Hyderabad</p>
              <p>
                Working on RAG pipelines, ChromaDB integration,
                LLM-powered applications, code reviews, and
                production support.
              </p>
            </div>

            <div className="about-detail">
              <span>02 / PREVIOUS EXPERIENCE</span>
              <h3>AI Development Intern</h3>
              <p>Vodafone</p>
              <p>May 2022 – January 2023</p>
              <p>
                Worked on Python-based data analysis,
                preprocessing, machine learning models,
                and predictive modeling.
              </p>
            </div>

            <div className="about-detail">
              <span>03 / EDUCATION</span>
              <h3>B.Tech – Computer Science</h3>
              <p>SRM University AP, Amaravati</p>
              <p>2020 – 2025 · CGPA 7.3/10</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
