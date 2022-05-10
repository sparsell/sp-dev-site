import React from 'react'

const About = () => {
    return (
        <section id="about" className="top-0">

                <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mt-8 mb-4 font-medium text-red-50">A B O U T</h1>
                    <div className="lg:max-w-lg ">
                        <img
                            className="object-center md:w-1/2"
                            alt="Sonja Parsell"
                            src="../headshot.jpg"
                            />
                        <h1 className="text-lg tracking-wide mt-7">Me Before Code...</h1>
                            <p className="text-blue-800">After 15+ years at various Wall Street banks, I handed in my spreadsheets for the chance to stay at home with my two children. In my last role, I'd made a strategic move from Finance to Technology and after a very short time, I finally knew what I wanted to be when I grew up.</p>
                                
                        <h1 className="text-lg tracking-wide mt-7">And After...</h1>
                            <p className="text-blue-800">Now I'm passionate about blockchain technology and web3, and finding ways to add value by combining my financial services expertise with my newly minted software engineering skills. </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About