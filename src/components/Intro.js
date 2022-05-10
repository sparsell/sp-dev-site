import React from 'react'

const Intro = () => {
    return (
        <section id="intro">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow  md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="text-4xl mt-8 mb-4 pb-2 pt-4 text-red-50">SONJA PARSELL</h1>

                    <div>
                        <h3 className="title-font sm:text-2xl text-2xl mb-1 mt-5 font-small c underline underline-offset-4 text-blue-800">
                            fullstack software engineer</h3>
                            <p className="text-blue-800">I'm a software engineer with experience building full stack applications in modern programming lanuages and frameworks including <span className="text-red-500">React, JavaScript and Rails</span>. I continually look for ways to sharpen my skills and add new ones.  </p>
                    </div>    

                    <div>
                        <h3 className="title-font sm:text-2xl text-2xl mb-1 mt-5 font-small text-blue-800 underline underline-offset-4"> 
                        bent on blockchain </h3>
                            <p className="text-blue-800">I'm captivated by what blockchain technology could do for areas of our lives that can surely stand for more equity and transparency.  I want to be a part of designing and building techonolgy that works for everyone. <span className="text-red-500">I'm currently building things with Solidity</span>.</p>

                        <h3 className="title-font sm:text-2xl text-2xl mb-1 mt-5 font-small text-blue-800 underline underline-offset-4"> 
                        career changer </h3>
                            <p className="text-blue-800" >Prior to software engineering, I spent <span className="text-red-500">over fifteen years in investment banking operations, technology and finance </span>teams. I've managed clients and projects, built global teams, and collaborated across functions and asset classes. I've developed procedures and policies and rolled them out globally. I’m highly resourceful, love a well-run and well-documented process, and relentlessly pursue efficiency. </p>

                        <h3 className="title-font sm:text-2xl text-2xl mb-1 mt-5 font-small text-blue-800 underline underline-offset-4"> 
                        human </h3>
                        
                            <p className="text-blue-800">Happily married, mom to two kids, two dogs and two cats. I'm a <span className="text-red-500">volunteer Salesforce administrator</span> for the Leukimia and Lymphoma Society and in any spare time will rescue any piece of fabric that can be made into a <a class="text-blue-500 visited:text-red-500" target="_blank" rel="noreferrer" href="https://www.charliepops.com" >patchwork quilt</a>. I donate them to my favorite charities.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro