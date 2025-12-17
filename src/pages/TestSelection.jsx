import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ConvenienceTest from '../components/ConvenienceTest';
import SuitabilityTest from '../components/SuitabilityTest';
import './TestSelection.css';

const TestSelection = () => {
    const { content } = useLanguage();
    const [activeTest, setActiveTest] = useState(null);

    if (activeTest === 'convenience') {
        return <ConvenienceTest onBack={() => setActiveTest(null)} />;
    }

    if (activeTest === 'suitability') {
        return <SuitabilityTest onBack={() => setActiveTest(null)} />;
    }

    return (
        <section className="test-selection">
            <div className="container">
                <div className="test-selection-header">
                    <h1 className="gradient-text">
                        {content.testSelection?.title || 'Selecciona tu Test'}
                    </h1>
                    <p className="test-selection-subtitle">
                        {content.testSelection?.subtitle || 'Elige el test que necesitas realizar para continuar'}
                    </p>
                </div>

                <div className="test-cards">
                    <div
                        className="test-card"
                        onClick={() => setActiveTest('convenience')}
                    >
                        <div className="test-card-icon">📋</div>
                        <h2 className="test-card-title">
                            {content.testSelection?.convenienceTest?.title || 'Realizar test de conveniencia'}
                        </h2>
                        <p className="test-card-description">
                            {content.testSelection?.convenienceTest?.description || 'Evalúa tus conocimientos y experiencia para inversiones no asesoradas'}
                        </p>
                        <div className="test-card-badge">
                            {content.testSelection?.convenienceTest?.badge || 'Obligatorio'}
                        </div>
                    </div>

                    <div
                        className="test-card test-card-suitability"
                        onClick={() => setActiveTest('suitability')}
                    >
                        <div className="test-card-icon">📊</div>
                        <h2 className="test-card-title">
                            {content.testSelection?.suitabilityTest?.title || 'Test de Idoneidad'}
                        </h2>
                        <p className="test-card-description">
                            {content.testSelection?.suitabilityTest?.description || 'Para servicios de asesoramiento personalizado'}
                        </p>
                        <div className="test-card-badge test-card-badge-suitability">
                            {content.testSelection?.suitabilityTest?.badge || 'Asesoramiento'}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestSelection;
