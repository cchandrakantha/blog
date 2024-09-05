import React from 'react';
import { motion } from "framer-motion";
import backend from "../assets/backend.jpg";
import { backend_content } from "../constants";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

export default function Backend_content() {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35 pt-10'>
            {/* <h1 whileInView={{opacity :1,y:0}}
            initial = {{opacity :0,y:-100}}
            transition={{duration : 1.5}}
            className='my-20 text-center text-4xl'>Backend
            </h1> */}
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent text-5xl'
                        >
                            Backend ?
                        </motion.span>
                        <motion.p
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className='my-2 max-w-xl py-6 font-light tracking-wide text-xl'
                        >
                            {backend_content}
                        </motion.p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center'>
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            className='rounded-2xl'
                            src={backend} alt="profile"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
