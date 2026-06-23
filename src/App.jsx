import { Header } from './components/Header'
import { Hero } from './sections/Hero'
import { AboutMe } from './sections/AboutMe'
import { Projects } from './sections/Projects'
import { Education } from './sections/Education'
import { Certificate } from './sections/Certificate'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Hero />
        <AboutMe />
        <Projects />
        <Education />
        <Certificate />
      </div>
    </>
  )
}

export default App
