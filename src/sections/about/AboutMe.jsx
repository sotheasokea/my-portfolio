import './AboutMe.css'
import { AboutItem } from './AboutItem';

export function AboutMe() {

  return (
    <section className="about-section" id="about">
      <div className="about-header">
        <h2 className="about-title">About Me</h2>
      </div>

      <div className="about-grid">
        <AboutItem />
      </div>

    </section>
  );
}