import { Hero } from './sections/Hero'
import { AboutMe } from './sections/AboutMe';
import { Projects } from './sections/Projects';
import { Education } from './sections/Education';
import './App.css'

function App() {
  return (
    <div className='Container'>
      <Hero />
      <AboutMe />
      <Projects />
      <Education />
    </div>
  );
}

export default App
