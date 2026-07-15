import { createContext, useContext, useEffect, useState } from "react";

/**
 * Theme context.
 *
 * Provides the current theme,
 * resolved theme, and theme updater
 * throughout the application.
 */
const ThemeContext = createContext();

/**
 * Theme provider component.
 *
 * Handles theme persistence,
 * system theme detection,
 * and applies the active theme
 * to the document.
 */
const ThemeProvider = ({ children }) => {
    // Detect the user's preferred color scheme.
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // User-selected theme stored in localStorage.
    const [theme, setTheme] = useState(
        () => localStorage.getItem("theme") || "system",
    );

    // Current operating system theme.
    const [systemTheme, setSystemTheme] = useState(
        mediaQuery.matches ? "dark" : "light",
    );

    // Final theme applied to the application.
    const resolvedTheme = theme === "system" ? systemTheme : theme;

    // Persist the selected theme.
    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    // Apply the resolved theme to the root element.
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", resolvedTheme);
    }, [resolvedTheme]);

    // Listen for operating system theme changes.
    useEffect(() => {
        const handleChange = (event) => {
            setSystemTheme(event.matches ? "dark" : "light");
        };

        mediaQuery.addEventListener("change", handleChange);

        return () => mediaQuery.removeEventListener("change", handleChange);
    }, [mediaQuery]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

/**
 * Theme context hook.
 *
 * Returns the current theme context
 * and ensures it is used within
 * ThemeProvider.
 */
const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be used within ThemeProvider");
    }

    return context;
};

export { ThemeProvider, useTheme };
