import React, { useState } from 'react';
import './TasadorModal.css';

const TasadorModal = ({ isOpen, onClose }) => {
    const [categoria, setCategoria] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [tasacion, setTasacion] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const categorias = [
        { value: 'vinos', label: 'Vinos' },
        { value: 'whiskies', label: 'Whiskies' },
        { value: 'joyas-antiguas', label: 'Joyas Antiguas' },
        { value: 'relojes', label: 'Relojes' },
        { value: 'coches-clasicos', label: 'Coches Clásicos' }
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!categoria || !descripcion.trim()) {
            setError('Por favor, selecciona una categoría y proporciona una descripción.');
            return;
        }

        setLoading(true);
        setError('');
        setTasacion('');

        try {
            const response = await fetch('https://tasador-service-303276520902.europe-west1.run.app/api/tasacion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    descripcionActivo: `Categoría: ${categoria}\n\n${descripcion}`
                })
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();
            setTasacion(data.tasacion || data.mensaje || 'No se pudo obtener la tasación.');
        } catch (err) {
            setError('Error al conectar con el servicio de tasación. Por favor, intenta de nuevo.');
            console.error('Error:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleClose = () => {
        setCategoria('');
        setDescripcion('');
        setTasacion('');
        setError('');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={handleClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2 className="modal-title">
                        <span className="modal-icon">🤖</span>
                        Tasador IA
                    </h2>
                    <button className="modal-close" onClick={handleClose}>
                        ✕
                    </button>
                </div>

                <div className="modal-body">
                    <p className="modal-description">
                        Utiliza nuestra IA especializada para obtener una tasación profesional de tus activos de lujo.
                    </p>

                    <form onSubmit={handleSubmit} className="tasador-form">
                        <div className="form-group">
                            <label htmlFor="categoria" className="form-label">
                                Categoría del Activo
                            </label>
                            <select
                                id="categoria"
                                className="form-select"
                                value={categoria}
                                onChange={(e) => setCategoria(e.target.value)}
                                disabled={loading}
                            >
                                <option value="">Selecciona una categoría...</option>
                                {categorias.map((cat) => (
                                    <option key={cat.value} value={cat.value}>
                                        {cat.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="descripcion" className="form-label">
                                Descripción del Activo
                            </label>
                            <textarea
                                id="descripcion"
                                className="form-textarea"
                                rows="6"
                                placeholder="Describe tu activo en detalle: marca, modelo, año, condición, características especiales, etc."
                                value={descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}
                                disabled={loading}
                            />
                        </div>

                        {error && (
                            <div className="alert alert-error">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="btn btn-primary btn-lg btn-submit"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <span className="spinner"></span>
                                    Analizando...
                                </>
                            ) : (
                                '✨ Obtener Tasación'
                            )}
                        </button>
                    </form>

                    {tasacion && (
                        <div className="tasacion-result">
                            <h3 className="result-title">
                                📊 Tasación Profesional
                            </h3>
                            <div className="result-content">
                                {tasacion}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TasadorModal;
