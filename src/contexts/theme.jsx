import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState(() => {
    // Initialize themeName based on localStorage or default to 'light'
    return localStorage.getItem("themeName") || "light";
  });

  useEffect(() => {
    const darkMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const updateTheme = (e) => {
      const name = e.matches ? "dark" : "light";
      setThemeName(name);
      localStorage.setItem("themeName", name);
    };

    // Initial theme setting based on system preference
    updateTheme(darkMediaQuery);

    // Listen for changes in the system theme preference
    darkMediaQuery.addEventListener("change", updateTheme);

    // Cleanup event listener on component unmount
    return () => {
      darkMediaQuery.removeEventListener("change", updateTheme);
    };
  }, []);

  const toggleTheme = () => {
    const name = themeName === "dark" ? "light" : "dark";
    localStorage.setItem("themeName", name);
    setThemeName(name);
  };

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeProvider, ThemeContext };
