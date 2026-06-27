import { Header } from './components/Header'
import { Hero } from './sections/Hero'
import { AboutMe } from './sections/about/AboutMe'
import { Projects } from './sections/project/Projects'
import { Education } from './sections/education/Education'
import { Certificate } from './sections/certificate/Certificate'
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
