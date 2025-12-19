import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const Footer = () => {
    const { content } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-brand gradient-text">{content.brand.name}</h3>
                        <p className="footer-description">
                            {content.footer.description}
                        </p>
                        <div className="footer-social">
                            <a href="#" className="social-link">📘</a>
                            <a href="#" className="social-link">🐦</a>
                            <a href="#" className="social-link">💼</a>
                            <a href="#" className="social-link">📸</a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-title">{content.footer.sections.product.title}</h4>
                        <ul className="footer-links">
                            {content.footer.sections.product.links.map((link, index) => (
                                <li key={index}><a href={link.href}>{link.text}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-title">{content.footer.sections.company.title}</h4>
                        <ul className="footer-links">
                            {content.footer.sections.company.links.map((link, index) => (
                                <li key={index}><a href={link.href}>{link.text}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-title">{content.footer.sections.support.title}</h4>
                        <ul className="footer-links">
                            {content.footer.sections.support.links.map((link, index) => (
                                <li key={index}><a href={link.href}>{link.text}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>

                {content.footer.disclaimer && (
                    <div className="footer-disclaimer">
                        <p>{content.footer.disclaimer}</p>
                    </div>
                )}

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} {content.brand.name}. {content.footer.copyright}
                    </p>
                    <div className="footer-legal">
                        <a href="#">{content.footer.legal.terms}</a>
                        <a href="#">{content.footer.legal.privacy}</a>
                        <a href="#">{content.footer.legal.cookies}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

