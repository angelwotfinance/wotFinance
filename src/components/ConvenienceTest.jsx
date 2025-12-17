import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './ConvenienceTest.css';

const ConvenienceTest = ({ onBack }) => {
    const { content } = useLanguage();
    const [answers, setAnswers] = useState({});
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState(null);

    const questions = [
        // Bloque 1: Conocimientos Financieros Generales
        {
            id: 1,
            block: 1,
            blockTitle: content.convenienceTest?.blocks?.financial || 'Conocimientos Financieros Generales',
            question: content.convenienceTest?.questions?.[1] || '¿Tiene formación académica o profesional en materia financiera, económica o de inversión?',
            type: 'yesno',
            correctAnswer: 'yes'
        },
        {
            id: 2,
            block: 1,
            question: content.convenienceTest?.questions?.[2] || '¿Conoce los conceptos de rentabilidad, riesgo y diversificación de una cartera de inversión?',
            type: 'yesno',
            correctAnswer: 'yes'
        },
        {
            id: 3,
            block: 1,
            question: content.convenienceTest?.questions?.[3] || '¿Sabe que el valor de una inversión puede disminuir y generar pérdidas parciales o totales?',
            type: 'yesno',
            correctAnswer: 'yes'
        },
        // Bloque 2: Experiencia en Inversiones
        {
            id: 4,
            block: 2,
            blockTitle: content.convenienceTest?.blocks?.experience || 'Experiencia en Inversiones',
            question: content.convenienceTest?.questions?.[4] || '¿Ha invertido anteriormente en activos reales o tangibles (vino, arte, relojes, joyas, coches clásicos, etc.)?',
            type: 'yesno',
            correctAnswer: 'yes'
        },
        {
            id: 5,
            block: 2,
            question: content.convenienceTest?.questions?.[5] || '¿Durante cuánto tiempo ha mantenido inversiones en este tipo de productos?',
            type: 'options',
            options: [
                { value: 'less1', label: content.convenienceTest?.options?.less1year || '<1 año', score: 0 },
                { value: '1to3', label: content.convenienceTest?.options?.['1to3years'] || '1–3 años', score: 0.5 },
                { value: 'more3', label: content.convenienceTest?.options?.more3years || '>3 años', score: 1 }
            ]
        },
        {
            id: 6,
            block: 2,
            question: content.convenienceTest?.questions?.[6] || '¿Con qué frecuencia ha realizado operaciones de inversión en los últimos 3 años?',
            type: 'options',
            options: [
                { value: 'none', label: content.convenienceTest?.options?.none || 'Ninguna', score: 0 },
                { value: '1to5', label: content.convenienceTest?.options?.['1to5'] || '1–5', score: 0.5 },
                { value: 'more5', label: content.convenienceTest?.options?.more5 || '>5', score: 1 }
            ]
        },
        {
            id: 7,
            block: 2,
            question: content.convenienceTest?.questions?.[7] || '¿Cuál ha sido el importe medio de las inversiones realizadas?',
            type: 'options',
            options: [
                { value: 'less10k', label: content.convenienceTest?.options?.less10k || '<10.000 €', score: 0.33 },
                { value: '10kto50k', label: content.convenienceTest?.options?.['10kto50k'] || '10.000–50.000 €', score: 0.66 },
                { value: 'more50k', label: content.convenienceTest?.options?.more50k || '>50.000 €', score: 1 }
            ]
        },
        // Bloque 3: Comprensión de Productos y Riesgos
        {
            id: 8,
            block: 3,
            blockTitle: content.convenienceTest?.blocks?.risks || 'Comprensión de Productos y Riesgos',
            question: content.convenienceTest?.questions?.[8] || '¿Conoce los riesgos de iliquidez y volatilidad de los activos tangibles no cotizados?',
            type: 'yesno',
            correctAnswer: 'yes'
        },
        {
            id: 9,
            block: 3,
            question: content.convenienceTest?.questions?.[9] || '¿Entiende que estos activos pueden carecer de mercado secundario inmediato?',
            type: 'yesno',
            correctAnswer: 'yes'
        },
        {
            id: 10,
            block: 3,
            question: content.convenienceTest?.questions?.[10] || '¿Comprende los costes asociados a su mantenimiento, custodia y seguro?',
            type: 'yesno',
            correctAnswer: 'yes'
        },
        {
            id: 11,
            block: 3,
            question: content.convenienceTest?.questions?.[11] || '¿Es consciente de que los precios pueden variar en función del estado físico, autenticidad o demanda del activo?',
            type: 'yesno',
            correctAnswer: 'yes'
        },
        // Bloque 4: Nivel de Complejidad
        {
            id: 12,
            block: 4,
            blockTitle: content.convenienceTest?.blocks?.complexity || 'Nivel de Complejidad',
            question: content.convenienceTest?.questions?.[12] || '¿Entiende la documentación contractual asociada a la titularidad y conservación de un activo tangible?',
            type: 'yesno',
            correctAnswer: 'yes'
        },
        {
            id: 13,
            block: 4,
            question: content.convenienceTest?.questions?.[13] || '¿Conoce la diferencia entre inversión directa, fraccionada o asesorada?',
            type: 'yesno',
            correctAnswer: 'yes'
        },
        {
            id: 14,
            block: 4,
            question: content.convenienceTest?.questions?.[14] || '¿Sabe que no existe garantía de rentabilidad mínima en estos productos?',
            type: 'yesno',
            correctAnswer: 'yes'
        }
    ];

    const handleAnswer = (questionId, value) => {
        setAnswers(prev => ({ ...prev, [questionId]: value }));
    };

    const calculateScore = () => {
        let totalPoints = 0;
        let maxPoints = 0;

        questions.forEach(q => {
            if (q.type === 'yesno') {
                maxPoints += 1;
                if (answers[q.id] === q.correctAnswer) {
                    totalPoints += 1;
                }
            } else if (q.type === 'options') {
                maxPoints += 1;
                const selectedOption = q.options.find(o => o.value === answers[q.id]);
                if (selectedOption) {
                    totalPoints += selectedOption.score;
                }
            }
        });

        return (totalPoints / maxPoints) * 100;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if all questions are answered
        const unanswered = questions.filter(q => !answers[q.id]);
        if (unanswered.length > 0) {
            alert(content.convenienceTest?.errors?.incomplete || 'Por favor, responda todas las preguntas antes de continuar.');
            return;
        }

        const score = calculateScore();
        let resultType, resultTitle, resultMessage, resultAction;

        if (score >= 80) {
            resultType = 'apt';
            resultTitle = content.convenienceTest?.results?.apt?.title || 'APTO';
            resultMessage = content.convenienceTest?.results?.apt?.message || 'Puede contratar productos no asesorados';
            resultAction = content.convenienceTest?.results?.apt?.action || 'Continuar con la contratación';
        } else if (score >= 50) {
            resultType = 'conditional';
            resultTitle = content.convenienceTest?.results?.conditional?.title || 'APTO CONDICIONADO';
            resultMessage = content.convenienceTest?.results?.conditional?.message || 'Contratación permitida con advertencia de riesgos';
            resultAction = content.convenienceTest?.results?.conditional?.action || 'Continuar con advertencias';
        } else {
            resultType = 'notapt';
            resultTitle = content.convenienceTest?.results?.notapt?.title || 'NO APTO';
            resultMessage = content.convenienceTest?.results?.notapt?.message || 'Requiere asesoramiento obligatorio o denegación de contratación';
            resultAction = content.convenienceTest?.results?.notapt?.action || 'Solicitar asesoramiento';
        }

        setResult({ type: resultType, title: resultTitle, message: resultMessage, action: resultAction, score: Math.round(score) });
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
            <section className="convenience-test">
                <div className="container">
                    <div className={`result-card result-${result.type}`}>
                        <div className="result-icon">
                            {result.type === 'apt' && '✅'}
                            {result.type === 'conditional' && '⚠️'}
                            {result.type === 'notapt' && '❌'}
                        </div>
                        <h2 className="result-title">{result.title}</h2>
                        <div className="result-score">
                            {content.convenienceTest?.scoreLabel || 'Puntuación'}: {result.score}%
                        </div>
                        <p className="result-message">{result.message}</p>

                        {result.type === 'notapt' && (
                            <div className="result-warning">
                                <strong>⚠️ {content.convenienceTest?.warning?.title || 'Advertencia'}:</strong> {content.convenienceTest?.warning?.message || 'En caso de resultado "No Apto", se generará una advertencia automática y se bloqueará la contratación sin asesoramiento, conforme al artículo 62 del Reglamento Delegado (UE) 2017/565.'}
                            </div>
                        )}

                        <div className="result-actions">
                            <button className="btn btn-secondary" onClick={handleReset}>
                                {content.convenienceTest?.buttons?.retry || 'Repetir Test'}
                            </button>
                            <button className="btn btn-primary" onClick={onBack}>
                                {content.convenienceTest?.buttons?.back || 'Volver'}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="convenience-test">
            <div className="container">
                <button className="back-button" onClick={onBack}>
                    ← {content.convenienceTest?.buttons?.back || 'Volver'}
                </button>

                <div className="test-header">
                    <h1>{content.convenienceTest?.title || 'Test de Conveniencia'}</h1>
                    <p className="test-subtitle">
                        {content.convenienceTest?.subtitle || '(Aplicable a comercialización simple o contratación no asesorada)'}
                    </p>
                    <div className="test-objective">
                        <strong>🔹 {content.convenienceTest?.objectiveTitle || 'Objetivo'}:</strong> {content.convenienceTest?.objective || 'Evaluar si el cliente posee los conocimientos y la experiencia suficientes para comprender los riesgos de los productos financieros ofrecidos fuera del marco del asesoramiento personalizado.'}
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="test-form">
                    {Object.entries(groupedQuestions).map(([blockNum, block]) => (
                        <div key={blockNum} className="question-block">
                            <h2 className="block-title">
                                <span className="block-number">{content.convenienceTest?.blockLabel || 'Bloque'} {blockNum}</span>
                                {block.title}
                            </h2>

                            {block.questions.map((q, idx) => (
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
                                                        {content.convenienceTest?.yes || 'Sí'}
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
                                                        {content.convenienceTest?.no || 'No'}
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
                            {content.convenienceTest?.buttons?.submit || 'Enviar Test'}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ConvenienceTest;
