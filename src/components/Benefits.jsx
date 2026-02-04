import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Benefits.css';

const BENEFIT_IMAGES = [
    '/WINE-GALLERY.jpg',
    '/JEWELRY-GEMS.jpg',
    '/PATEK-RELOJ.jpeg',
    '/WHISKY-BARRELS.jpg',
    '/PORSCHE.jpg'
];

// Images for "Vintage Collection" (p6)
const BENEFIT_IMAGES_ALT = [
    '/WINE-GALLERY.jpg',
    '/JEWELRY-GEMS.jpg',
    '/PATEK-RELOJ.jpeg',
    '/BODEGA-AMARILLA.png',  // Index 3: Bajo Control
    '/ESCARABAJO-VERDE.png'  // Index 4: Salida de Inversión
];

const Benefits = () => {
    const { content } = useLanguage();
    const { theme } = useTheme();
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkDesktop = () => setIsDesktop(window.innerWidth >= 900);
        checkDesktop();
        window.addEventListener('resize', checkDesktop);
        return () => window.removeEventListener('resize', checkDesktop);
    }, []);

    // Select images based on theme
    const activeImages = theme === 'p6' ? BENEFIT_IMAGES_ALT : BENEFIT_IMAGES;

    // Exact scroll distance calculation:
    // Mobile: 4 gaps * (85vw card + 4vw gap) = 356vw distance to center 5th card
    // Desktop: 4 gaps * (60vw card + 10vw gap) = 280vw distance to center 5th card
    const finalX = isDesktop ? "-280vw" : "-356vw";
    const x = useTransform(scrollYProgress, [0, 1], ["0vw", finalX]);

    return (
        <section id="beneficios" className="benefits-section" ref={targetRef}>
            <div className="benefits-sticky-container">
                <div className="benefits-header">
                    <h2>{content.benefits.title}</h2>
                </div>

                <motion.div style={{ x }} className="benefits-track">
                    {content.benefits.items.map((benefit, index) => (
                        <div key={index} className="benefit-card-wrapper">
                            <div className="benefit-card-inner">
                                <img
                                    src={activeImages[index] || activeImages[0]}
                                    alt={benefit.title}
                                    className="benefit-image"
                                />
                                <div className="benefit-overlay">
                                    <h3>{benefit.title}</h3>
                                    <p>{benefit.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Benefits;
