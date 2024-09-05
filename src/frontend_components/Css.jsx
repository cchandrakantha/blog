import React from 'react'
import { motion } from "framer-motion"
import css from "../assets/css.png";

import {CSS_content} from "../constants"

const container = (delay) => ({
    hidden: { x: 100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

export default function Css() {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35 pt-10 '>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center flex-col'>
                        <motion.img 
                        initial = {{x:-100,opacity :0}}
                        animate = {{x:0 , opacity:1}}
                        transition={{duration :1 ,delay :1}}
                        className='rounded-2xl'
                        src={css} alt="profile" />
                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                    <motion.span 
                         variants={container(0.5)}
                         initial="hidden"
                         animate="visible"
                            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent text-4xl'
                        >
                           CSS
                        </motion.span>
                        <motion.p variants={container(0.5)}
                         initial="hidden"
                         animate="visible"
                         className='my-2 max-w-xl py-6 font-light tracking-wide text-xl'>
                            {CSS_content}
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    );
}