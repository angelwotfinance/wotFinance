import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import TasadorModal from './TasadorModal';
import './Hero.css';

const Hero = () => {
    const { content } = useLanguage();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <section id="inicio" className="hero">
            <div className="hero-background">
                <div className="hero-gradient"></div>
            </div>

            <div className="container">
                <div className="hero-content">
                    <div className="hero-badge fade-in">
                        <img src="/logo-wot.png" alt="" className="hero-badge-icon" />
                        {content.hero.badge}
                    </div>

                    <h1 className="hero-title fade-in-up">
                        {content.hero.title.main} <br />
                        <span className="gradient-text">{content.hero.title.highlight}</span>
                    </h1>

                    <p className="hero-subtitle fade-in-up">
                        {content.hero.subtitle}
                    </p>

                    <div className="hero-buttons fade-in-up">
                        <button
                            className="btn btn-primary btn-lg"
                            onClick={() => navigate('/comenzar')}
                        >
                            {content.hero.buttons.primary}
                        </button>
                        <button
                            className="btn btn-secondary btn-lg"
                            onClick={() => setIsModalOpen(true)}
                        >
                            {content.hero.buttons.secondary}
                        </button>
                    </div>

                    <div className="hero-trust fade-in">
                        <div className="trust-item">
                            <span className="trust-stars">⭐⭐⭐⭐⭐</span>
                            <span className="trust-text">{content.hero.trust.rating}</span>
                        </div>
                        <div className="trust-divider"></div>
                        <div className="trust-item">
                            <span className="trust-number">{content.hero.trust.clients}</span>
                            <span className="trust-text">{content.hero.trust.clientsLabel}</span>
                        </div>
                    </div>
                </div>
            </div>

            <TasadorModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};

export default Hero;

