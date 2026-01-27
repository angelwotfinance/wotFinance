import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { languages } from '../config/locales';
import './LanguageSelector.css';

// SVG Flag components for reliable rendering
const flags = {
    es: (
        <svg viewBox="0 0 512 512" className="flag-svg">
            <rect y="0" fill="#C60B1E" width="512" height="170.67" />
            <rect y="170.67" fill="#FFC400" width="512" height="170.67" />
            <rect y="341.33" fill="#C60B1E" width="512" height="170.67" />
        </svg>
    ),
    en: (
        <svg viewBox="0 0 512 512" className="flag-svg">
            <rect fill="#012169" width="512" height="512" />
            <path fill="#FFF" d="M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z" />
            <path fill="#C8102E" d="M184 324l11 34L42 512H0v-3l184-185zm124-12l54 8 150 147v45L308 312zM512 0L320 196l-4-44L466 0h46zM0 1l193 189-59-8L0 49V1z" />
            <path fill="#FFF" d="M176 0v512h160V0H176zM0 176v160h512V176H0z" />
            <path fill="#C8102E" d="M0 208v96h512v-96H0zM208 0v512h96V0h-96z" />
        </svg>
    ),
    de: (
        <svg viewBox="0 0 512 512" className="flag-svg">
            <rect y="0" fill="#000" width="512" height="170.67" />
            <rect y="170.67" fill="#DD0000" width="512" height="170.67" />
            <rect y="341.33" fill="#FFCE00" width="512" height="170.67" />
        </svg>
    ),
    fr: (
        <svg viewBox="0 0 512 512" className="flag-svg">
            <rect x="0" fill="#002654" width="170.67" height="512" />
            <rect x="170.67" fill="#FFF" width="170.67" height="512" />
            <rect x="341.33" fill="#CE1126" width="170.67" height="512" />
        </svg>
    ),
    zh: (
        <svg viewBox="0 0 512 512" className="flag-svg">
            <rect fill="#DE2910" width="512" height="512" />
            <polygon fill="#FFDE00" points="155.5,70.5 176.3,134.5 244,134.5 189.4,173.5 210.2,237.5 155.5,198.5 100.8,237.5 121.6,173.5 67,134.5 134.7,134.5" />
            <polygon fill="#FFDE00" points="280.5,38 288.5,62 314,62 294,77 302,101 280.5,86 259,101 267,77 247,62 272.5,62" />
            <polygon fill="#FFDE00" points="352,86 360,110 385.5,110 365.5,125 373.5,149 352,134 330.5,149 338.5,125 318.5,110 344,110" />
            <polygon fill="#FFDE00" points="352,166 360,190 385.5,190 365.5,205 373.5,229 352,214 330.5,229 338.5,205 318.5,190 344,190" />
            <polygon fill="#FFDE00" points="280.5,206 288.5,230 314,230 294,245 302,269 280.5,254 259,269 267,245 247,230 272.5,230" />
        </svg>
    )
};

const LanguageSelector = () => {
    const { language, setLanguage } = useLanguage();
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Get current language info
    const currentLang = languages.find(l => l.code === language) || languages[0];

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close dropdown on escape key
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, []);

    const handleLanguageSelect = (langCode) => {
        setLanguage(langCode);
        setIsOpen(false);
    };

    return (
        <div className={`language-selector ${theme}`} ref={dropdownRef}>
            <button
                className="language-btn"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-haspopup="listbox"
                aria-label="Select language"
            >
                <span className="flag-circle">{flags[currentLang.code]}</span>
            </button>

            {isOpen && (
                <div className="language-dropdown" role="listbox">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            className={`language-option ${language === lang.code ? 'active' : ''}`}
                            onClick={() => handleLanguageSelect(lang.code)}
                            role="option"
                            aria-selected={language === lang.code}
                        >
                            <span className="flag-circle">{flags[lang.code]}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;
