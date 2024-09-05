import React from 'react'
import { framework } from '../constants'
import { motion } from 'framer-motion'


export default function Frameworks() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration : 0.5}}
      className='my-20 text-center text-4xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent text-4xl'>Frameworks and Libraries</motion.h1>
      <div>
        {framework.map((project,index)=>(
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div 
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:1}}
                className='w-full lg:w-1/4'>
                <img 
                src={project.image} 
                width={200}
                height={200}
                alt ={project.title} 
                className='mb-6 rounded hover:scale-110 hover:shadow-md transition-transform duration-300'/>
                </motion.div>
                <motion.div 
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:100}}
                transition={{duration:1}}
                className="w-full max-w-xl lg:w-3/4">
                <h6 className='mb-2 font-light text-2xl'>{project.title}</h6>
                <p className='mb-4 text-neutral-400 '>{project.description}</p>
                
                </motion.div>
            </div>
        )) }
        
      </div>
    </div>
  )
}
