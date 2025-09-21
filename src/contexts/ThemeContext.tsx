import React, { createContext, useContext, useState, useEffect } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Check localStorage first, then system preference
    const saved = localStorage.getItem("theme") as Theme;
    if (saved) return saved;

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    // Apply theme to document root
    document.documentElement.setAttribute("data-theme", theme);

    // Update CSS custom properties
    const root = document.documentElement;

    if (theme === "dark") {
      root.style.setProperty("--bg-primary", "#0f0f0f");
      root.style.setProperty("--bg-secondary", "#1a1a1a");
      root.style.setProperty("--bg-card", "#262626");
      root.style.setProperty("--text-primary", "#ffffff");
      root.style.setProperty("--text-secondary", "#a3a3a3");
      root.style.setProperty("--text-disabled", "#737373");
      root.style.setProperty("--border-color", "#404040");
    } else {
      root.style.setProperty("--bg-primary", "#ffffff");
      root.style.setProperty("--bg-secondary", "#f8f9fa");
      root.style.setProperty("--bg-card", "#f8f9fb");
      root.style.setProperty("--text-primary", "#000000");
      root.style.setProperty("--text-secondary", "#666666");
      root.style.setProperty("--text-disabled", "#999999");
      root.style.setProperty("--border-color", "#e5e7eb");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
