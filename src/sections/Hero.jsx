
import './Hero.css';
import sriramPhoto from '../assets/Sriram.jpeg';

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">
        <div className="hero-status">
          <span className="status-dot"></span>
          AI ENGINEER / AGENTIC AI DEVELOPER
        </div>

        <h1>
          BUILDING
          <br />
          <span>INTELLIGENT</span>
          <br />
          FUTURES<span className="hero-period">.</span>
        </h1>

        <p className="hero-description">
          Hi, I'm Sriram Singamaneni. I build intelligent
          AI solutions and explore the future of Agentic AI,
          Machine Learning and automation.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="hero-primary">
            EXPLORE MY WORK ↗
          </a>

          <a href="#contact" className="hero-secondary">
            LET'S CONNECT
          </a>

          <a
            href="/Sriram-Singamaneni.pdf"
            download="Sriram-Singamaneni.pdf"
            className="hero-secondary"
          >
            DOWNLOAD RESUME ↓
          </a>
        </div>

        <div className="hero-bottom">
          <span>BASED IN INDIA</span>
          <span>AI · ML · AGENTIC AI</span>
        </div>
      </div>

      <div className="hero-visual photo-visual">
        <div className="photo-glow"></div>

        <div className="portrait-frame">
          <img
            src={sriramPhoto}
            alt="Sriram Singamaneni"
            className="hero-photo"
          />
        </div>

        <div className="photo-label">
          <span>01 / PROFILE</span>
          <strong>SRIRAM SINGAMANENI</strong>
        </div>
      </div>

    </section>
  );
}

export default Hero;
