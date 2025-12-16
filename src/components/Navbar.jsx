import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ThemeToggle from './ThemeToggle';
import LanguageSelector from './LanguageSelector';
import './Navbar.css';

const Navbar = () => {
    const { content } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-content">
                    <div className="navbar-logo">
                        <span className="gradient-text">{content.brand.name}</span>
                    </div>

                    <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                        <a onClick={() => scrollToSection('inicio')} className="nav-link">{content.navbar.links.home}</a>
                        <a onClick={() => scrollToSection('como-funciona')} className="nav-link">{content.navbar.links.howItWorks}</a>
                        <a onClick={() => scrollToSection('beneficios')} className="nav-link">{content.navbar.links.benefits}</a>
                        <a onClick={() => scrollToSection('equipo')} className="nav-link">{content.navbar.links.team}</a>
                        <a onClick={() => scrollToSection('testimonios')} className="nav-link">{content.navbar.links.testimonials}</a>
                    </div>

                    <div className="navbar-actions">
                        <LanguageSelector />
                        <ThemeToggle />
                        <button className="btn-login">{content.navbar.buttons.login}</button>
                        <button className="btn btn-primary">{content.navbar.buttons.getStarted}</button>
                    </div>

                    <div className="mobile-actions">
                        <LanguageSelector />
                        <ThemeToggle />
                        <button
                            className="mobile-menu-btn"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
