import React from 'react'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'

import Intro from './components/Intro'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css';

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

// library.add(fab, faCheckSquare)