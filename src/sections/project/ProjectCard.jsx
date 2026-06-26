import websiteIcon from "../../assets/images/website-icon.png";
import externalIcon from "../../assets/images/box-arrow-up-right-icon.png";
import { projects } from "./projectsData";
export function ProjectCard() {
  return (
    <>
      {projects.map((project) => {
        const tech = project.technologies;
        function outputTech(){
          tech.forEach((t)=>{
            return (
              <span className="tech-badge">{t}</span>
            );
          })
        }
        return (
          <>
            <article className="project-card">
              <div className="project-image-container">
                <img
                  src={project.projectImage}
                  alt="Project image"
                  className="project-image"
                />
              </div>

              <h3 className="project-title">{project.projectName}</h3>

              <p className="project-description">{project.description}</p>

              <div className="project-technologies">{outputTech()}</div>

              <div className="project-links">
                <a
                  href={project.projectLink}
                  className="project-link live-demo-link"
                  target="_blank"
                >
                  <img src={websiteIcon} alt="Live demo" /> Live Demo
                </a>
                <a 
                  href={project.githubLink} 
                  className="project-link github-link"
                  target="_blank"  
                >
                  <img src={externalIcon} alt="External" /> GitHub
                </a>
              </div>
            </article>
          </>
        );
      })}
    </>
  );
}
