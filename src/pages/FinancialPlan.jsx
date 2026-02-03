import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Footer from '../components/Footer';
import './FinancialPlan.css';

const FinancialPlan = () => {
    const { content } = useLanguage();
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Password for access (you can change this)
    const correctPassword = 'winovertime';

    // Sheet definitions with their GIDs
    const sheets = [
        { name: "Front Page", gid: "1790418939" },
        { name: "Initial Investment", gid: "1118928409" },
        { name: "Hypothesis", gid: "681424634" },
        { name: "Balance", gid: "754840746" },
        { name: "Profit & Loss", gid: "613276516" },
        { name: "Cash Flows", gid: "1666784077" },
        { name: "Projections", gid: "779266301" },
        { name: "Ratios", gid: "1635277178" },
        { name: "Summary", gid: "644256773" }
    ];

    const [activeTab, setActiveTab] = useState(sheets[0].gid);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === correctPassword) {
            setIsAuthenticated(true);
            setError('');
        } else {
            setError('Contraseña incorrecta');
        }
    };

    const handleClose = () => {
        navigate('/');
    };

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('password-overlay')) {
            navigate('/');
        }
    };

    // Password popup
    if (!isAuthenticated) {
        return (
            <div className="financial-plan-page">
                <div className="password-overlay" onClick={handleOverlayClick}>
                    <div className="password-modal">
                        <button className="password-close-btn" onClick={handleClose}>✕</button>
                        <div className="password-modal-header">
                            <img
                                src="/logo-wot.png"
                                alt="WOT Logo"
                                className="password-logo"
                            />
                            <h2>Acceso Restringido</h2>
                        </div>
                        <p>Introduce la clave para acceder al Plan Financiero</p>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Introduce la clave..."
                                className="password-input"
                                autoFocus
                            />
                            {error && <p className="password-error">{error}</p>}
                            <button type="submit" className="btn btn-primary password-btn">
                                Acceder
                            </button>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="financial-plan-page">
            <div className="container financial-plan-container">
                <div className="financial-plan-header">
                    <h1 className="gradient-text financial-plan-title">
                        {content.navbar.links.financialPlan || "Plan Financiero"}
                    </h1>
                    <a
                        href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSf71hszdUp8lCLj7sLgDIQI5ysx6v4wEFOuTXzBRihTpUNdMPE9fqvBVFvUOSJPQ/pub?output=pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary download-pdf-btn"
                    >
                        📄 Descargar PDF
                    </a>
                </div>

                {/* Custom Tabs */}
                <div className="tabs-container">
                    {sheets.map((sheet) => (
                        <button
                            key={sheet.gid}
                            onClick={() => setActiveTab(sheet.gid)}
                            className={`tab-button ${activeTab === sheet.gid ? 'active' : ''}`}
                        >
                            {sheet.name}
                        </button>
                    ))}
                </div>

                {/* Iframe Container */}
                <div className="iframe-container">
                    <iframe
                        src={`https://docs.google.com/spreadsheets/d/e/2PACX-1vSf71hszdUp8lCLj7sLgDIQI5ysx6v4wEFOuTXzBRihTpUNdMPE9fqvBVFvUOSJPQ/pubhtml?gid=${activeTab}&single=true&widget=false&headers=false`}
                        className="financial-iframe"
                        allowFullScreen
                        title="Plan Financiero"
                    ></iframe>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default FinancialPlan;
