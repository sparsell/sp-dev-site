import React from 'react'

const Navbar = () => {
    return (
      <section id="navbar">
        <header classNmae="bg-stone-400 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center md:sticky top-0 z-10">
              <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center md:sticky top-0 z-10"></nav>
                <a
                href="#about"
                className="ml-3 text-xl">
                ABOUT
                </a>

                <a
                href="#projects "
                className="ml-3 text-xl">
                WORK
                </a>

                <a
                href="#contact"
                className="ml-3 text-xl">
                CONTACT
                </a>
              
            </div>
        </header>
    </section>
    )
}

export default Navbar