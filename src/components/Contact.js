import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Resume from './Resume'

const Contact = () => {
    return (
        <section id="contact">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">C O N T A C T</h1>

                    <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                        <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                         EMAIL</h2>
                            <p className="text-indigo-400 leading-relaxed">
                                <a href="mailto:hello@sparsell.com">
                            hello@sparsell.com</a></p>
                        <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                         PHONE</h2>
                            <p className="text-indigo-400 leading-relaxed">
                            (203) 321-9889</p>

                        <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                         SOCIAL</h2>
                            <p className="text-indigo-400 leading-relaxed"><a href="https://www.linkedin.com/in/sonja-parsell/" target="_blank">
                                LinkedIn</a></p>
                            <p className="text-indigo-400 leading-relaxed"><a href="https://twitter.com/s_parsell" target="_blank">
                                Twitter</a></p>
                            <p className="text-indigo-400 leading-relaxed"><a href="https://github.com/sparsell" target="_blank">
                                GitHub</a></p>

                         <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                         CV</h2> 
                         <Resume />         
                        
                    </div>

                </div>
            </div>    
        </section>
    )
}


export default Contact