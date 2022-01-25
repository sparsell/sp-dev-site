import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Now from './components/Now'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css';

export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Now />
      <Projects />
      <Contact />
    </main>
  );
}

