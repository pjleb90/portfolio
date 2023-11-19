'use client';

import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button variant="naked" size="icon" onClick={toggleTheme}>
      {isClient && theme === "light" && (
        <FaMoon className="w-5 h-5 text-gray-600 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 hover:text-teal-500 animate-bounce" />
      )}
      {isClient && theme !== "light" && (
        <FaSun className="w-5 h-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 hover:text-white animate-flicker" />
      )}
    </Button>
  );
}