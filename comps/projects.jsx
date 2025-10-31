'use client'

import React from 'react'
import { motion } from "framer-motion";

const projects = () => {
  const projectData = [
    { img: "/1.png", name: "Nueral Glass", desc: "A template of fine Html and CSS with unique animations." },
    { img: "/8.png", name: "Aegispass", desc: "A Password manager built with VITE+REACT. Saves your password securely.f " },
    { img: "/7.png", name: "SignUp-Page", desc: "A Login SignUp page using Html,CSS and JS with best animation and styles." },
    { img: "/4.png", name: "koppee", desc: "An Elegant Design with Html and CSS. Designed for Coffee and shows a unique landing page." },
    { img: "/6.png", name: "Eduma", desc: "A landing page with CSS at work. Nice UI!" },
    { img: "/2.png", name: "Charitize", desc: "Charitize is a template or landing page for donation for children. Using Html and CSS." },
    { img: "/3.png", name: "Envato", desc: "A market place or you can it a Ecommerce platform." },
    { img: "/5.png", name: "Landing Page", desc: "A landing page for which i don't know 😅. But is a great design." },
  ];

  return (
    <div className="w-full h-screen text-white p-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-r from-teal-300 via-gray-700 to-red-950 animate-gradientBlur blur-2xl opacity-70"></div>
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

      <motion.div>
        <motion.div className='pb-15 text-center text-5xl bg-linear-to-r from-white to-red-500 bg-clip-text text-transparent font-extrabold'>
          PROJECTS
        </motion.div>
        <p className='text-white font-extrabold text-center'>EXPLORE MY GITHUB IN SIDEBAR FOR THE CODE AND MORE...</p>
        <div className='flex flex-wrap justify-evenly items-center gap-y-6 pt-8'>
          {projectData.map((project, i) => (
            <div
              key={i}
              className='relative border border-white rounded-md w-80 h-55 bg-gray-800 z-50 overflow-hidden group'
            >
              <div className='w-full h-full'>
                <img src={project.img} alt={project.name} className="w-full h-full object-cover" />
              </div>

              {/* Hover overlay */}
              <div className='absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-500'>
                <h2 className='text-xl font-bold text-white mb-2'>{project.name}</h2>
                <p className='text-sm text-gray-300 px-3 text-center'>{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default projects
