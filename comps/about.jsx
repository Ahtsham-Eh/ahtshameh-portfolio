'use client';

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const [activeBox, setActiveBox] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const boxes = [
    {
      id: 1,
      title: "Introduction",
      icon: "https://cdn.lordicon.com/rzsnbiaw.json",
      info: "I’m AhtshamEh, a passionate and creative video editor specializing in short-form and long-form content. With a keen eye for detail and a flair for storytelling, I bring visuals to life, turning ideas into engaging cinematic experiences."
    },
    {
      id: 2,
      title: "Skills",
      icon: "https://cdn.lordicon.com/vrexohmd.json",
      info: "As a dedicated video editor, I blend creativity with technical expertise to craft visually compelling stories. My work spans multiple genres including social media content, promotional videos, and cinematic edits. I’m committed to delivering high-quality edits that resonate with audiences and elevate the brand or project."
    },
    {
      id: 3,
      title: "Experience",
      icon: "https://cdn.lordicon.com/twpfmtiv.json",
      info: "Edited videos with cinematic cuts, smooth transitions, color grading, and engaging storytelling for social media. Delivered polished edits meeting client vision and deadlines. Produced engaging YouTube & TikTok content with strong storytelling and motion graphics."
    },
  ];

  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden">

      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-r from-gray-800 via-gray-950 to-gray-800 animate-gradientani blur-2xl opacity-70"></div>
      </div>

      <style jsx>{`
        @keyframes gradientani {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientani {
          background-size: 200% 200%;
          animation: gradientani 17s ease infinite;
        }
      `}</style>

      <div className="relative z-10 px-4 sm:px-6 lg:px-10 overflow-y-auto max-h-screen pt-24 pb-24 flex flex-col items-center gap-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-linear-to-r from-gray-300 to-red-700 bg-clip-text text-transparent">
          ABOUT ME
        </h1>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 w-full items-center justify-center">
          {boxes.map((box) => {
            const isActive = activeBox === box.id;

            return (
              <motion.div
                key={box.id}
                onClick={() => setActiveBox(isActive ? null : box.id)}
                layout
                whileHover={{ scale: 1.05, y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
                animate={{
                  width: "100%",
                  maxWidth: isActive ? 620 : 330,
                  height: isActive
                    ? isMobile
                      ? 280
                      : 330
                    : isMobile
                      ? 160
                      : 300,
                  zIndex: isActive ? 50 : 5,
                  boxShadow: isActive
                    ? box.id === 1
                      ? "0 0 20px 4px rgba(0, 255, 255, 0.3)"
                      : box.id === 2
                      ? "0 0 20px 4px rgba(128, 128, 128, 0.3)"
                      : "0 0 20px 4px rgba(255, 0, 0, 0.3)"
                    : box.id === 1
                      ? "0 0 8px 2px rgba(0, 255, 255, 0.2)"
                      : box.id === 2
                      ? "0 0 8px 2px rgba(128, 128, 128, 0.2)"
                      : "0 0 8px 2px rgba(255, 0, 0, 0.2)",
                }}
                className="group border border-white rounded-xl bg-black/30 flex flex-col lg:flex-row items-center justify-center overflow-hidden relative cursor-pointer backdrop-blur-sm w-full sm:w-[90%] p-4"
              >
                <motion.div
                  animate={{
                    x: isMobile && isActive ? "-40%" : "0%",
                    y: isMobile && isActive ? "-30%" : "0%",
                    scale: isActive ? 0.95 : 1,
                    alignItems: isMobile && isActive ? "flex-start" : "center",
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex flex-col items-center justify-center w-full lg:w-1/2 space-y-4"
                >
                  <h1 className="p-2 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] text-xl sm:text-2xl">
                    {box.title}
                  </h1>
                  <lord-icon
                    src={box.icon}
                    target=".group"
                    trigger="hover"
                    style={{ width: "80px", height: "80px" }}
                    colors="primary:#e4e4e4,secondary:#c71f16"
                    className="group-hover"
                  ></lord-icon>
                </motion.div>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      key="info"
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 40 }}
                      transition={{ duration: 0.45, ease: "easeInOut" }}
                      className="absolute lg:relative right-0 top-0 h-full flex items-center justify-center lg:w-1/2 w-full text-gray-300 text-left"
                    >
                      <p className="text-sm sm:text-base leading-relaxed">
                        {box.info}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
