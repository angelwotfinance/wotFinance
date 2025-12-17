import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './SuitabilityTest.css';

const SuitabilityTest = ({ onBack }) => {
    const { content } = useLanguage();
    const [answers, setAnswers] = useState({});
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState(null);

    const questions = [
        // Bloque 1: Conocimientos y Experiencia
        {
            id: 1,
            block: 1,
            blockTitle: content.suitabilityTest?.blocks?.knowledge || 'Conocimientos y Experiencia',
            question: content.suitabilityTest?.questions?.[1] || '¿Posee formación o experiencia profesional relacionada con inversiones o gestión patrimonial?',
            type: 'yesno',
            scores: { yes: 6, no: 1 }
        },
        {
            id: 2,
            block: 1,
            question: content.suitabilityTest?.questions?.[2] || '¿Ha invertido anteriormente en activos tangibles o alternativos?',
            type: 'yesno',
            scores: { yes: 6, no: 1 }
        },
        {
            id: 3,
            block: 1,
            question: content.suitabilityTest?.questions?.[3] || '¿Durante cuánto tiempo ha mantenido inversiones de este tipo?',
            type: 'options',
            options: [
                { value: 'less1', label: content.suitabilityTest?.options?.less1year || '<1 año', score: 1 },
                { value: '1to3', label: content.suitabilityTest?.options?.['1to3years'] || '1–3 años', score: 3 },
                { value: 'more3', label: content.suitabilityTest?.options?.more3years || '>3 años', score: 6 }
            ]
        },
        {
            id: 4,
            block: 1,
            question: content.suitabilityTest?.questions?.[4] || '¿Conoce los principales riesgos de los activos tangibles (valoración, conservación, liquidez)?',
            type: 'yesno',
            scores: { yes: 6, no: 1 }
        },
        {
            id: 5,
            block: 1,
            question: content.suitabilityTest?.questions?.[5] || '¿Sabe cómo se determina el valor de un activo tangible (tasaciones, índices, comparables)?',
            type: 'yesno',
            scores: { yes: 6, no: 1 }
        },
        // Bloque 2: Situación Financiera
        {
            id: 6,
            block: 2,
            blockTitle: content.suitabilityTest?.blocks?.financial || 'Situación Financiera',
            question: content.suitabilityTest?.questions?.[6] || 'Ingresos anuales aproximados',
            type: 'options',
            options: [
                { value: 'low', label: content.suitabilityTest?.options?.incomeLow || '<40.000 €', score: 1 },
                { value: 'medium', label: content.suitabilityTest?.options?.incomeMedium || '40.000–100.000 €', score: 3 },
                { value: 'high', label: content.suitabilityTest?.options?.incomeHigh || '>100.000 €', score: 6 }
            ]
        },
        {
            id: 7,
            block: 2,
            question: content.suitabilityTest?.questions?.[7] || 'Patrimonio neto aproximado',
            type: 'options',
            options: [
                { value: 'low', label: content.suitabilityTest?.options?.wealthLow || '<100.000 €', score: 1 },
                { value: 'medium', label: content.suitabilityTest?.options?.wealthMedium || '100.000–500.000 €', score: 3 },
                { value: 'high', label: content.suitabilityTest?.options?.wealthHigh || '>500.000 €', score: 6 }
            ]
        },
        {
            id: 8,
            block: 2,
            question: content.suitabilityTest?.questions?.[8] || 'Porcentaje de patrimonio que destinará a esta inversión',
            type: 'options',
            options: [
                { value: 'low', label: content.suitabilityTest?.options?.allocationLow || '<10 %', score: 1 },
                { value: 'medium', label: content.suitabilityTest?.options?.allocationMedium || '10–30 %', score: 3 },
                { value: 'high', label: content.suitabilityTest?.options?.allocationHigh || '>30 %', score: 6 }
            ]
        },
        {
            id: 9,
            block: 2,
            question: content.suitabilityTest?.questions?.[9] || 'Nivel de endeudamiento actual',
            type: 'options',
            options: [
                { value: 'low', label: content.suitabilityTest?.options?.debtLow || 'Bajo (<20 %)', score: 6 },
                { value: 'medium', label: content.suitabilityTest?.options?.debtMedium || 'Medio (20–50 %)', score: 3 },
                { value: 'high', label: content.suitabilityTest?.options?.debtHigh || 'Alto (>50 %)', score: 1 }
            ]
        },
        // Bloque 3: Objetivos de Inversión
        {
            id: 10,
            block: 3,
            blockTitle: content.suitabilityTest?.blocks?.objectives || 'Objetivos de Inversión',
            question: content.suitabilityTest?.questions?.[10] || '¿Cuál es el objetivo principal de la inversión?',
            type: 'options',
            options: [
                { value: 'preserve', label: content.suitabilityTest?.options?.goalPreserve || 'Preservar capital', score: 1 },
                { value: 'diversify', label: content.suitabilityTest?.options?.goalDiversify || 'Diversificar', score: 3 },
                { value: 'returns', label: content.suitabilityTest?.options?.goalReturns || 'Rentabilidad', score: 6 }
            ]
        },
        {
            id: 11,
            block: 3,
            question: content.suitabilityTest?.questions?.[11] || 'Horizonte temporal de inversión',
            type: 'options',
            options: [
                { value: 'short', label: content.suitabilityTest?.options?.horizonShort || '<1 año', score: 1 },
                { value: 'medium', label: content.suitabilityTest?.options?.horizonMedium || '1–3 años', score: 3 },
                { value: 'long', label: content.suitabilityTest?.options?.horizonLong || '>3 años', score: 6 }
            ]
        },
        {
            id: 12,
            block: 3,
            question: content.suitabilityTest?.questions?.[12] || '¿Requiere liquidez inmediata o puede mantener la inversión a largo plazo?',
            type: 'options',
            options: [
                { value: 'immediate', label: content.suitabilityTest?.options?.liquidityImmediate || 'Necesito liquidez', score: 1 },
                { value: 'maintain', label: content.suitabilityTest?.options?.liquidityMaintain || 'Puedo mantener', score: 3 },
                { value: 'longterm', label: content.suitabilityTest?.options?.liquidityLongterm || 'Largo plazo', score: 6 }
            ]
        },
        {
            id: 13,
            block: 3,
            question: content.suitabilityTest?.questions?.[13] || '¿Cuál es su expectativa de rentabilidad anual?',
            type: 'options',
            options: [
                { value: 'low', label: content.suitabilityTest?.options?.returnLow || '<3 %', score: 1 },
                { value: 'medium', label: content.suitabilityTest?.options?.returnMedium || '3–6 %', score: 3 },
                { value: 'high', label: content.suitabilityTest?.options?.returnHigh || '>6 %', score: 6 }
            ]
        },
        // Bloque 4: Capacidad y Tolerancia al Riesgo
        {
            id: 14,
            block: 4,
            blockTitle: content.suitabilityTest?.blocks?.risk || 'Capacidad y Tolerancia al Riesgo',
            question: content.suitabilityTest?.questions?.[14] || '¿Qué porcentaje de su inversión podría asumir perder sin comprometer su estabilidad financiera?',
            type: 'options',
            options: [
                { value: 'low', label: content.suitabilityTest?.options?.lossLow || '<10 %', score: 1 },
                { value: 'medium', label: content.suitabilityTest?.options?.lossMedium || '10–25 %', score: 3 },
                { value: 'high', label: content.suitabilityTest?.options?.lossHigh || '>25 %', score: 6 }
            ]
        },
        {
            id: 15,
            block: 4,
            question: content.suitabilityTest?.questions?.[15] || '¿Cómo reaccionaría ante una pérdida temporal del 10 % en el valor de su inversión?',
            type: 'options',
            options: [
                { value: 'withdraw', label: content.suitabilityTest?.options?.reactionWithdraw || 'Retiraría inmediatamente', score: 1 },
                { value: 'maintain', label: content.suitabilityTest?.options?.reactionMaintain || 'Mantendría', score: 3 },
                { value: 'increase', label: content.suitabilityTest?.options?.reactionIncrease || 'Aumentaría inversión', score: 6 }
            ]
        },
        {
            id: 16,
            block: 4,
            question: content.suitabilityTest?.questions?.[16] || '¿Cuál de las siguientes afirmaciones refleja mejor su perfil?',
            type: 'options',
            options: [
                { value: 'conservative', label: content.suitabilityTest?.options?.profileConservative || 'Prefiero seguridad y liquidez aunque gane menos', score: 1 },
                { value: 'balanced', label: content.suitabilityTest?.options?.profileBalanced || 'Busco rentabilidad equilibrada', score: 3 },
                { value: 'aggressive', label: content.suitabilityTest?.options?.profileAggressive || 'Asumo riesgos elevados por rentabilidad superior', score: 6 }
            ]
        }
    ];

    const handleAnswer = (questionId, value) => {
        setAnswers(prev => ({ ...prev, [questionId]: value }));
    };

    const calculateScore = () => {
        let totalScore = 0;

        questions.forEach(q => {
            if (q.type === 'yesno') {
                if (answers[q.id] === 'yes') {
                    totalScore += q.scores.yes;
                } else if (answers[q.id] === 'no') {
                    totalScore += q.scores.no;
                }
            } else if (q.type === 'options') {
                const selectedOption = q.options.find(o => o.value === answers[q.id]);
                if (selectedOption) {
                    totalScore += selectedOption.score;
                }
            }
        });

        return totalScore;
    };

    const getProfile = (score) => {
        if (score <= 30) {
            return {
                type: 'conservative',
                title: content.suitabilityTest?.profiles?.conservative?.title || 'Conservador',
                description: content.suitabilityTest?.profiles?.conservative?.description || 'Prioriza seguridad y liquidez, baja tolerancia a pérdidas',
                color: '#22c55e'
            };
        } else if (score <= 50) {
            return {
                type: 'moderate',
                title: content.suitabilityTest?.profiles?.moderate?.title || 'Moderado',
                description: content.suitabilityTest?.profiles?.moderate?.description || 'Acepta cierta volatilidad buscando rentabilidad superior',
                color: '#84cc16'
            };
        } else if (score <= 70) {
            return {
                type: 'dynamic',
                title: content.suitabilityTest?.profiles?.dynamic?.title || 'Dinámico',
                description: content.suitabilityTest?.profiles?.dynamic?.description || 'Dispuesto a asumir riesgos intermedios por diversificación',
                color: '#f59e0b'
            };
        } else if (score <= 85) {
            return {
                type: 'aggressive',
                title: content.suitabilityTest?.profiles?.aggressive?.title || 'Agresivo',
                description: content.suitabilityTest?.profiles?.aggressive?.description || 'Alta tolerancia al riesgo y horizonte de largo plazo',
                color: '#f97316'
            };
        } else {
            return {
                type: 'veryAggressive',
                title: content.suitabilityTest?.profiles?.veryAggressive?.title || 'Muy Agresivo',
                description: content.suitabilityTest?.profiles?.veryAggressive?.description || 'Busca rentabilidad elevada, asume volatilidad y liquidez limitada',
                color: '#ef4444'
            };
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const unanswered = questions.filter(q => !answers[q.id]);
        if (unanswered.length > 0) {
            alert(content.suitabilityTest?.errors?.incomplete || 'Por favor, responda todas las preguntas antes de continuar.');
            return;
        }

        const score = calculateScore();
        const profile = getProfile(score);

        setResult({ score, profile });
        setShowResult(true);
    };

    const handleReset = () => {
        setAnswers({});
        setShowResult(false);
        setResult(null);
    };

    // Group questions by block
    const groupedQuestions = questions.reduce((acc, q) => {
        if (!acc[q.block]) {
            acc[q.block] = { title: q.blockTitle, questions: [] };
        }
        acc[q.block].questions.push(q);
        return acc;
    }, {});

    if (showResult) {
        return (
            <section className="suitability-test">
                <div className="container">
                    <div className="result-card" style={{ borderColor: result.profile.color }}>
                        <div className="result-header">
                            <div className="profile-badge" style={{ background: result.profile.color }}>
                                {result.profile.title}
                            </div>
                        </div>

                        <h2 className="result-title" style={{ color: result.profile.color }}>
                            {content.suitabilityTest?.resultTitle || 'Perfil de Inversor'}
                        </h2>

                        <div className="result-score-display">
                            <span className="score-value">{result.score}</span>
                            <span className="score-label">{content.suitabilityTest?.scoreLabel || 'puntos'}</span>
                        </div>

                        <p className="result-description">{result.profile.description}</p>

                        <div className="profile-scale">
                            <div className="scale-labels">
                                <span>{content.suitabilityTest?.profiles?.conservative?.title || 'Conservador'}</span>
                                <span>{content.suitabilityTest?.profiles?.veryAggressive?.title || 'Muy Agresivo'}</span>
                            </div>
                            <div className="scale-bar">
                                <div
                                    className="scale-indicator"
                                    style={{
                                        left: `${Math.min((result.score / 96) * 100, 100)}%`,
                                        background: result.profile.color
                                    }}
                                ></div>
                            </div>
                            <div className="scale-numbers">
                                <span>0</span>
                                <span>30</span>
                                <span>50</span>
                                <span>70</span>
                                <span>85</span>
                                <span>96</span>
                            </div>
                        </div>

                        <div className="validity-notice">
                            <strong>📅 {content.suitabilityTest?.validity?.title || 'Vigencia'}:</strong> {content.suitabilityTest?.validity?.message || 'Este test tiene una vigencia de 24 meses, salvo que cambie su situación.'}
                        </div>

                        <div className="info-notice">
                            <strong>ℹ️ {content.suitabilityTest?.info?.title || 'Información'}:</strong> {content.suitabilityTest?.info?.message || 'Toda operación deberá estar dentro de su perfil de riesgo asignado. Si desea invertir fuera de su perfil, se aplicará el procedimiento de autorización reforzada.'}
                        </div>

                        <div className="result-actions">
                            <button className="btn btn-secondary" onClick={handleReset}>
                                {content.suitabilityTest?.buttons?.retry || 'Repetir Test'}
                            </button>
                            <button className="btn btn-primary" onClick={onBack}>
                                {content.suitabilityTest?.buttons?.back || 'Volver'}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="suitability-test">
            <div className="container">
                <button className="back-button" onClick={onBack}>
                    ← {content.suitabilityTest?.buttons?.back || 'Volver'}
                </button>

                <div className="test-header">
                    <h1>{content.suitabilityTest?.title || 'Test de Idoneidad'}</h1>
                    <p className="test-subtitle">
                        {content.suitabilityTest?.subtitle || '(Aplicable al servicio de asesoramiento o recomendación personalizada)'}
                    </p>
                    <div className="test-objective">
                        <strong>🔹 {content.suitabilityTest?.objectiveTitle || 'Objetivo'}:</strong> {content.suitabilityTest?.objective || 'Evaluar los conocimientos, experiencia, situación financiera, objetivos y tolerancia al riesgo del cliente para recomendar productos acordes a su perfil.'}
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="test-form">
                    {Object.entries(groupedQuestions).map(([blockNum, block]) => (
                        <div key={blockNum} className="question-block">
                            <h2 className="block-title">
                                <span className="block-number">{content.suitabilityTest?.blockLabel || 'Bloque'} {blockNum}</span>
                                {block.title}
                            </h2>

                            {block.questions.map((q) => (
                                <div key={q.id} className="question-card">
                                    <div className="question-number">{q.id}.</div>
                                    <div className="question-content">
                                        <p className="question-text">{q.question}</p>
                                        <div className="question-options">
                                            {q.type === 'yesno' ? (
                                                <>
                                                    <label className={`option-label ${answers[q.id] === 'yes' ? 'selected' : ''}`}>
                                                        <input
                                                            type="radio"
                                                            name={`question-${q.id}`}
                                                            value="yes"
                                                            checked={answers[q.id] === 'yes'}
                                                            onChange={() => handleAnswer(q.id, 'yes')}
                                                        />
                                                        <span className="option-checkbox"></span>
                                                        {content.suitabilityTest?.yes || 'Sí'}
                                                    </label>
                                                    <label className={`option-label ${answers[q.id] === 'no' ? 'selected' : ''}`}>
                                                        <input
                                                            type="radio"
                                                            name={`question-${q.id}`}
                                                            value="no"
                                                            checked={answers[q.id] === 'no'}
                                                            onChange={() => handleAnswer(q.id, 'no')}
                                                        />
                                                        <span className="option-checkbox"></span>
                                                        {content.suitabilityTest?.no || 'No'}
                                                    </label>
                                                </>
                                            ) : (
                                                q.options.map(opt => (
                                                    <label key={opt.value} className={`option-label ${answers[q.id] === opt.value ? 'selected' : ''}`}>
                                                        <input
                                                            type="radio"
                                                            name={`question-${q.id}`}
                                                            value={opt.value}
                                                            checked={answers[q.id] === opt.value}
                                                            onChange={() => handleAnswer(q.id, opt.value)}
                                                        />
                                                        <span className="option-checkbox"></span>
                                                        {opt.label}
                                                    </label>
                                                ))
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}

                    <div className="form-actions">
                        <button type="submit" className="btn btn-primary btn-lg">
                            {content.suitabilityTest?.buttons?.submit || 'Enviar Test'}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default SuitabilityTest;
