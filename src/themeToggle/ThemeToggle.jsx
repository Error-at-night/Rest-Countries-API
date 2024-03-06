import { useContext } from "react";

import { ThemeContext } from "../layout/Layout";

import "./ThemeToggle.scss"

import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeToggle = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    
    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    };

    const toggleButton = "toggleButton-" + theme

    return (
        <button className={`${toggleButton}`} onClick={() => {
            toggleTheme()
        }}>
            {theme === "dark" ? 
                <div className="d-flex">
                    <MoonIcon width={22} height={22} className="moon m-0 p-0"/> 
                    <span className="ms-2">Dark Mode</span>
                </div> 
                : 
                <div className="d-flex">
                    <SunIcon width={22} height={22} className="sun m-0 p-0"/> 
                    <span className="ms-2">Light Mode</span>
                </div>
            }
        </button>
    )
}

export default ThemeToggle