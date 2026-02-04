import React, { createContext, useContext, useState, useEffect } from 'react';

// Crear el contexto de tema
const ThemeContext = createContext();

export const PALETTES = {
    p1: { name: "Sotheby's Paper (Serif)", colors: ['#F2F0E6', '#004225'] },
    p1_sans: { name: "Sotheby's Paper (Sans)", colors: ['#F2F0E6', '#004225'] },
    p2: { name: "The Sommelier (Serif)", colors: ['#F9F9F9', '#4A0404'] },
    p2_sans: { name: "The Sommelier (Sans)", colors: ['#F9F9F9', '#4A0404'] },
    p3: { name: "Alpine Vault (Serif)", colors: ['#F5F7FA', '#3730A3'] },
    p3_sans: { name: "Alpine Vault (Sans)", colors: ['#F5F7FA', '#3730A3'] },
    p4: { name: "Tuscan Leather (Serif)", colors: ['#EDEADE', '#8B4513'] },
    p4_sans: { name: "Tuscan Leather (Sans)", colors: ['#EDEADE', '#8B4513'] },
    p5: { name: "Monochrome (Serif)", colors: ['#FFFFFF', '#000000'] },
    p5_sans: { name: "Monochrome (Sans)", colors: ['#FFFFFF', '#000000'] }
};

// Hook personalizado para usar el tema
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme debe ser usado dentro de un ThemeProvider');
    }
    return context;
};

// Provider del tema
export const ThemeProvider = ({ children }) => {
    // Default to p1
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'p1';
    });

    // Aplicar tema al documento cuando cambie
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const setPalette = (paletteKey) => {
        if (PALETTES[paletteKey]) {
            setTheme(paletteKey);
        }
    };

    const value = {
        theme,
        setPalette,
        currentPalette: PALETTES[theme] || PALETTES.p1,
        isDark: false // All new palettes are fundamentally 'light/paper' based
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};
