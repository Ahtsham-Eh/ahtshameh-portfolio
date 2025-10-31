"use client";

import { motion } from "framer-motion";
import { useActiveSection } from "@/app/context/ActiveSectionContext";

const Navbar = () => {
    const { active, setActive } = useActiveSection();

    const navItems = [
        {
            id: "home", label: "Home", icon: "https://cdn.lordicon.com/rpvomrgr.json", state: "hover-partial-roll",
        },
        {
            id: "about", label: "About", icon: "https://cdn.lordicon.com/vrexohmd.json", state: "in-reveal",
        },
        {
            id: "projects", label: "Projects", icon: "https://cdn.lordicon.com/eeolefdw.json", state: "morph-code",
        },
    ];

    return (
        <motion.nav className="w-full h-16 bg-gray-800 flex items-center justify-between p-6">
            <motion.h1
                className="font-extrabold text-3xl relative inline-block cursor-pointer"
                initial={{ filter: "drop-shadow(0 0 8px #ffffff)" }}
                animate={{
                    filter: [
                        "drop-shadow(0 0 10px #ffffff)",
                        "drop-shadow(0 0 18px #ffffff)",
                        "drop-shadow(0 0 12px #ffffff)",
                    ],
                }}
                transition={{ duration: 2.7, repeat: Infinity, ease: "easeInOut" }}
            >
                <motion.span
                    className="text-gray-300 inline-block"
                    initial={{ x: 0 }}
                    animate={{ x: [0, -5, 0] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    &lt;
                </motion.span>
                <motion.span
                    className="bg-linear-to-r from-white to-red-500 inline-block bg-clip-text text-transparent"
                    initial={{ letterSpacing: "0px" }}
                    animate={{ letterSpacing: ["0px", "1px", "0px"] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    AhtshamEh
                </motion.span>
                <motion.span
                    className="text-red-500 inline-block"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: [0, 5, 0] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    /</motion.span>
                <motion.span
                    className="text-red-500 inline-block"
                    initial={{ x: 0 }}
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    &gt;
                </motion.span>
            </motion.h1>
            <ul className="text-white flex gap-8 cursor-pointer">
                {navItems.map(({ id, label, icon, state }) => (
                    <button
                        key={id}
                        onClick={() => setActive(id)}
                        className="relative flex items-center group transition-all group cursor-pointer"
                        aria-pressed={active === id}
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
                                className="absolute left-0 -bottom-0.5 h-0.5 rounded-full .group"
                                style={{
                                    width: "100%",
                                    background:
                                        "linear-gradient(90deg, #d1d1d1 0%, #ffffff 40%, #ff3b2f 100%)",
                                    boxShadow: "0 0 8px rgba(199,31,22,0.45)",
                                    transformOrigin: "left center",
                                }}
                                initial={{ scaleX: 0 }}
                                animate={{
                                    scaleX: [0.65, 1.05, 0.65],
                                    opacity: [0.8, 1, 0.8],
                                }}
                                transition={{

                                    duration: 2.3,
                                    repeat: Infinity,
                                    repeatType: "mirror",
                                    ease: "easeInOut",
                                }}
                            />
                        )}
                    </button>
                ))}
            </ul>
        </motion.nav>
    );
};

export default Navbar;
