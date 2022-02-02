import React from 'react'

const Navbar = () => {
    return (
        <header classNmae="bg-gray-800 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
        {/* <a className="title-font font-medium text-white mb-4 md:mb-0"> */}
          
        {/* </a> */}
        
        </nav>
        <a
          href="#about"
          className="ml-3 text-xl">
          About
        </a>
        <a
          href="#projects "
          className="ml-3 text-xl">
          Work
        </a>
        <a
          href="#contact"
          className="ml-3 text-xl">
          Contact
        </a>
      </div>
    </header>
    )
}

export default Navbar