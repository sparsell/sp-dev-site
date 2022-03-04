import React from 'react'
import { projects } from "../projectdata"



const Projects = () => {
    return(
      <section id="projects">

        {/* <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-RED-50">C O N T A C T</h1> */}

        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow  lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-RED-50">
               W O R K
            </h1>
              <div>
                <p className="text-blue-800">
                I always strive to solve my own problems when it comes to building something to help me learn a new language or framework.<p/>
                <p className="text-blue-800 pt-3">The applications showcased here were all important to me, which made the challenge all the more fulfilling.</p>
                </p>
              </div>
          

          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {projects.map((project) => (
              <div  className="p-2  w-full"key={project.id}>
                <div className="bg-red-100 rounded flex p-4 h-full items-center">
                  <span className="title-font font-medium text-white">
                    <p className="text-blue-800 font-semibold tracking-widest underline underline-offset-4 text-center">{project.title}</p>
                    <p className="text-blue-800 p-2 m-1">{project.tagline}</p>
                    <p className="text-blue-800 p-2 m-1">{project.description}</p>
                    <p className="text-blue-800">{project.image}</p>
                    <div className="flex flex-wrap">
                      <p className="text-blue-800 visited:text-red-400"><a target="_blank" alt="link to project website" href={project.link}><button className="rounded bg-red-500 pr-2 pl-2 m-1 w-14 text-white">Demo</button></a></p>      

                      <p className="text-blue-800 visited:text-red-400"><a target="_blank" alt="Github repo link" href={project.github}><button className="rounded bg-red-500 pr-2 pl-2 m-1 w-14 text-white">Repo</button></a></p> 
                    </div>
                    )        
                  </span>
                </div>
              </div>
              ))}
          </div>
          </div>
        </div>
      </section>
    )
}

export default Projects