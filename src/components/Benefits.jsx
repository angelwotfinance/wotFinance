
import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import './Benefits.css';

const BENEFIT_IMAGES = [
    '/WINE-GALLERY.jpg',
    '/JEWELRY-GEMS.jpg',
    '/PATEK-RELOJ.jpeg',
    '/WHISKY-BARRELS.jpg',
    '/PORSCHE.jpg'
];

const Benefits = () => {
    const { content } = useLanguage();
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Detect if desktop (> 900px matches CSS breakpoint)
    const [isDesktop, setIsDesktop] = React.useState(false);

    React.useEffect(() => {
        const checkDesktop = () => setIsDesktop(window.innerWidth >= 900);
        checkDesktop();
        window.addEventListener('resize', checkDesktop);
        return () => window.removeEventListener('resize', checkDesktop);
    }, []);

    // Exact scroll distance calculation:
    // Mobile: 4 gaps * (85vw card + 4vw gap) = 356vw distance to center 5th card
    // Desktop: 4 gaps * (60vw card + 10vw gap) = 280vw distance to center 5th card
    const finalX = isDesktop ? "-280vw" : "-356vw";

    const x = useTransform(scrollYProgress, [0, 1], ["0vw", finalX]);

    return (
        <section ref={targetRef} id="beneficios" className="benefits-section">
            <div className="benefits-sticky-container">
                <div className="benefits-header">
                    <h2>{content.benefits.title}</h2>
                    <p>{content.benefits.subtitle}</p>
                </div>

                <motion.div style={{ x }} className="benefits-track">
                    {content.benefits.items.map((benefit, index) => {
                        return (
                            <Card
                                key={index}
                                benefit={benefit}
                                index={index}
                                scrollYProgress={scrollYProgress}
                                total={content.benefits.items.length}
                            />
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

// Subcomponent to handle individual card logic (zoom effect)
const Card = ({ benefit, index, scrollYProgress, total }) => {
    // Determine when this card is "active" (centered) based on scroll progress
    // Simple heuristic: divide progress by N items.

    // Adjust logic: when progress is around (index / (total - 1)), scale up?
    // Let's try mapping a range around its expected "center" position.

    // Normalized position for this item in the sequence [0, 1]
    const position = index / (total - 1);
    const range = 1 / total; // Width of "influence"

    const scale = useTransform(
        scrollYProgress,
        [position - range, position, position + range],
        [0.8, 1.1, 0.8] // Zoom in when centered
    );

    const opacity = useTransform(
        scrollYProgress,
        [position - range, position, position + range],
        [0.5, 1, 0.5] // Fade out siblings slightly
    );

    return (
        <motion.div
            className="benefit-card-wrapper"
            style={{
                scale: scale,
                opacity: opacity,
                zIndex: 1
            }}
        >
            <div className="benefit-card-inner">
                <img
                    src={BENEFIT_IMAGES[index % BENEFIT_IMAGES.length]}
                    alt={benefit.title}
                    className="benefit-image"
                />
                <div className="benefit-overlay">
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default Benefits;


