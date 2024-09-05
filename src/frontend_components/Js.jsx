import React from 'react'
import { motion } from "framer-motion"
import js from "../assets/js.png";

import {JS_content} from "../constants"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

export default function Js() {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35 pt-10'>
            <div className='flex flex-wrap'>
                
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                    <motion.span 
                         variants={container(0.5)}
                         initial="hidden"
                         animate="visible"
                            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent text-4xl'
                        >
                            JavaScript
                        </motion.span>
                        <motion.p variants={container(0.5)}
                         initial="hidden"
                         animate="visible"
                         className='my-2 max-w-xl py-8 font-light tracking-wide text-xl'>
                            {JS_content}
                        </motion.p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 '>
                    <div className='flex justify-center'>
                        <motion.img 
                        initial = {{x:100,opacity :0}}
                        animate = {{x:0 , opacity:1}}
                        transition={{duration :1 ,delay :1}}
                        className='rounded-2xl'
                        src={js} alt="profile" />
                    </div>
                </div>
            </div>
        </div>
    );
}