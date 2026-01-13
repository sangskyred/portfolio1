// context/ThemeContext.js
'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    // Initialize theme state from localStorage if available, default to 'light'
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        // Check if window is defined to avoid errors during SSR
        if (typeof window !== 'undefined') {
            const storedTheme = localStorage.getItem('theme');
            if (storedTheme) {
                setTheme(storedTheme);
            }
        }
    }, []);

    useEffect(() => {
        // Apply the theme to documentElement
        document.documentElement.setAttribute('data-theme', theme);
        // Save the theme to localStorage
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}