import { Outlet } from "react-router-dom";

import { createContext, useEffect, useState } from "react";

import NavigationBar from "../navigationBar/NavigationBar";

import "./layout.scss"

export const ThemeContext = createContext("dark")

const Layout = () => {
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme ? JSON.parse(storedTheme) : 'dark';
    });

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme))
    }, [theme])

    const main = "main-" + theme

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <NavigationBar />
            <main className={`${main}`}>
                <Outlet/>
            </main>
        </ThemeContext.Provider> 
    )
}

export default Layout;