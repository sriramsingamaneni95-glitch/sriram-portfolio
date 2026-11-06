
import './Contact.css';

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="contact-container">

        <p className="section-tag">HAVE A PROJECT IN MIND?</p>

        <h2 className="contact-title">
          LET'S BUILD
          <br />
          <span>SOMETHING GREAT.</span>
        </h2>

        <p className="contact-description">
          I'm open to AI Engineering opportunities, collaborations,
          and exciting projects. Let's connect.
        </p>

        <a
          href="mailto:sriramsingamaneni95@gmail.com"
          className="contact-button"
        >
          SEND ME AN EMAIL ↗
        </a>

        <div className="contact-details">

          <div className="contact-item">
            <span>EMAIL</span>
            <a href="mailto:sriramsingamaneni95@gmail.com">
              sriramsingamaneni95@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <span>PHONE</span>
            <a href="tel:+919550880088">
              +91 95508 80088
            </a>
          </div>

        </div>

        <div className="contact-socials">
          <a
            href="https://github.com/sriramsingamaneni95-glitch"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB ↗
          </a>

          <a
            href="https://www.linkedin.com/in/sriramsingamaneni/"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN ↗
          </a>
        </div>

      </div>

      <footer className="portfolio-footer">
        <p>© 2026 Sriram Singamaneni. All rights reserved.</p>
        <p>DESIGNED & DEVELOPED WITH PASSION.</p>
      </footer>
    </section>
  );
}

export default Contact;
