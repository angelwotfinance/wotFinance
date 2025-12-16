// Locales index - exports all languages and language metadata
import es from './es';
import en from './en';
import de from './de';
import fr from './fr';
import zh from './zh';

// All translations organized by language code
export const translations = {
    es,
    en,
    de,
    fr,
    zh
};

// Language metadata for the selector UI
export const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'zh', name: '中文', flag: '🇨🇳' }
];

// Default language
export const defaultLanguage = 'es';

export default translations;
