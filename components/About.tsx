import React from 'react'

function About() {
  return (
    <section
     id="about"
     className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20'
     style={{transform:"scale(0.9)"}}
    >
    <h1 className='heading mb-20'>
       <span className='text-purple'>About</span> me
     </h1>
     <div className='flex flex-row justify-around flex-wrap mt-4 gap-10 items-center'>
     <p className="text-[25px] md:text-1.25xl lg:text-2.75xl font-medium text-justify">
     I am Abhishek Varshney, a web developer specializing in <span className='text-purple'>Full-Stack Development, Blockchain, and Web3 DApps</span>. With a robust foundation in <span className='text-purple'>Data Structures and Algorithms</span>, demonstrated by solving over 400 LeetCode problems, I excel in creating efficient, scalable solutions. Currently, I am advancing my expertise through a MERN Stack web development internship at Zidio Development. My passion for technology and commitment to continuous learning drive me to deliver innovative and impactful digital experiences.
     </p>
     </div>
    </section> 
  )
}

export default About