import React from 'react'

const About = () => {
    return (
        <section id="about">
            
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
           
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-red-50">A B O U T</h1>
                        <img
                            className="object-center min w-sm h-sm"
                            alt="Sonja Parsell"
                            src="../headshot.jpg"/>
                    <h1 className="font-semibold text-lg tracking-widest mt-7">ME BEFORE CODE...</h1>
                        <p className="text-blue-800">After 15+ years at various Wall Street banks, I handed inmy spreadsheets for the chance to stay at home with my two children. In my last role,I'd made a strategic move from Finance to Technology and after a very short time, I felt like I'd been missing out on my true calling.</p>
                            
                    <h1 className="font-semibold text-lg tracking-widest mt-7">AND AFTER...</h1>
                        <p className="text-blue-800">Now I'm passionate about blockchain technology and finding ways to add value by combining my financial services expertise with my newly minted software engineering skills. </p>
                </div>
            </div>
        </section>
    )
}

export default About