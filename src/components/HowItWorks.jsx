import React from 'react';
import content from '../config/content';
import './HowItWorks.css';

const HowItWorks = () => {
    return (
        <section id="como-funciona" className="how-it-works">
            <div className="container">
                <div className="section-header">
                    <h2>{content.howItWorks.title}</h2>
                    <p>{content.howItWorks.subtitle}</p>
                </div>

                <div className="steps-grid">
                    {content.howItWorks.steps.map((step, index) => (
                        <div key={index} className="step-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                            <img src={step.image} alt={step.title} className="step-image" />
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-description">{step.description}</p>
                        </div>
                    ))}
                </div>

                <div className="cta-section">
                    <button className="btn btn-primary btn-lg">{content.howItWorks.cta}</button>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;

