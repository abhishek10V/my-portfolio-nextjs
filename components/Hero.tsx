import React from 'react'
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
       <Spotlight className='-top-40 -left-10 md:-top-20 md:-left-32 h-screen' fill='white'/>
       <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='white'/>
       <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='white'/>
      </div>

      {/* <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.3] bg-grid-black/[0.2] relative flex items-center justify-center"> */}
      {/* Radial gradient for the container to give a faded look */}
      {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" /> */}

      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
           <TextGenerateEffect className="text-center text-[50px] md:text-5xl lg:text-7xl" words="ABHISHEK VARSHNEY" />
           <TextGenerateEffect className="text-center text-[30px] md:text-2xl lg:text-4xl font-medium" words="I am a Web Developer" />
           <a href='#about'>
            <MagicButton title='My Resume' icon={<FaLocationArrow/>} position='left' />
           </a>
        </div>

      </div>

      {/* </div> */}
      
    </div>
  )
}

export default Hero