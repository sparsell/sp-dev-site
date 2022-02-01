import React from 'react'

const Intro = () => {
    return (
        <section id="Intro">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">S O N J A  *  P A R S E L L</h1>
                    <div>
                        <h3 className="title-font sm:text-3xl text-3xl mb-3 font-small text-white">fullstack software engineer</h3>

                        <p>Flatiron School graduate of software engineering pursuing blockchain development, leveraging my financial services expertise. </p>
                    </div>
                    
                    <div>
                        <h3 className="title-font sm:text-3xl text-3xl mb-3 font-small text-white"> career changer </h3>
                        
                        <p>Over the course of almost 15 years at Wall Street firms, I've gained valuable experience as a relationship manager in Corporate Trust, Financial Risk Management and Audit, and as a Product Controller for Structured Notes and Prime Services. </p>
                        </div>
                        <button className="text-black bg-indigo-300 border-0 py-2 px-4 outline outline-2  outline-offset-2 ... hover:bg-indigo-600 rounded text-sm">Learn More</button>
                </div>
            </div>
        </section>
    )
}

export default Intro