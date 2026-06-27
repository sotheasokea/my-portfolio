import { ProjectCard } from './ProjectCard';
import './ProjectsGrid.css'

export function ProjectsGrid({ projects }){
  return (
  <div className="projects-grid">
    <ProjectCard projects={projects} />
  </div>
  );
}