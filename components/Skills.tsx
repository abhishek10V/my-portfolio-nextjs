import { Backend_skill, Frontend_skill, Programming_Languages } from '@/data'
import React from 'react'
import SkillDataProvider from './ui/SkillDataProvider'

function Skills() {
  return (
    <section
     id="skills"
     className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20'
     style={{transform:"scale(0.9)"}}
    >
     <div className='flex flex-row justify-around flex-wrap mt-4 gap-10 items-center'>
        {Frontend_skill.map((image , index) => (
            <SkillDataProvider 
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
        ))}
     </div>
     <div className='flex flex-row justify-around flex-wrap mt-4 gap-10 items-center'>
        {Backend_skill.map((image , index) => (
            <SkillDataProvider 
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
        ))}
     </div>
   
     <div className='flex flex-row justify-around flex-wrap mt-4 gap-10 items-center '>
        {Programming_Languages.map((image , index) => (
            <SkillDataProvider 
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
        ))}
     
     </div>
    </section>
  )
}

export default Skills