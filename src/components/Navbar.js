import React from 'react'

const Navbar = () => {
    return (
      <section id="navbar">
        <nav class="p-2 mt-0 fixed w-full z-10 top-0 bg-white">
          <div class="container mx-auto flex flex-wrap items-center">
            <div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
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
      </section>
    )
}

export default Navbar