import { Hero } from './sections/Hero'
import { AboutMe } from './sections/AboutMe';
import { Projects } from './sections/Projects';
import './App.css'

function App() {
  return (
    <div className='Container'>
      <Hero />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App
