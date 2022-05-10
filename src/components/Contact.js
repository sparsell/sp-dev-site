import React from 'react'
import SonjaParsellResume from '../assets/SonjaParsellResume.pdf'

const Contact = () => {
    return (
        <section id="contact" className="h-screen">
            <div className="ui divider"></div>
            <div className="container mx-auto flex px-10 py-20 mb-25 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 mt-8 font-medium text-RED-50">C O N T A C T</h1>
                    
                    <div className="lg:w-1/2 px-6 lg:mt-0 mb-100 mt-8">
                        <h2 className="title-font font-semibold text-blue-800 tracking-widest text-md mt-4">
                         EMAIL</h2>
                            <p className="text-blue-800 leading-relaxed">
                                <a href="mailto:hello@sparsell.com">
                            hello@sparsell.com</a></p>

                        <h2 className="title-font font-semibold text-blue-800 tracking-widest text-md mt-8">
                            SOCIAL </h2>
                            <p className="text-blue-800 leading-relaxed"><a href="https://www.linkedin.com/in/sonja-parsell/" target="_blank" rel="noreferrer">
                                LinkedIn</a></p>
                            <p className="text-blue-800 leading-relaxed"><a href="https://twitter.com/s_parsell" target="_blank" rel="noreferrer">
                                Twitter</a></p>
                            <p className="text-blue-800 leading-relaxed"><a href="https://github.com/sparsell" target="_blank" rel="noreferrer">
                                GitHub</a></p>

                        <h2 className="title-font font-semibold text-blue-800 tracking-widest text-md mt-8 mb-2">
                            CV </h2> 
                         <a className="text-red-400 text-xs " href={SonjaParsellResume} target="_blank" rel="noreferrer">
                                <button class="rounded p-1 bg-red-500 text-white" label="Resume">
                                    Download 
                                </button></a>        
                    </div>
                </div>
            </div>    
        </section>
    )
}


export default Contact