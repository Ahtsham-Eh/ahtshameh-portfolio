'use client'

import React from 'react'
import { motion } from "framer-motion";

const home = () => {
    return (
        <div className="w-full h-screen flex justify-evenly items-center text-white p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-teal-300 via-gray-700 to-gray-950 animate-gradientBlur blur-2xl opacity-70"></div>
            <style jsx>{`
    @keyframes gradientBlur {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    .animate-gradientBlur {
      background-size: 200% 200%;
      animation: gradientBlur 17s ease infinite;
    }
  `}</style>     
         <motion.div
                initial={{ filter: "drop-shadow(0 0 8px #ffffff)" }}
                animate={{
                    filter: [
                        "drop-shadow(0 0 10px #ffffff)",
                        "drop-shadow(0 0 34px #ffffff)",
                        "drop-shadow(0 0 12px #ffffff)",
                    ],
                }}
                transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                }}>
                <motion.h1 className='text-center text-9xl font-extrabold my-56 text-gray-800 '
                    animate={{
                        WebkitTextStroke: [
                            "1px #ff0000",
                            "1px #ffffff",
                            "1px #ff0000"
                        ],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                    }}>
                    <p className='text-4xl mr-100 pr-72 pb-1.5'>Greetings! I am</p>
                    AhtshamEh
                    <p className='text-4xl ml-100 pl-60 pt-2'>Welcome! to my Portfolio</p>
                </motion.h1>
            </motion.div>
        </div >
    )
}

export default home