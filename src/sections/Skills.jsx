
import './Skills.css';

const skillGroups = [
  {
    number: '01',
    title: 'PROGRAMMING',
    skills: ['Python', 'SQL', 'MySQL', 'MongoDB', 'C', 'C++']
  },
  {
    number: '02',
    title: 'AI & MACHINE LEARNING',
    skills: ['RAG Pipelines', 'LLM Integration', 'Predictive Modeling', 'Regression', 'Classification', 'Feature Engineering']
  },
  {
    number: '03',
    title: 'TOOLS & LIBRARIES',
    skills: ['Pandas', 'NumPy', 'TensorFlow', 'OpenCV', 'ChromaDB', 'Jupyter Notebook']
  },
  {
    number: '04',
    title: 'DEVELOPMENT TOOLS',
    skills: ['Git', 'GitHub', 'Excel', 'Vector Databases']
  }
];

function Skills() {
  return (
    <section className="skills-section" id="skills">

      <div className="skills-heading">
        <span className="section-label">
          04 / TECHNICAL EXPERTISE
        </span>

        <h2>
          SKILLS &
          <br />
          <span>TECHNOLOGIES.</span>
        </h2>

        <p>
          Technologies and tools I use to build
          intelligent, data-driven solutions.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.number}>

            <div className="skill-card-top">
              <span>{group.number}</span>
              <span>EXPERTISE</span>
            </div>

            <h3>{group.title}</h3>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Skills;
