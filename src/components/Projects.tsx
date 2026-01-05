import { projects } from "../data/projects";
import "../styles/projects.css";
import projectimg from "../assets/img/projectstext.png";

const Projects = () => {
  return (
    <section className="projects fade-in" id="PROJECTS">
       <div className="h2-container">
      <img src={projectimg} alt="Projects Title" className="project-title" loading="lazy" />
    </div>
      <ul className="project_photos list-unstyled d-flex flex-wrap gap-3">
        {projects.map((project, index) => (
          <li key={index} className="project_card">
            <img
              src={project.img}
              alt={project.title}
              className="img-fluid"
              loading="lazy"
            />
            <div className="project_text">
              <span className="project_title">
                <strong>{project.title}</strong>
              </span>
              <p
                dangerouslySetInnerHTML={{ __html: project.description }}
              ></p>
              <a
                href={project.link}
                className={`learn_more ${project.title
                  .toLowerCase()
                  .replace(/\s+/g, "_")}_link btn  btn-sm`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Now
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
