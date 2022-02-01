import React from 'react'
import { projects } from "../projectdata"

const Projects = () => {
    return(
        <section id="projects">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        W O R K
                        </h1>

                        <p>
                        From the projects I created while completing coursework and self-study, through to the side projects I work on now, I always strive to solve my own problems. The applications highlighted below were all important to me, which made the work, and more importantly the learning, all the more fulfilling.
                        </p>
                </div>

                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {projects.map((project) => (
            <div key={project} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                {/* <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" /> */}
                <span className="title-font font-medium text-white">
                  <p>{project.title}</p>
                  <p>{project.description}</p>
                  <p>{project.image}</p>
                  <p>{project.link}</p>               
                   </span>
              </div>
            </div>
          ))}
        </div>


            </div>
        </section>
    )
}

export default Projects