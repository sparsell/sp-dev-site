import React from 'react'
import { projects } from "../projectdata"

const Projects = () => {
    return(
      <section id="projects">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="md:flex-grow md:w-1/2 lg:pr-24 md:pr-10 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-red-50">
               W O R K
            </h1>

                <p className="text-blue-800">
                I always strive to solve my own problems when it comes to what projects to build to help me learn something new. The applications showcased here were all important to me, which made the work, and more importantly the learning, fulfilling.
                </p>
          </div>

          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {projects.map((project) => (
              <div key={project} className="p-2 sm:w-1/2 w-full">
                <div className="bg-red-100 rounded flex p-4 h-full items-center">
                  <span className="title-font font-medium text-white">
                    <p className="text-blue-800 font-medium">{project.title}</p>
                    <p className="text-blue-800">{project.description}</p>
                    <p className="text-blue-800">{project.image}</p>
                    <p className="text-blue-800">{project.link}</p>               
                    <p className="text-blue-800"><a target="_blank" alt="Github repo link" href="{project.github}">GITHUB</a></p>               
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