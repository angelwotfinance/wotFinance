import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            title={theme === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}
        >
            <div className="theme-toggle-track">
                <div className="theme-toggle-thumb">
                    {theme === 'light' ? '☀️' : '🌙'}
                </div>
            </div>
        </button>
    );
};

export default ThemeToggle;
