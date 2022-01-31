import React from 'react'

const Intro = () => {
    return (
        <section id="Intro">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Sonja Parsell</h1>
                        <h3 className="title-font sm:text-3xl text-3xl mb-3 font-small text-white">I'm a fullstack software engineer.</h3>

                        <p>I spent almost 15 years at Wall Stret firms working as a relationship manager in Corporate Trust, Financial Risk Management and Audit, and as a Product Controller for Structured Notes and Prime Services. </p>

                        <h3 className="title-font sm:text-2xl text-3xl mb-3 font-small text-indigo"> I'm also a career changer. </h3>
                        <div>
                        
                        <p>I've now finished a software engineering bootcamp and have become a fullstack software engineer, ready to make the move into blockchain development, leveraging my financial services expertise. </p>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Intro