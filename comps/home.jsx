'use client'

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";

const Home = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div className="w-full min-h-screen sm:min-h-screen flex flex-col justify-center items-center text-white p-10 relative overflow-auto">
      
      <motion.div className="absolute inset-0 bg-linear-to-r from-teal-300 via-gray-700 to-gray-950 animate-gradientBlur blur-2xl opacity-70"></motion.div>
      
      <style jsx>{`
        @keyframes gradientBlur {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientBlur {
          background-size: 200% 200%;
          animation: gradientBlur 17s ease infinite;
        }
      `}</style>

      {mounted && (
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
          }}
        >
          <motion.h1
            className="
              text-center font-extrabold text-5xl sm:text-7xl lg:text-9xl text-gray-800 relative
              [--stroke:0.25px] sm:[--stroke:1px]
            "
            animate={{
              WebkitTextStroke: [
                "var(--stroke) #ff0000",
                "var(--stroke) #ffffff",
                "var(--stroke) #ff0000",
              ],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          >
            <p className='w-full text-left text-2xl sm:text-4xl mb-2'>
              Greetings! I am
            </p>
            AhtshamEh
            <p className='w-full text-right text-2xl sm:text-4xl mt-2'>
              Welcome! to my Portfolio
            </p>
          </motion.h1>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Home;
