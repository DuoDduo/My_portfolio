// import { useState } from 'react'
import './App.css'
import Navbar from "../src/Components/Navbar"
import Home from "../src/Components/Home"
import About from  "../src/Components/About"
import TechStack from "../src/Components/Techstack"
import Skills from "../src/Components/Skills"
import Contact from  "../src/Components/Contact"
import Footer from "../src/Components/Footer"
import Projects from "../src/Components/Projects"


function App() {


  return (
    <>

      <Navbar />
      <Home />
      <About />
      <Skills />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
