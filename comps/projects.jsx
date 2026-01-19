'use client';

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("web");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = {
    web: [
      { img: "/1.png", name: "Neural Glass", desc: "HTML & CSS template with animations." },
      { img: "/8.png", name: "Aegispass", desc: "Password manager built with Vite + React." },
      { img: "/7.png", name: "SignUp Page", desc: "Auth UI with smooth animations." },
      { img: "/4.png", name: "Coffee Page", desc: "A business website." },
      { img: "/2.png", name: "CharityPage", desc: "Charity website for orginization." },
      { img: "/a.png", name: "Features", desc: "Fully responsive & Functional." },
    ],
    graphic: [
      { img: "/b.jpg", name: "Poster Design", desc: "Creative Branding Poster." },
      { img: "/z.jpg", name: "Social Media Design", desc: "Photoshop & Illustrator." },
      { img: "/gd2.png", name: "Graphic Design Certificate." },
    ],
    video: [
      { video: "v1.mp4", name: "Pro Edit", desc: "Short & long videos." },
      { video: "editor", name: "Pro Edit", desc: "Short & long videos." },
    ],
  };

  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden">

      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute inset-0 bg-linear-to-r from-teal-200 via-teal-300 to-teal-400 animate-gradientMotion blur-3xl transition-opacity duration-700 ${activeCategory === "web" ? "opacity-70" : "opacity-0"}`} />
        <div className={`absolute inset-0 bg-linear-to-r from-gray-600 via-gray-700 to-gray-800 animate-gradientMotion blur-3xl transition-opacity duration-700 ${activeCategory === "graphic" ? "opacity-70" : "opacity-0"}`} />
        <div className={`absolute inset-0 bg-linear-to-r from-red-800 via-red-950 to-black animate-gradientMotion blur-3xl transition-opacity duration-700 ${activeCategory === "video" ? "opacity-70" : "opacity-0"}`} />
      </div>

      <style jsx>{`
        @keyframes gradientMotion {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientMotion {
          background-size: 200% 200%;
          animation: gradientMotion 18s ease-in-out infinite;
        }
      `}</style>

      <div className={`relative z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 ${isMobile ? "pt-24 pb-24 overflow-y-auto max-h-screen" : "py-10"}`}>
        <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-linear-to-r from-white to-red-500 bg-clip-text text-transparent">
          PROJECTS
        </h1>
        <p className="text-center mt-2 text-sm sm:text-base font-semibold">
          Web • Graphic • Video — Creative Work
        </p>

        <div className="flex justify-center gap-3 sm:gap-4 mt-8 flex-wrap">
          {[
            { id: "web", label: "Web Dev" },
            { id: "graphic", label: "Graphic Design" },
            { id: "video", label: "Video Editing" },
          ].map(btn => (
            <button
              key={btn.id}
              onClick={() => setActiveCategory(btn.id)}
              className={`px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full border transition-all duration-300 cursor-pointer ${activeCategory === btn.id
                ? "bg-white text-black"
                : "border-white hover:bg-white hover:text-black"
                }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data[activeCategory].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className={`w-full border border-white rounded-xl overflow-hidden bg-gray-900 relative cursor-pointer
                ${isMobile ? "h-40" : "h-[220px]"} sm:h-[220px]`}
            >
              {activeCategory === "video" ? (
                <video
                  src={item.video}
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  onMouseEnter={e => !isMobile && e.currentTarget.play()}
                  onMouseLeave={e => {
                    if (!isMobile) {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }
                  }}
                />
              ) : (
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              )}

              <div className="absolute inset-0 bg-black/70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center px-4 cursor-pointer">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects;
