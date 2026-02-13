import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import TasadorModal from './TasadorModal';
import './Hero.css';

const HERO_IMAGES = [
    '/VIÑEDOS.jpeg',
    '/JOYAS-ANTIGUAS-ANILLOS-BARROCOS-BN.jpg',
    '/MERCEDES-SL-BN.jpg',
    '/WHISKY-BARRELS-MORE.webp'
];

const CAROUSEL_INTERVAL = 6000; // 6 seconds per image

const Hero = () => {
    const { content } = useLanguage();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
        }, CAROUSEL_INTERVAL);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="inicio" className="hero">
            {HERO_IMAGES.map((image, index) => (
                <div
                    key={image}
                    className={`hero-background-image ${index === currentImageIndex ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${image})` }}
                />
            ))}
            <div className="hero-overlay" />

            <div className="hero-content">
                <h1 className="hero-title fade-in-up">
                    {content.hero.title.main}
                </h1>
                <h2 className="hero-highlight fade-in-up">
                    {content.hero.title.highlight}
                </h2>

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
            </div>

            <TasadorModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};

export default Hero;
