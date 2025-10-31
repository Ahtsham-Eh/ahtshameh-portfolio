"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const [activeBox, setActiveBox] = useState(null);

  const boxes = [
    {
      id: 1,
      title: "Introduction",
      icon: "https://cdn.lordicon.com/rzsnbiaw.json",
      info: "Hi! I'm a passionate developer focused on creating engaging user experiences through clean and efficient code.",
    },
    {
      id: 2,
      title: "Skills",
      icon: "https://cdn.lordicon.com/vrexohmd.json",
      info: "Full Stack Developer passionate about crafting sleek, high-speed web experiences.Skilled in React, Next.js, and Node.js with a love for clean UI and smooth performance.I turn ideas into interactive, scalable, and visually engaging web apps.",
    },
    {
      id: 3,
      title: "Experience",
      icon: "https://cdn.lordicon.com/twpfmtiv.json",
      info: "I’ve worked on diverse projects combining design and functionality through React and Next.js.From dynamic UIs to smooth APIs, I focus on performance and user experience.Each project reflects my commitment to quality, scalability, and modern web standards.",
    },
  ];

  return (
    <div className="w-full h-screen text-white p-10 relative overflow-hidden">
      {/* Fixed: Use animate-gradientani and proper gradient syntax */}
      <div className="absolute inset-0 bg-linear-to-r from-teal-300 via-gray-700 to-gray-950 animate-gradientani blur-2xl opacity-70"></div>

      <style jsx>{`
        @keyframes gradientani {
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
        .animate-gradientani {
          background-size: 200% 200%;
          animation: gradientani 17s ease infinite;
        }
      `}</style>

      <div className="w-full text-center h-16 bg-clip-text bg-linear-to-r from-gray-300 to-red-700 p-5">
        <h1 className="text-5xl font-extrabold">
          ABOUT ME
        </h1>
      </div>

      <div className="flex gap-10 items-center justify-center relative z-10 my-24">
        {boxes.map((box) => {
          const isActive = activeBox === box.id;
          return (
            <motion.div
              key={box.id}
              onClick={() => setActiveBox(isActive ? null : box.id)}
              layout
              animate={{
                width: isActive ? 620 : 330,
                height: isActive ? 330 : 300,
                zIndex: isActive ? 50 : 5,
                scale: isActive ? 1.05 : 1,
                boxShadow: isActive
                  ? "0 0 40px 10px rgba(255,255,255,0.3), 0 0 80px 20px rgba(199,31,22,0.6)"
                  : "0 0 10px 1px rgba(255,255,255,0.15)",
              }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="border border-white rounded-xl text-xl font-extrabold bg-black/30 flex items-center justify-center overflow-hidden relative cursor-pointer backdrop-blur-sm"
            >
              <motion.div
                animate={{
                  x: isActive ? "-50%" : "0%",
                  scale: isActive ? 0.95 : 1,
                }}
                transition={{ duration: 0.40, ease: "easeInOut" }}
                className="flex flex-col items-center justify-center w-1/2 space-y-4"
              >
                <h1 className="p-2 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] text-2xl">
                  {box.title}
                </h1>
                <lord-icon
                  src={box.icon}
                  trigger="hover"
                  stroke="bold"
                  colors="primary:#e4e4e4,secondary:#c71f16"
                  style={{ width: "100px", height: "100px" }}
                ></lord-icon>
              </motion.div>

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    key="info"
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 60 }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    className="absolute right-0 top-0 h-full flex items-center justify-center w-1/2 pr-5 text-gray-300 text-left"
                  >
                    <p className="text-sm leading-relaxed">{box.info}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default About;