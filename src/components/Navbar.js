import React from 'react'
import '../App.css'

const Navbar = () => {
    return (
      <section id="navbar">
        <nav className="p-2 mt-0 fixed w-full z-10 top-0 bg-white">
          <div className="container mx-auto flex flex-wrap items-center ">

            <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white">
            </div>
            
            <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                  <li className="mr-1">
                  <a className="inline-block text-blue-800 no-underline hover:text-red-400 hover:text-underline py-2 px-4" href="#intro">HOME</a>
                  </li>
                  <li className="mr-1">
                    <a className="inline-block text-blue-800 no-underline hover:text-red-400 hover:text-underline py-2 px-4" href="#projects">WORK</a>
                  </li>
                  <li className="mr-1">
                    <a className="inline-block text-blue-800 no-underline hover:text-red-400 hover:text-underline py-2 px-4" href="#about">ABOUT</a>
                  </li>
                    <li className="mr-1">
                    <a className="inline-block text-blue-800 no-underline hover:text-red-400 hover:text-underline py-2 px-4" href="#contact">CONTACT</a>
                  </li>
                </ul>
            </div>
          </div>
        </nav>
      </section>
    )
}

export default Navbar