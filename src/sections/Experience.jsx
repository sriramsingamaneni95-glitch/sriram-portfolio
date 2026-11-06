
import './Experience.css';

const experiences = [
  {
    number: '01',
    role: 'AI ENGINEER',
    company: 'Abhyanth Solutions Pvt Ltd',
    period: 'JUNE 2025 — PRESENT',
    location: 'HYDERABAD, INDIA',
    description:
      'Collaborating with frontend developers, QA engineers and product managers to build, test and deploy AI-powered applications.',
    achievements: [
      'Built and optimized RAG pipelines.',
      'Integrated ChromaDB vector databases with LLMs.',
      'Contributed to AI application development and production support.',
      'Participated in Agile workflows and code reviews.'
    ]
  },
  {
    number: '02',
    role: 'AI DEVELOPMENT INTERN',
    company: 'Vodafone',
    period: 'MAY 2022 — JANUARY 2023',
    location: 'INDIA',
    description:
      'Worked on machine learning models and data-driven analytics to transform raw datasets into actionable insights.',
    achievements: [
      'Performed data preprocessing and visualization using Python.',
      'Developed statistical and predictive models.',
      'Applied hyperparameter tuning.',
      'Collaborated with cross-functional teams.'
    ]
  }
];

function Experience() {
  return (
    <section className="experience-section" id="experience">

      <div className="experience-heading">
        <span className="section-label">
          03 / PROFESSIONAL JOURNEY
        </span>

        <h2>
          EXPERIENCE
          <br />
          <span>& GROWTH.</span>
        </h2>

        <p>
          My professional journey in Artificial Intelligence
          and technology.
        </p>
      </div>

      <div className="experience-timeline">
        {experiences.map((item) => (
          <article className="experience-card" key={item.number}>

            <div className="experience-number">
              {item.number}
            </div>

            <div className="experience-info">

              <div className="experience-meta">
                <span>{item.period}</span>
                <span>{item.location}</span>
              </div>

              <h3>{item.role}</h3>
              <h4>{item.company}</h4>

              <p>{item.description}</p>

              <ul>
                {item.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>

            </div>
          </article>
        ))}
      </div>

    </section>
  );
}

export default Experience;
