import React from 'react'

const Navbar = () => {
    return (
      <section id="navbar">
        <nav class="p-2 mt-0 fixed w-full z-10 top-0 bg-white">
          <div class="container mx-auto flex flex-wrap items-center">
            <div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
                {/* <a class="text-white no-underline hover:text-white hover:no-underline" href="#">
                    <span class="text-2xl pl-2"><i class="em em-grinning"></i> Home</span>
                </a> */}
            </div>
            <div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
                  <li class="mr-3">
                  <a class="inline-block text-blue-800 no-underline hover:text-red-400 hover:text-underline py-2 px-4" href="#">HOME</a>
                  </li>
                  <li class="mr-3">
                    <a class="inline-block text-blue-800 no-underline hover:text-red-400 hover:text-underline py-2 px-4" href="#projects">WORK</a>
                  </li>
                  <li class="mr-3">
                    <a class="inline-block text-blue-800 no-underline hover:text-red-400 hover:text-underline py-2 px-4" href="#about">ABOUT</a>
                  </li>
                    <li class="mr-3">
                    <a class="inline-block text-blue-800 no-underline hover:text-red-400 hover:text-underline py-2 px-4" href="#contact">CONTACT</a>
                  </li>
                </ul>
            </div>
        </div>
    </nav>
        {/* <header className="md:sticky top-0 z-10">
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
        </header> */}

    </section>
    )
}

export default Navbar