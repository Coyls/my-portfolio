"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { SiteConfig } from "@/config/site.config";

const ThemeSwitch: React.FC = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
      type="button"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle Theme"
    >
      {theme === "light" ? (
        <Moon
          color={theme === "light" ? "#b35F00" : "#ffac4d"}
          size={SiteConfig.iconSize}
        />
      ) : (
        <Sun
          color={theme === "light" ? "#b35F00" : "#ffac4d"}
          size={SiteConfig.iconSize}
        />
      )}
    </button>
  );
};

export default ThemeSwitch;
