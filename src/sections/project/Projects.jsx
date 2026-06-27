import { useState } from 'react';
import './Projects.css'
import { ProjectsGrid } from './ProjectsGrid';
import { projects } from './projectsData';

export function Projects(){
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
      <section className="projects-section" id="projects">
        <div className="projects-header">
          <h2 className="projects-title">Feature Projects</h2>
          <button
            type="button"
            className="view-all-projects-link"
            onClick={() => setShowAll((current) => !current)}
          >
            {showAll ? 'Show less →' : 'View all projects →'}
          </button>
        </div>

      <ProjectsGrid projects={visibleProjects} />
      </section>
  );
}
