"use client";

import { createContext, useContext, useState } from "react";

const ActiveSectionContext = createContext();

export const ActiveSectionProvider = ({ children }) => {
    const [active, setActive] = useState("home");
    return (
        <ActiveSectionContext.Provider value={{ active, setActive }}>
            {children}
        </ActiveSectionContext.Provider>
    );
};

export const useActiveSection = () => useContext(ActiveSectionContext);