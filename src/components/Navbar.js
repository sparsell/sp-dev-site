import React from 'react'

const Navbar = () => {
    return (
      <section id="navbar">
        <header className="md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center"></nav>
                <a
                href="#projects"
                className="ml-3 bg-red-100 text-md text-blue-800 pl-1 pr-1">
                WORK
                </a>

                <a
                href="#about"
                className="ml-3 bg-red-100 text-md text-blue-800 pl-1 pr-1">
                ABOUT
                </a>

                <a
                href="#contact"
                className="ml-3 bg-red-100 text-md text-blue-800 pl-1 pr-1">
                CONTACT
                </a>
              
            </div>
        </header>
    </section>
    )
}

export default Navbar