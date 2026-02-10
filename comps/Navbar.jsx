'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { useActiveSection } from "@/app/context/ActiveSectionContext"

const ResponsiveNavbar = () => {
  const { active, setActive } = useActiveSection()
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { id: "home", label: "Home", icon: "https://cdn.lordicon.com/rpvomrgr.json", state: "hover-partial-roll" },
    { id: "about", label: "About", icon: "https://cdn.lordicon.com/vrexohmd.json", state: "in-reveal" },
    { id: "projects", label: "Projects", icon: "https://cdn.lordicon.com/zcpmxjfa.json", state: "morph-code" },
  ]

  const socials = [
    { id: "linkedin", link: "https://www.linkedin.com/in/muhammad-ehtsham-b71546387/", icon: "https://cdn.lordicon.com/rqdhcgcm.json", state: "hover-draw" },
    { id: "fiverr", link: "https://www.fiverr.com/users/ahtsham_eh", icon: "https://cdn.lordicon.com/jxcoxfau.json", state: "in" },
    { id: "tiktok", link: "https://www.tiktok.com/@ahtsham_eh", icon: "https://cdn.lordicon.com/ktoyifaz.json", state: "hover-dots" },
    { id: "instagram", link: "https://www.instagram.com/ahtshameh", icon: "https://cdn.lordicon.com/lljlideu.json", state: "hover-rotate" },
    { id: "youtube", link: "https://www.youtube.com/@AhtshamEh", icon: "https://cdn.lordicon.com/rpswgzgb.json", state: "hover-rotate" },
  ]

  useEffect(() => {
    const checkLordIcon = setInterval(() => {
      if (window.Lordicon) clearInterval(checkLordIcon)
    }, 300)
    return () => clearInterval(checkLordIcon)
  }, [])

  return (
    <>
      <motion.nav className="hidden sm:flex w-full h-16 bg-gray-800 items-center justify-between px-6 lg:px-10 fixed top-0 z-50">
        <motion.h1
          className="font-extrabold text-3xl relative inline-block cursor-pointer text-white"
          initial={{ filter: "drop-shadow(0 0 8px #ffffff)" }}
          animate={{ filter: ["drop-shadow(0 0 10px #ffffff)", "drop-shadow(0 0 18px #ffffff)", "drop-shadow(0 0 12px #ffffff)"] }}
          transition={{ duration: 2.7, repeat: Infinity, ease: "easeInOut" }}
        >          <motion.span
            className="bg-linear-to-r from-white to-red-500 inline-block bg-clip-text text-transparent"
            animate={{ letterSpacing: ["0px", "1px", "0px"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            AhtshamEh
          </motion.span>
        </motion.h1>

        <ul className="flex gap-8 text-white">
          {navItems.map(({ id, label, icon, state }) => (
            <button
              key={id}
              onClick={() => {
                setActive(id)
                const el = document.getElementById(id)
                if (el) el.scrollIntoView({ behavior: "smooth" })
              }}
              className="relative flex items-center group cursor-pointer"
            >
              <lord-icon
                src={icon}
                target=".group"
                trigger="hover"
                stroke="bold"
                state={state}
                colors="primary:#e4e4e4,secondary:#c71f16"
                style={{ width: "30px", height: "30px" }}
              />
              <span className="ml-1">{label}</span>
              {active === id && (
                <motion.div
                  className="absolute left-0 -bottom-0.5 h-0.5 rounded-full"
                  style={{
                    width: "100%",
                    background: "linear-gradient(90deg, #d1d1d1 0%, #ffffff 40%, #ff3b2f 100%)",
                    boxShadow: "0 0 8px rgba(199,31,22,0.45)",
                    transformOrigin: "left center",
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: [0.65, 1.05, 0.65], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2.3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                />
              )}
            </button>
          ))}
        </ul>
      </motion.nav>

      <motion.div
        initial={{ x: -120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", staggerChildren: 0.5 }}
        className="hidden sm:flex w-16 h-fit bg-gray-800 text-white p-3 mx-0.5 rounded-br-lg rounded-tr-lg border border-t-red-600 border-b-red-600 border-l-transparent flex-col gap-2 fixed top-1/2 -translate-y-1/2 left-1"
      >
        {socials.map(({ id, link, icon, state }, index) => (
          <motion.button
            key={id}
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
            className="cursor-pointer"
            onClick={() => window.open(link, "_blank")}
          >
            <lord-icon
              src={icon}
              trigger="hover"
              stroke="bold"
              state={state}
              colors="primary:#e4e4e4,secondary:#c71f16"
              style={{ width: "40px", height: "40px" }}
            />
          </motion.button>
        ))}
      </motion.div>

      <MobileMenu
        navItems={navItems}
        socials={socials}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        setActive={setActive}
      />
    </>
  )
}

const MobileMenu = ({ navItems, socials, menuOpen, setMenuOpen, setActive }) => {
  return (
    <div className="sm:hidden fixed top-0 left-0 w-full z-50 flex flex-col items-center gap-2">
      <div className="w-full flex justify-between items-center px-4 h-20 bg-gray-800 shadow-lg">
        <motion.h1
          className="font-bold text-xl text-white cursor-pointer"
          initial={{ filter: "drop-shadow(0 0 6px #ffffff)" }}
          animate={{ filter: ["drop-shadow(0 0 10px #ffffff)", "drop-shadow(0 0 18px #ffffff)", "drop-shadow(0 0 12px #ffffff)"] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        >
          <motion.span
            className="bg-linear-to-r from-white to-red-500 bg-clip-text text-transparent"
            animate={{ letterSpacing: ["0px", "1px", "0px"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            AhtshamEh
          </motion.span>
        </motion.h1>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-gray-800 text-white px-4 py-2 rounded-full font-bold shadow-lg cursor-pointer"
        >
          Menu
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-11/12 bg-gray-900 rounded-xl shadow-lg flex flex-col items-center gap-4 p-4 mt-2"
          >
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                className="text-white font-semibold w-full text-center py-2 hover:bg-gray-700 rounded-lg cursor-pointer"
                onClick={() => {
                  const el = document.getElementById(id)
                  if (el) el.scrollIntoView({ behavior: "smooth" })
                  setMenuOpen(false)
                  setActive(id)
                }}
              >
                {label}
              </button>
            ))}

            <div className="flex justify-center gap-4 mt-2">
              {socials.map(({ id, link, icon, state }) => (
                <button
                  key={id}
                  className="cursor-pointer"
                  onClick={() => window.open(link, "_blank")}
                >
                  <lord-icon
                    src={icon}
                    trigger="hover"
                    stroke="bold"
                    state={state}
                    colors="primary:#e4e4e4,secondary:#c71f16"
                    style={{ width: "40px", height: "40px" }}
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ResponsiveNavbar
