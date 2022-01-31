import React from 'react'
// import Project from './Project'
import { projectdata } from '../projectdata.js'

const Projects = () => {
    return(
        <section id="projects">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Projects</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        From the time I spent learning to code, through to the side projects I work on now, I always strive to solve my own problems. The applications highlighted below were all important to me, which made the work, and more importantly the learning, all the more fulfilling.</p>
                </div>
            </div>
        </section>
    )
}

export default Projects