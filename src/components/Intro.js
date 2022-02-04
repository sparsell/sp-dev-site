import React from 'react'
import { skills } from '../skills.js'

const Intro = () => {
    return (
        <section id="Intro">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center bg-stone-100">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-red-50"><span>SONJA</span> PARSELL</h1>

                    <div>
                        <h3 className="title-font sm:text-3xl text-3xl mb-1 mt-5 font-small text-white">
                            fullstack software engineer</h3>

                            <p>I'm a Flatiron School graduate of software engineering with experience in building full stack applications in modern programming lanuages and frameworks. I continually look for ways to sharpen my skills and add new ones. </p>
                    </div>    

                    <div>
                        <h3 className="title-font sm:text-3xl text-3xl mb-1 mt-5 font-small text-white"> 
                        bent on blockchain </h3>
                            <p>I'm captivated at what blockchain technology could do for areas of our lives that can surely stand for more equity and transparency.  I'm betting on blockchain and would love to be a part of making techonolgy that works for everyone. </p>

                        <h3 className="title-font sm:text-3xl text-3xl mb-1 mt-5 font-small text-white"> 
                        career changer </h3>
                            <p>Prior to software engineering, I had a 15+ year career in financial services which gave me extensive experience in client and project management, team building and global collaboration across all financial asset classes. I’m highly resourceful, love a well-run and well-documented process, and relentlessly pursue efficiency. </p>
                            

                        <h3 className="title-font sm:text-3xl text-3xl mb-1 mt-5 font-small text-white"> 
                        human </h3>
                        
                            <p>Happily married, mom to two kids, two dogs and two cats. I/m a volunteer Salesforce administrator for the Leukimia and Lymphoma Society and in any spare time will rescue just about any piece of fabric that can be made into a <a class="text-blue-600 visited:text-purple-600" target="_blank" href="https://www.charliepops.com" class="text-blue-600 visited:text-purple-600 ..." >patchwork quilt.</a></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro