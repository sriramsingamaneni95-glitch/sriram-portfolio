
import './Projects.css';

const projects = [
  {
    number: '01',
    category: 'MACHINE LEARNING',
    title: 'Human Activity Recognition',
    description:
      'Predictive classification models using smartphone sensor datasets, Pandas and NumPy.',
    technologies: 'Python · Pandas · NumPy · ML'
  },
  {
    number: '02',
    category: 'DEEP LEARNING',
    title: 'Object Detection',
    description:
      'CNN-based predictive model using TensorFlow and OpenCV for real-time object detection.',
    technologies: 'Python · TensorFlow · OpenCV · CNN'
  },
  {
    number: '03',
    category: 'AGENTIC AI',
    title: 'Agentic AI Resume Extractor',
    description:
      'An agentic AI workflow for resume information extraction, featuring tool calling, conditional routing, state management, reflection and verification.',
    technologies: 'Python · LLMs · Agentic AI · Tool Calling',
    github:
      'https://github.com/sriramsingamaneni95-glitch/agentic-ai-resume-extractor'
  }
];

function Projects() {
  return (
    <section className="projects-section" id="projects">

      <span className="section-label">02 / SELECTED WORK</span>

      <h2>
        MY SELECTED
        <br />
        <span>PROJECTS.</span>
      </h2>

      <div className="projects-grid">

        {projects.map((project) => (
          <article className="project-card" key={project.number}>

            <span>
              {project.number} / {project.category}
            </span>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <small>{project.technologies}</small>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                VIEW ON GITHUB <span>↗</span>
              </a>
            )}

          </article>
        ))}

      </div>

    </section>
  );
}

export default Projects;
