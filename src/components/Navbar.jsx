import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import ThemeToggle from './ThemeToggle';
import LanguageSelector from './LanguageSelector';
import './Navbar.css';

const Navbar = () => {
    const { content } = useLanguage();
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
                        <span className="gradient-text">{content.brand.name}</span>
                    </div>

                    <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                        <a onClick={() => scrollToSection('inicio')} className="nav-link">{content.navbar.links.home}</a>
                        <a onClick={() => scrollToSection('como-funciona')} className="nav-link">{content.navbar.links.howItWorks}</a>
                        <a onClick={() => scrollToSection('beneficios')} className="nav-link">{content.navbar.links.benefits}</a>
                        <a onClick={() => scrollToSection('equipo')} className="nav-link">{content.navbar.links.team}</a>
                    </div>

                    <div className="navbar-actions">
                        <LanguageSelector />
                        <ThemeToggle />
                        <button className="btn-login">{content.navbar.buttons.login}</button>
                        <button className="btn btn-primary" onClick={() => navigate('/comenzar')}>{content.navbar.buttons.getStarted}</button>
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
