import React from 'react'
// import { projects } from "../projectdata"

const ProjectCard = () => {
    return(

    
        <div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {projects.map((project) => (
              <div  className="p-2  w-full"key={project.id}>
                <div className="bg-red-100 rounded flex p-4 items-center">
                  <span className="title-font font-medium text-white">
                    <p className="text-blue-800 font-semibold tracking-widest underline underline-offset-4 text-center">{project.title}</p>
                    <p className="text-blue-800 p-2 m-1 text-center">{project.tagline}</p>
                    <p className="text-blue-800 p-2 m-1">{project.description}</p>
                    <p className="text-blue-800">{project.image}</p>
                        <div className="flex flex-wrap">
                        <p className="text-blue-800 visited:text-red-400"><a target="_blank" alt="link to project website" href={project.link}><button className="rounded bg-red-500 pr-2 pl-2 m-1 w-14 text-white items-center">Demo</button></a></p>      

                        <p className="text-blue-800 visited:text-red-400"><a target="_blank" alt="Github repo link" href={project.github}><button className="rounded bg-red-500 pr-2 pl-2 m-1 w-14 text-white">Repo</button></a></p> 
                      </div>
                    )        
                  </span>
                </div>
              </div>
              ))}
            </div>
        </div>
    )
}
export default ProjectCard