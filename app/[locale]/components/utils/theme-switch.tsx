"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeSwitch: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle Theme"
    >
      {theme === "light" ? (
        <Moon color={theme === "light" ? "#b35F00" : "#ffac4d"} size={20} />
      ) : (
        <Sun color={theme === "light" ? "#b35F00" : "#ffac4d"} size={20} />
      )}
    </button>
  );
};

export default ThemeSwitch;
