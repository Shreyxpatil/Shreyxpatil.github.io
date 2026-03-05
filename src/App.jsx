import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Extras from './components/Extras'
import Contact from './components/Contact'
import './components/Extras.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="divider" />
        <About />
        <div className="divider" />
        <Skills />
        <div className="divider" />
        <Experience />
        <div className="divider" />
        <Projects />
        <div className="divider" />
        <Certifications />
        <div className="divider" />
        <Extras />
        <div className="divider" />
        <Contact />
      </main>
    </>
  )
}

export default App
