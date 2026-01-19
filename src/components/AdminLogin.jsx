import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './AdminLogin.css';

const AdminLogin = () => {
    const { content } = useLanguage();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // Por ahora, validación local simple
            // En producción, esto debería ser una llamada al backend
            const adminApiUrl = import.meta.env.VITE_ADMIN_API_URL;

            if (adminApiUrl) {
                const response = await fetch(`${adminApiUrl}/api/admin/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password })
                });

                if (response.ok) {
                    const data = await response.json();
                    sessionStorage.setItem('adminToken', data.token);
                    sessionStorage.setItem('adminUser', JSON.stringify(data.user));
                    navigate('/admin/dashboard');
                } else {
                    setError(content.admin?.login?.error || 'Credenciales incorrectas');
                }
            } else {
                // Modo desarrollo sin backend
                if (email === 'admin@wotfinance.com' && password === 'admin123') {
                    sessionStorage.setItem('adminToken', 'dev-token');
                    sessionStorage.setItem('adminUser', JSON.stringify({
                        name: 'Administrador',
                        email: email,
                        role: 'SUPER_ADMIN'
                    }));
                    navigate('/admin/dashboard');
                } else {
                    setError(content.admin?.login?.error || 'Credenciales incorrectas');
                }
            }
        } catch (err) {
            console.error('Login error:', err);
            setError(content.admin?.login?.errorConnection || 'Error de conexión');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admin-login-container">
            <div className="admin-login-card">
                <div className="admin-login-header">
                    <img src="/logo-wot.png" alt="WOT Finance" className="admin-login-logo" />
                    <h1 className="admin-login-title">
                        {content.admin?.login?.title || 'Panel de Administración'}
                    </h1>
                    <p className="admin-login-subtitle">
                        {content.admin?.login?.subtitle || 'Acceso exclusivo para administradores'}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="admin-login-form">
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">
                            {content.admin?.login?.email || 'Correo electrónico'}
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="form-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="admin@wotfinance.com"
                            required
                            disabled={loading}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="form-label">
                            {content.admin?.login?.password || 'Contraseña'}
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="form-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            required
                            disabled={loading}
                        />
                    </div>

                    {error && (
                        <div className="admin-login-error">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="btn btn-primary admin-login-btn"
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <span className="spinner"></span>
                                {content.admin?.login?.loading || 'Verificando...'}
                            </>
                        ) : (
                            content.admin?.login?.submit || 'Iniciar Sesión'
                        )}
                    </button>
                </form>

                <div className="admin-login-footer">
                    <a href="/" className="admin-login-back">
                        ← {content.admin?.login?.backToSite || 'Volver al sitio'}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
