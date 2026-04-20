import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';
import PaletteSelector from './PaletteSelector';
import './Navbar.css';

const Navbar = () => {
    const { content } = useLanguage();
    const navigate = useNavigate();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const loginButtonRef = useRef(null);
    const loginModalRef = useRef(null);
    const loginModalCloseButtonRef = useRef(null);
    const wasLoginModalOpenRef = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!isLoginModalOpen) {
            return undefined;
        }

        loginModalCloseButtonRef.current?.focus();

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsLoginModalOpen(false);
                return;
            }

            if (event.key !== 'Tab' || !loginModalRef.current) {
                return;
            }

            const focusableSelectors = [
                'button:not([disabled])',
                '[href]',
                'input:not([disabled])',
                'select:not([disabled])',
                'textarea:not([disabled])',
                '[tabindex]:not([tabindex="-1"])'
            ];
            const focusableElements = Array.from(
                loginModalRef.current.querySelectorAll(focusableSelectors.join(', '))
            );

            if (focusableElements.length === 0) {
                event.preventDefault();
                loginModalRef.current.focus();
                return;
            }

            const firstFocusableElement = focusableElements[0];
            const lastFocusableElement = focusableElements[focusableElements.length - 1];
            const isShiftTabbingFromFirst = event.shiftKey && document.activeElement === firstFocusableElement;
            const isTabbingFromLast = !event.shiftKey && document.activeElement === lastFocusableElement;

            if (isShiftTabbingFromFirst) {
                event.preventDefault();
                lastFocusableElement.focus();
            } else if (isTabbingFromLast) {
                event.preventDefault();
                firstFocusableElement.focus();
            }
        };

        const previousBodyOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = previousBodyOverflow;
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isLoginModalOpen]);

    useEffect(() => {
        if (wasLoginModalOpenRef.current && !isLoginModalOpen) {
            loginButtonRef.current?.focus();
        }

        wasLoginModalOpenRef.current = isLoginModalOpen;
    }, [isLoginModalOpen]);

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
            return;
        }

        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const closeLoginModal = () => {
        setIsLoginModalOpen(false);
    };

    return (
        <>
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
                            <button
                                ref={loginButtonRef}
                                className="btn-login"
                                type="button"
                                onClick={() => setIsLoginModalOpen(true)}
                            >
                                {content.navbar.buttons.login}
                            </button>
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

            {isLoginModalOpen && (
                <div
                    className="navbar-login-modal-overlay"
                    onClick={closeLoginModal}
                    role="presentation"
                >
                    <div
                        ref={loginModalRef}
                        className="navbar-login-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="navbar-login-modal-title"
                        tabIndex={-1}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="navbar-login-modal-header">
                            <h2 id="navbar-login-modal-title" className="navbar-login-modal-title">
                                <img
                                    src="/logo-wot.png"
                                    alt=""
                                    aria-hidden="true"
                                    className="navbar-login-modal-icon"
                                />
                                {content.navbar.buttons.login}
                            </h2>
                            <button
                                ref={loginModalCloseButtonRef}
                                className="navbar-login-modal-close"
                                type="button"
                                onClick={closeLoginModal}
                                aria-label={content.navbar.loginModal.closeAriaLabel}
                            >
                                ✕
                            </button>
                        </div>
                        <div className="navbar-login-modal-body">
                            <p className="navbar-login-modal-message">
                                {content.navbar.loginModal.message}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
