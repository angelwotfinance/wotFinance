import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import './NewsletterPopup.css';

const NewsletterPopup = () => {
    const { content } = useLanguage();
    const { theme } = useTheme();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show after a small delay or check localStorage if already closed
        const isClosed = localStorage.getItem('newsletterClosed');
        if (!isClosed) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 500); // Show after 0.5 second
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        localStorage.setItem('newsletterClosed', 'true');
    };

    if (!isVisible) return null;

    return (
        <div className="newsletter-popup">
            <button className="newsletter-close" onClick={handleClose}>×</button>
            <div className="newsletter-content">
                <div className="newsletter-header">
                    <img
                        src="/logo-wot.png"
                        alt="WOT Logo"
                        className="newsletter-logo"
                    />
                    <h3 className="newsletter-title">WOT Insights</h3>
                </div>
                <p className="newsletter-text">
                    {content.language === 'en'
                        ? "Learn what all the buzz is about! Get our newsletter delivered straight to your inbox."
                        : "¡Entérate de todo! Recibe nuestra newsletter directamente en tu bandeja de entrada."}
                </p>
                <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        placeholder="hello@wot.finance"
                        className="newsletter-input"
                    />
                    <button type="submit" className="newsletter-btn">
                        {content.language === 'en' ? "Sign Up" : "Suscribirse"}
                    </button>
                    <p className="newsletter-terms">
                        {content.language === 'en'
                            ? "By submitting this form you are agreeing to our Terms & Conditions and Privacy Policy."
                            : "Al enviar este formulario aceptas nuestros Términos y Condiciones y Política de Privacidad."}
                    </p>
                </form>
            </div>
        </div>
    );
};

export default NewsletterPopup;
