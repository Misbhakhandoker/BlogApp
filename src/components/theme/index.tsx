"use client";

import { MdDarkMode } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {
            theme ==='dark' ? <BsSunFill size={30} /> : <MdDarkMode size={30}/>
        }
    </button>
  );
}