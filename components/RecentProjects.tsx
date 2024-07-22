import { projects } from '@/data'
import { PinContainer } from './ui/3d-pin'
import { color } from 'framer-motion'

function RecentProjects() {
  return (
    <div className='py-20' id='projects'>
     <h1 className='heading'>
      Here's what <span className='text-purple'>Projects</span> I build recently
     </h1>
     <div className='flex flex-wrap items-center justify-center p-4 mt-10 gap-x-24 gap-y-8'>
       {projects.map(({id , title , des, img, iconLists, link}) => (
         <div key={id} className='sm-h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>

            <PinContainer title={link} href={link}>
              <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
                <div className='h-full w-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                    <img src='/bg.png' alt='bg-image'/>
                </div>
                <img
                 src={img}
                 alt={title}
                 className='z-5 absolute bottom-0'
                 />
              </div>

              <h1 className='font-bold text-purple lg:text-2xl md:text-xl text-base line-clamp-1'>
                {title}
              </h1>

              <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                {des}
              </p>
              
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                </div>
            </PinContainer>
         </div>
       ))}
     </div>
    </div>
  )
} 

export default RecentProjects