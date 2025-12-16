import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Benefits.css';

const Benefits = () => {
    const { content } = useLanguage();
    return (
        <section id="beneficios" className="benefits">
            <div className="container">
                <div className="section-header">
                    <h2>{content.benefits.title}</h2>
                    <p>{content.benefits.subtitle}</p>
                </div>

                <div className="benefits-grid">
                    {content.benefits.items.map((benefit, index) => (
                        <div key={index} className="benefit-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="benefit-icon-wrapper">
                                <div className="benefit-icon">{benefit.icon}</div>
                            </div>
                            <h3 className="benefit-title">{benefit.title}</h3>
                            <p className="benefit-description">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;

