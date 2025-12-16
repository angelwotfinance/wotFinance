import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, defaultLanguage } from '../config/locales';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // Initialize language from localStorage or use default
    const [language, setLanguage] = useState(() => {
        const saved = localStorage.getItem('wot-language');
        return saved && translations[saved] ? saved : defaultLanguage;
    });

    // Persist language preference
    useEffect(() => {
        localStorage.setItem('wot-language', language);
        // Set html lang attribute for accessibility
        document.documentElement.lang = language;
    }, [language]);

    // Get current translation object
    const content = translations[language] || translations[defaultLanguage];

    // Translation function for nested paths (e.g., 'navbar.links.home')
    const t = (path) => {
        const keys = path.split('.');
        let result = content;
        for (const key of keys) {
            if (result && typeof result === 'object' && key in result) {
                result = result[key];
            } else {
                console.warn(`Translation not found for path: ${path}`);
                return path;
            }
        }
        return result;
    };

    const value = {
        language,
        setLanguage,
        content,
        t
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export default LanguageContext;
