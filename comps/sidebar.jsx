'use client'

import React, { useEffect } from 'react'
import { motion } from "framer-motion";

const Sidebar = () => {

    const socials = {
        linkedin: "https://www.linkedin.com/in/muhammad-ehtsham-b71546387/",
        fiverr: "https://www.fiverr.com/users/ahtsham_eh",
        github: "https://github.com/Ahtsham-Eh",
        instagram: "https://www.instagram.com/ahtshameh",
    };

    useEffect(() => {
        // wait until lordicon script is available
        const checkLordIcon = setInterval(() => {
            if (window.Lordicon) {
                clearInterval(checkLordIcon);
                console.log("✅ Lordicon ready in Sidebar");
            }
        }, 300);
        return () => clearInterval(checkLordIcon);
    }, []);

    return (
        <motion.div
            className='w-16 h-fit bg-gray-800 text-white p-3 mx-0.5 rounded-br-lg rounded-tr-lg border border-t-red-600 border-b-red-600 border-l-transparent'
            initial={{ x: [0, 5, 0], opacity: [0, 1, 0] }}
            animate={{ x: [0, -5, 0], opacity: [1] }}
        >
            <button className='cursor-pointer' onClick={() => window.open(socials.linkedin, "_blank")}>
                <lord-icon
                    src="https://cdn.lordicon.com/rqdhcgcm.json"
                    trigger="hover"
                    stroke="bold"
                    state="hover-draw"
                    colors="primary:#e4e4e4,secondary:#c71f16"
                    style={{ width: "40px", height: "40px" }}>
                </lord-icon>
            </button>

            <button className='cursor-pointer' onClick={() => window.open(socials.fiverr, "_blank")}>
                <lord-icon
                    src="https://cdn.lordicon.com/jxcoxfau.json"
                    trigger="morph"
                    stroke="bold"
                    state="morph-alone"
                    colors="primary:#e4e4e4,secondary:#c71f16"
                    style={{ width: "40px", height: "40px" }}>
                </lord-icon>
            </button>

            <button className='cursor-pointer' onClick={() => window.open(socials.github, "_blank")}>
                <lord-icon
                    src="https://cdn.lordicon.com/acgiczyg.json"
                    trigger="hover"
                    stroke="bold"
                    colors="primary:#e4e4e4,secondary:#c71f16"
                    style={{ width: "40px", height: "40px" }}>
                </lord-icon>
            </button>
            <button className='cursor-pointer' onClick={() => window.open(socials.instagram, "_blank")}>
                <lord-icon
                    src="https://cdn.lordicon.com/lljlideu.json"
                    trigger="hover"
                    stroke="bold"
                    state="hover-rotate"
                    colors="primary:#e4e4e4,secondary:#c71f16"
                    style={{ width: "40px", height: "40px" }}>
                </lord-icon>
            </button>
        </motion.div>
    );
};

export default Sidebar;
