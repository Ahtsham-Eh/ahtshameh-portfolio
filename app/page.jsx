"use client";

import { useActiveSection } from "@/app/context/ActiveSectionContext";
import Navbar from "@/comps/Navbar";
import Home from "@/comps/home";
import About from "@/comps/about";
import Projects from "@/comps/projects";
import { motion, AnimatePresence } from "framer-motion";

export default function Page() {
  const { active } = useActiveSection();

  const variants = {
    initial: { opacity: 0, y: 40, scale: 0.97 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -40, scale: 0.97 },
  };

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-black via-zinc-900 to-gray-800 text-white relative overflow-hidden">
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <div className="pt-24 flex justify-center items-center h-screen">
        <AnimatePresence mode="wait">
          {active === "home" && (
            <motion.div
              key="home"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute w-full"
            >
              <Home />
            </motion.div>
          )}

          {active === "about" && (
            <motion.div
              key="about"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute w-full"
            >
              <About />
            </motion.div>
          )}

          {active === "projects" && (
            <motion.div
              key="projects"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute w-full"
            >
              <Projects />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}