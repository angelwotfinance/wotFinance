import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import './HowItWorks.css';

const HowItWorks = () => {
    const { content } = useLanguage();
    const navigate = useNavigate();
    const [selectedId, setSelectedId] = useState(null);

    return (
        <section id="como-funciona" className="how-it-works">
            <div className="container">
                <div className="section-header">
                    <h2>{content.howItWorks.title}</h2>
                    <p>{content.howItWorks.subtitle}</p>
                </div>

                <div className="steps-grid">
                    {content.howItWorks.steps.map((step, index) => (
                        <motion.div
                            key={index}
                            layoutId={`step-${index}`}
                            onClick={() => setSelectedId(index)}
                            className="step-card fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s`, cursor: 'pointer' }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <motion.img
                                layoutId={`img-${index}`}
                                src={step.image}
                                alt={step.title}
                                className="step-image"
                            />
                            <div className="step-content-preview">
                                <motion.h3 layoutId={`title-${index}`} className="step-title">{step.title}</motion.h3>
                                <p className="step-description">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId !== null && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="how-it-works-overlay"
                                onClick={() => setSelectedId(null)}
                            />
                            <motion.div
                                layoutId={`step-${selectedId}`}
                                className="expanded-card"
                            >
                                <button
                                    className="close-btn"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedId(null);
                                    }}
                                >
                                    ×
                                </button>
                                <motion.div className="expanded-image-container">
                                    <motion.img
                                        layoutId={`img-${selectedId}`}
                                        src={content.howItWorks.steps[selectedId].image}
                                        alt={content.howItWorks.steps[selectedId].title}
                                        className="expanded-image"
                                    />
                                </motion.div>
                                <motion.div
                                    className="expanded-content"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.15 }}
                                >
                                    <motion.h3 layoutId={`title-${selectedId}`} className="expanded-title">
                                        {content.howItWorks.steps[selectedId].title}
                                    </motion.h3>
                                    <p className="expanded-text">
                                        {content.howItWorks.expandedDetails[selectedId]}
                                    </p>
                                    <button className="btn btn-primary mt-4" onClick={() => navigate('/comenzar')}>
                                        {content.howItWorks.startNow}
                                    </button>
                                </motion.div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default HowItWorks;
