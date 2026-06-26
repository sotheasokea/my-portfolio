import './Projects.css'
import { ProjectsGrid } from './ProjectsGrid';

export function Projects(){
  return (
      <section className="projects-section" id="projects">
        <div className="projects-header">
          <h2 className="projects-title">Feature Projects</h2>
          <a href="www.example.com" className="view-all-projects-link"
            >View projects →</a
          >
        </div>

      <ProjectsGrid />
      </section>
  );
}
