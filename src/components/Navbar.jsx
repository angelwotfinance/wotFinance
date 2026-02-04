import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';
import PaletteSelector from './PaletteSelector';
import './Navbar.css';

const Navbar = () => {
    const { content } = useLanguage();
    const { theme, isDark } = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle hash-based navigation after route change
    useEffect(() => {
        if (location.hash && location.pathname === '/') {
            const id = location.hash.replace('#', '');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [location]);

    const scrollToSection = (id) => {
        setIsMobileMenuOpen(false);

        // If not on landing page, navigate there first with hash
        if (location.pathname !== '/') {
            navigate('/#' + id);
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-content">
                    <div className="navbar-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                        <div
                            className="navbar-logo-container"
                            aria-label={content.brand.name}
                            title={content.brand.name}
                        />
                        <span className="navbar-brand-text">WOTfinance</span>
                    </div>

                    <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                        <a onClick={() => scrollToSection('inicio')} className="nav-link">{content.navbar.links.home}</a>
                        <a onClick={() => scrollToSection('como-funciona')} className="nav-link">{content.navbar.links.howItWorks}</a>
                        <a onClick={() => scrollToSection('beneficios')} className="nav-link">{content.navbar.links.benefits}</a>
                        <a onClick={() => scrollToSection('equipo')} className="nav-link">{content.navbar.links.team}</a>
                        <a onClick={() => { setIsMobileMenuOpen(false); navigate('/plan-financiero'); }} className="nav-link" style={{ cursor: 'pointer' }}>{content.navbar.links.financialPlan}</a>
                    </div>

                    <div className="navbar-actions">
                        <PaletteSelector />
                        {/* <ThemeToggle /> */}
                        <LanguageSelector />
                        <button className="btn-login">{content.navbar.buttons.login}</button>
                        <button className="btn btn-primary btn-navbar" onClick={() => navigate('/comenzar')}>{content.navbar.buttons.getStarted}</button>
                    </div>

                    <div className="mobile-actions">
                        <PaletteSelector />
                        {/* <ThemeToggle /> */}
                        <LanguageSelector />
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
