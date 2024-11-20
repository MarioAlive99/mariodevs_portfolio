import About from "./components/About"
import Contact from "./components/Contact"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"


function App() {

  return (
    <>
      <div className=" min-h-screen flex items-center justify-center w-full antialiased">
        <main className=" min-h-screen flex flex-col space-y-10 max-w-3xl py-10 px-5 sm:py-20 sm:px-10">
          <Header />
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Contact />
          <Navbar />
          <Footer />
        </main>
      </div>
    </>
  )
}

export default App
