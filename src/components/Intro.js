import React from 'react'

const Intro = () => {
    return (
        <section id="Intro">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-6xl text-5xl mb-10 font-medium text-red-50">SONJA PARSELL</h1>

                    <div>
                        <h3 className="title-font sm:text-3xl text-3xl mb-1 mt-5 font-small c underline underline-offset-4 text-blue-800">
                            fullstack software engineer</h3>
                            <h2 className="title-font font-semibold text-red-500 tracking-widest text-md mt-4">JavaScript | React | Redux | Ruby | Rails</h2>

                            <p className="text-blue-800">I'm a Flatiron School graduate of software engineering with experience building full stack applications in modern programming lanuages and frameworks including . I continually look for ways to sharpen my skills and add new ones.  </p>
                    </div>    

                    <div>
                        <h3 className="title-font sm:text-3xl text-3xl mb-1 mt-5 font-small text-blue-800 underline underline-offset-4"> 
                        bent on blockchain </h3>
                            <p className="text-blue-800">I'm captivated by what blockchain technology could do for areas of our lives that can surely stand for more equity and transparency.  I want to be a part of designing and building techonolgy that works for everyone. I'm currently playing around with Daml and Solidity.</p>

                        <h3 className="title-font sm:text-3xl text-3xl mb-1 mt-5 font-small text-blue-800 underline underline-offset-4"> 
                        career changer </h3>
                            <p className="text-blue-800" >Prior to software engineering, I spent over fifteen years in investment banking operations, technology and finance teams. I've managed clients and projects, built global teams, and collaborated across functions and asset classes. I've developed procedures and policies and rolled them all out globally. I’m highly resourceful, love a well-run and well-documented process, and relentlessly pursue efficiency. </p>

                        <h3 className="title-font sm:text-3xl text-3xl mb-1 mt-5 font-small text-blue-800 underline underline-offset-4"> 
                        human </h3>
                        
                            <p className="text-blue-800">Happily married, mom to two kids, two dogs and two cats. I'm a volunteer Salesforce administrator for the Leukimia and Lymphoma Society and in any spare time will rescue any piece of fabric that can be made into a <a class="text-blue-600 visited:text-purple-600" target="_blank" href="https://www.charliepops.com" class="text-red-500 visited:text-red-500 ..." >patchwork quilt.</a></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro