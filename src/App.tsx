import { useEffect, useState } from "react"

// Components
import MouseFollower from "./components/MouseFollower"
import Navbar from "./components/Navbar"
import Preloader from "./components/Preloader"

// Sections
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Resume from "./sections/Resume"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

// Data
import Projects from "./sections/Projects"

function App() {
  const [isDark, setIsDark] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  return (
    <>
      {isLoading ? (
        <Preloader onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <MouseFollower />
          <Navbar
            isDark={isDark}
            onToggleTheme={() => setIsDark((prev) => !prev)}
          />

          <Hero />
          <About />
          <Skills />
          <Projects />
          <Resume />
          <Contact />
          <Footer />
        </>
      )}
    </>
  )
}

export default App
