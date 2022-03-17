import React from 'react'
import '../App.css'

const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => { 
  menu.classList.toggle("hidden");
});

const Navbar = () => {
    return (
      <section id="navbar">
        <nav className="p-2 mt-0 fixed w-full z-10 top-0 bg-white">
          <div className="container mx-auto flex flex-wrap items-center ">

            <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white">
            </div>
            
            <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                  <li className="mr-3">
                  <a className="inline-block text-blue-800 no-underline hover:text-red-400 hover:text-underline py-2 px-4" href="#intro">HOME</a>
                  </li>
                  <li className="mr-3">
                    <a className="inline-block text-blue-800 no-underline hover:text-red-400 hover:text-underline py-2 px-4" href="#projects">WORK</a>
                  </li>
                  <li className="mr-3">
                    <a className="inline-block text-blue-800 no-underline hover:text-red-400 hover:text-underline py-2 px-4" href="#about">ABOUT</a>
                  </li>
                    <li className="mr-3">
                    <a className="inline-block text-blue-800 no-underline hover:text-red-400 hover:text-underline py-2 px-4" href="#contact">CONTACT</a>
                  </li>
                </ul>
            </div>

            <div className="md:hidden flex items-center">
	<button className="outline-none mobile-menu-button">
		<svg
			className="w-6 h-6 text-gray-500"
			x-show="!showMenu"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
		<path d="M4 6h16M4 12h16M4 18h16"></path>
		</svg>
	</button>
</div>
          </div>
        </nav>
      </section>
    )
}

export default Navbar