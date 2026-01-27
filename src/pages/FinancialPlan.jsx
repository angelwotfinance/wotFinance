import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Footer from '../components/Footer';
import './FinancialPlan.css';

const FinancialPlan = () => {
    const { content } = useLanguage();

    // Sheet definitions with their GIDs
    const sheets = [
        { name: "Front Page", gid: "727528765" },
        { name: "Initial Investment", gid: "719555077" },
        { name: "Hypothesis", gid: "2036588441" },
        { name: "Balance", gid: "1019598787" },
        { name: "Profit & Loss", gid: "1384854310" },
        { name: "Cash Flows", gid: "1157173270" },
        { name: "Projections", gid: "1305920543" },
        { name: "Ratios", gid: "1439296099" },
        { name: "Summary", gid: "164932976" }
    ];

    const [activeTab, setActiveTab] = useState(sheets[0].gid);

    return (
        <div className="financial-plan-page">
            <div className="container financial-plan-container">
                <h1 className="gradient-text financial-plan-title">
                    {content.navbar.links.financialPlan || "Plan Financiero"}
                </h1>

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
                        src={`https://docs.google.com/spreadsheets/d/e/2PACX-1vQkvYEItppWmWgDmiLLki1yJwb1XiU-YjBVHTJ0Qc5JqVhrieyY8rvImd-modgEEQ/pubhtml?gid=${activeTab}&single=true&widget=false&headers=false`}
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
