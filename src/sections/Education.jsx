
import './Education.css';

const education = [
  {
    year: '2020 — 2025',
    degree: 'B.Tech',
    field: 'Computer Science & Engineering',
    institution: 'SRM University AP, Amaravati',
    score: 'CGPA 7.3 / 10'
  },
  {
    year: '2018 — 2020',
    degree: 'Intermediate',
    field: 'Higher Secondary Education',
    institution: 'Narayana Junior College, Ongole',
    score: 'CGPA 8.28 / 10'
  },
  {
    year: 'School Education',
    degree: 'Secondary School',
    field: 'Secondary School Education',
    institution: 'Montessori High School, Ongole',
    score: 'CGPA 10 / 10'
  }
];

const certifications = [
  { name: 'Artificial Intelligence', year: '2023' },
  { name: 'Machine Learning', year: '2023' },
  { name: 'Deep Learning', year: '2024' },
  { name: 'SQL', year: '2021' },
  { name: 'Python', year: '2021' }
];

function Education() {
  return (
    <section className="education-section" id="education">

      <div className="education-heading">
        <span className="section-label">
          05 / EDUCATION & RECOGNITION
        </span>

        <h2>
          LEARNING
          <br />
          <span>NEVER STOPS.</span>
        </h2>
      </div>

      <div className="education-layout">

        <div className="education-column">
          <h3 className="education-subtitle">
            EDUCATION
          </h3>

          {education.map((item, index) => (
            <div className="education-card" key={item.degree}>
              <span className="education-year">{item.year}</span>

              <h4>{item.degree}</h4>
              <p>{item.field}</p>

              <div className="education-institution">
                {item.institution}
              </div>

              <span className="education-score">{item.score}</span>
            </div>
          ))}
        </div>

        <div className="certification-column">
          <h3 className="education-subtitle">
            CERTIFICATIONS
          </h3>

          {certifications.map((cert, index) => (
            <div className="certification-card" key={cert.name}>
              <div className="cert-number">
                0{index + 1}
              </div>

              <div>
                <h4>{cert.name}</h4>
                <p>HackerRank · {cert.year}</p>
              </div>

              <span className="cert-arrow">↗</span>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}

export default Education;
