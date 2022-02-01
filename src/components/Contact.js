import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
    return (
        <section id="contact">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">C O N T A C T</h1>

                    <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                        <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                         EMAIL
                        </h2>
            
                            <p className="text-indigo-400 leading-relaxed">
                            <FontAwesomeIcon icon="check-square" /> <a href="mailto:hello@sparsell.com">hello@sparsell.com</a>
                        </p>
                        <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                         PHONE
                        </h2>
                        <FontAwesomeIcon icon="fa-solid fa-phone" />
                        
                            <p className="text-indigo-400 leading-relaxed"><FontAwesomeIcon icon="check-square" />(203) 321-9889</p>

                        <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                             SOCIAL
                        </h2>
                            {/* <p className="text-indigo-400 leading-relaxed"></p> */}
                             <p ><FontAwesomeIcon icon="check-square" /> [linkedin]</p>
                             <p><FontAwesomeIcon icon="check-square" /> [twitter]</p>
                             <p><FontAwesomeIcon icon="check-square" /> [github]</p>
                             <p><FontAwesomeIcon icon="check-square" /> [dev.to]</p>

                         <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                         CV
                        </h2> 
{/* 
                        <form>
                            <div className="relative mb-4">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                                     Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                 />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                                Email
                                </label>
                                <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <div className="relative mb-4">
                                <label
                                 htmlFor="message"
                                className="leading-7 text-sm text-gray-400">
                                Message
                                </label>
                                <textarea
                                id="message"
                                name="message"
                                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2                   focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6                 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <button
                                type="submit"
                                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                Submit
                            </button>
                        </form> */}
                    </div>

                </div>
            </div>    
        </section>
    )
}


export default Contact