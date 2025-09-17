import { Brightness4, Brightness7 } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";

export default function ThemeToggleButton() {
  const [darkMode, setDarkMode] = useState(() => localStorage.theme === "dark");

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      html.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [darkMode]);

  return (
    <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit" size="large">
      {darkMode ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
}
