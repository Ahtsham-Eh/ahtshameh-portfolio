'use client';

import React from 'react';
import { motion } from "framer-motion";

const Projects = () => {
  const socials = [
    { id: "tiktok", link: "https://www.tiktok.com/@ahtsham_eh", icon: "https://cdn.lordicon.com/ktoyifaz.json", state: "hover-dots" },
    { id: "instagram", link: "https://www.instagram.com/ahtshameh", icon: "https://cdn.lordicon.com/lljlideu.json", state: "hover-rotate" },
    { id: "youtube", link: "https://www.youtube.com/@AhtshamEh", icon: "https://cdn.lordicon.com/rpswgzgb.json", state: "hover-rotate" },
  ];

  const defaultShadows = [
    "0 0 15px 3px rgba(0, 255, 255, 0.5)", // cyan for left
    "0 0 15px 3px rgba(128, 128, 128, 0.5)", // gray for middle
    "0 0 15px 3px rgba(255, 0, 0, 0.5)" // red for right
  ];

  return (
    <div className="relative w-full min-h-screen text-white flex flex-col justify-center items-center px-4 sm:px-6 lg:px-10">
      <div className="absolute inset-0 z-0 bg-linear-to-r from-gray-900 via-gray-800 to-red-800"></div>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-linear-to-r from-white to-red-500 bg-clip-text text-transparent text-center relative z-10">
        Visit My Socials For Projects
      </h1>

      <div className="mt-10 flex flex-wrap justify-center gap-8 relative z-10">
        {socials.map((social, index) => (
          <motion.button
            key={social.id}
            whileHover={{ scale: 1.15, y: -8 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            onClick={() => window.open(social.link, "_blank")}
            style={{ boxShadow: defaultShadows[index] }} // colored shadow
            className="group flex flex-col items-center justify-center w-28 h-28 bg-gray-900 border border-white rounded-xl cursor-pointer p-2 hover:shadow-lg hover:shadow-white/30"
          >
            <lord-icon
              src={social.icon}
              target=".group"
              trigger="hover"
              stroke="bold"
              state={social.state}
              colors="primary:#e4e4e4,secondary:#c71f16"
              style={{ width: "50px", height: "50px" }}
            />
            <span className="mt-2 text-sm text-white">{social.id.charAt(0).toUpperCase() + social.id.slice(1)}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Projects;
