"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();

  return (
    <button
      className="realtive inline-flex"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun
        size="16"
        className="transition-all scale-100 rotate-0 dark:-rotate-90 dark:scale-0"
      />
      <Moon
        size="16"
        className="absolute transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100"
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

export default ThemeToggle;
