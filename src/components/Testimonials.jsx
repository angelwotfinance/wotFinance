import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Testimonials.css';

const Testimonials = () => {
    const { content } = useLanguage();
    // Duplicate testimonials for infinite scroll effect
    const allTestimonials = [...content.testimonials.items, ...content.testimonials.items];

    return (
        <section id="testimonios" className="testimonials">
            <div className="container">
                <div className="section-header">
                    <h2>{content.testimonials.title}</h2>
                    <p>{content.testimonials.subtitle}</p>
                </div>
            </div>

            <div className="testimonials-track">
                <div className="testimonials-scroll">
                    {allTestimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="testimonial-quote">"</div>
                            <p className="testimonial-text">{testimonial.text}</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div className="author-info">
                                    <div className="author-name">{testimonial.name}</div>
                                    <div className="author-location">{testimonial.location}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

