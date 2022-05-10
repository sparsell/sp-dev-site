import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './styles/output.css'


import './App.css';

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar sticky="top"/>
      <Intro />
      <Projects />
      <About />
      <Contact />

    </main>
  );
}

