import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './AdminPanel.css';

const AdminPanel = () => {
    const { content } = useLanguage();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('dashboard');
    const [adminUser, setAdminUser] = useState(null);
    const [data, setData] = useState({
        users: [],
        convenienceTests: [],
        suitabilityTests: [],
        tasadorQueries: [],
        items: [],
        portfolios: [],
        providers: []
    });
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({
        totalUsers: 0,
        totalTests: 0,
        totalQueries: 0,
        totalItems: 0
    });

    useEffect(() => {
        const token = sessionStorage.getItem('adminToken');
        const user = sessionStorage.getItem('adminUser');

        if (!token) {
            navigate('/admin/login');
            return;
        }

        if (user) {
            setAdminUser(JSON.parse(user));
        }

        loadData();
    }, [navigate]);

    const loadData = async () => {
        setLoading(true);
        try {
            const adminApiUrl = import.meta.env.VITE_ADMIN_API_URL;

            if (adminApiUrl) {
                const token = sessionStorage.getItem('adminToken');
                const headers = {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                };

                const [usersRes, convTestsRes, suitTestsRes, queriesRes, itemsRes] = await Promise.all([
                    fetch(`${adminApiUrl}/api/admin/users`, { headers }),
                    fetch(`${adminApiUrl}/api/admin/tests/convenience`, { headers }),
                    fetch(`${adminApiUrl}/api/admin/tests/suitability`, { headers }),
                    fetch(`${adminApiUrl}/api/admin/queries`, { headers }),
                    fetch(`${adminApiUrl}/api/admin/items`, { headers })
                ]);

                const users = usersRes.ok ? await usersRes.json() : [];
                const convTests = convTestsRes.ok ? await convTestsRes.json() : [];
                const suitTests = suitTestsRes.ok ? await suitTestsRes.json() : [];
                const queries = queriesRes.ok ? await queriesRes.json() : [];
                const items = itemsRes.ok ? await itemsRes.json() : [];

                setData({
                    users,
                    convenienceTests: convTests,
                    suitabilityTests: suitTests,
                    tasadorQueries: queries,
                    items,
                    portfolios: [],
                    providers: []
                });

                setStats({
                    totalUsers: users.length,
                    totalTests: convTests.length + suitTests.length,
                    totalQueries: queries.length,
                    totalItems: items.length
                });
            } else {
                // Datos de demostración
                setData({
                    users: [
                        { id: 1, email: 'maria@example.com', name: 'María González', country: 'España', status: 'ACTIVE', registryDate: '2024-11-15' },
                        { id: 2, email: 'carlos@example.com', name: 'Carlos Ruiz', country: 'México', status: 'ACTIVE', registryDate: '2024-12-01' }
                    ],
                    convenienceTests: [
                        { id: 1, customerId: 1, score: 85.5, result: 'APT', testDate: '2024-12-20', language: 'es' },
                        { id: 2, customerId: 2, score: 62.0, result: 'CONDITIONAL', testDate: '2024-12-22', language: 'es' }
                    ],
                    suitabilityTests: [
                        { id: 1, customerId: 1, score: 72, profile: 'AGGRESSIVE', testDate: '2024-12-20', language: 'es' }
                    ],
                    tasadorQueries: [
                        { id: 1, category: 'vinos', description: 'Château Margaux 1990', success: true, createdAt: '2024-12-25', processingTimeMs: 2500 },
                        { id: 2, category: 'relojes', description: 'Rolex Submariner 1960', success: true, createdAt: '2024-12-26', processingTimeMs: 3100 }
                    ],
                    items: [
                        { id: 1, name: 'Château Lafite 1982', type: 'WINE', acquisitionValue: 5000, currentValue: 8500 },
                        { id: 2, name: 'Patek Philippe Nautilus', type: 'WATCH', acquisitionValue: 35000, currentValue: 52000 }
                    ],
                    portfolios: [],
                    providers: []
                });

                setStats({
                    totalUsers: 2,
                    totalTests: 3,
                    totalQueries: 2,
                    totalItems: 2
                });
            }
        } catch (err) {
            console.error('Error loading data:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        sessionStorage.removeItem('adminToken');
        sessionStorage.removeItem('adminUser');
        navigate('/admin/login');
    };

    const tabs = [
        { id: 'dashboard', label: content.admin?.tabs?.dashboard || 'Dashboard', icon: '📊' },
        { id: 'users', label: content.admin?.tabs?.users || 'Usuarios', icon: '👥' },
        { id: 'tests', label: content.admin?.tabs?.tests || 'Tests', icon: '📝' },
        { id: 'queries', label: content.admin?.tabs?.queries || 'Consultas Tasador', icon: '💎' },
        { id: 'items', label: content.admin?.tabs?.items || 'Items', icon: '🏆' }
    ];

    const renderDashboard = () => (
        <div className="admin-dashboard">
            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-icon">👥</div>
                    <div className="stat-content">
                        <span className="stat-value">{stats.totalUsers}</span>
                        <span className="stat-label">{content.admin?.stats?.users || 'Usuarios Registrados'}</span>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">📝</div>
                    <div className="stat-content">
                        <span className="stat-value">{stats.totalTests}</span>
                        <span className="stat-label">{content.admin?.stats?.tests || 'Tests Completados'}</span>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">💎</div>
                    <div className="stat-content">
                        <span className="stat-value">{stats.totalQueries}</span>
                        <span className="stat-label">{content.admin?.stats?.queries || 'Consultas Tasador'}</span>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">🏆</div>
                    <div className="stat-content">
                        <span className="stat-value">{stats.totalItems}</span>
                        <span className="stat-label">{content.admin?.stats?.items || 'Items en Catálogo'}</span>
                    </div>
                </div>
            </div>

            <div className="recent-activity">
                <h3 className="section-title">{content.admin?.recentActivity || 'Actividad Reciente'}</h3>
                <div className="activity-list">
                    {data.tasadorQueries.slice(0, 5).map((query, index) => (
                        <div key={index} className="activity-item">
                            <span className="activity-icon">💎</span>
                            <span className="activity-text">
                                Consulta de <strong>{query.category}</strong>: {query.description.substring(0, 50)}...
                            </span>
                            <span className="activity-time">{new Date(query.createdAt).toLocaleDateString()}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderUsers = () => (
        <div className="admin-table-container">
            <h3 className="section-title">{content.admin?.sections?.users || 'Usuarios Registrados'}</h3>
            <table className="admin-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>{content.admin?.tableHeaders?.email || 'Email'}</th>
                        <th>{content.admin?.tableHeaders?.name || 'Nombre'}</th>
                        <th>{content.admin?.tableHeaders?.country || 'País'}</th>
                        <th>{content.admin?.tableHeaders?.status || 'Estado'}</th>
                        <th>{content.admin?.tableHeaders?.registryDate || 'Fecha Registro'}</th>
                    </tr>
                </thead>
                <tbody>
                    {data.users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.name}</td>
                            <td>{user.country}</td>
                            <td>
                                <span className={`status-badge status-${user.status?.toLowerCase()}`}>
                                    {user.status}
                                </span>
                            </td>
                            <td>{new Date(user.registryDate).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    const renderTests = () => (
        <div className="admin-table-container">
            <h3 className="section-title">{content.admin?.sections?.convenienceTests || 'Tests de Conveniencia'}</h3>
            <table className="admin-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>{content.admin?.tableHeaders?.customerId || 'Cliente ID'}</th>
                        <th>{content.admin?.tableHeaders?.score || 'Puntuación'}</th>
                        <th>{content.admin?.tableHeaders?.result || 'Resultado'}</th>
                        <th>{content.admin?.tableHeaders?.date || 'Fecha'}</th>
                        <th>{content.admin?.tableHeaders?.language || 'Idioma'}</th>
                    </tr>
                </thead>
                <tbody>
                    {data.convenienceTests.map((test) => (
                        <tr key={test.id}>
                            <td>{test.id}</td>
                            <td>{test.customerId}</td>
                            <td>{test.score}%</td>
                            <td>
                                <span className={`result-badge result-${test.result?.toLowerCase()}`}>
                                    {test.result}
                                </span>
                            </td>
                            <td>{new Date(test.testDate).toLocaleDateString()}</td>
                            <td>{test.language?.toUpperCase()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h3 className="section-title" style={{ marginTop: '2rem' }}>
                {content.admin?.sections?.suitabilityTests || 'Tests de Idoneidad'}
            </h3>
            <table className="admin-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>{content.admin?.tableHeaders?.customerId || 'Cliente ID'}</th>
                        <th>{content.admin?.tableHeaders?.score || 'Puntuación'}</th>
                        <th>{content.admin?.tableHeaders?.profile || 'Perfil'}</th>
                        <th>{content.admin?.tableHeaders?.date || 'Fecha'}</th>
                        <th>{content.admin?.tableHeaders?.language || 'Idioma'}</th>
                    </tr>
                </thead>
                <tbody>
                    {data.suitabilityTests.map((test) => (
                        <tr key={test.id}>
                            <td>{test.id}</td>
                            <td>{test.customerId}</td>
                            <td>{test.score} pts</td>
                            <td>
                                <span className={`profile-badge profile-${test.profile?.toLowerCase()}`}>
                                    {test.profile}
                                </span>
                            </td>
                            <td>{new Date(test.testDate).toLocaleDateString()}</td>
                            <td>{test.language?.toUpperCase()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    const renderQueries = () => (
        <div className="admin-table-container">
            <h3 className="section-title">{content.admin?.sections?.queries || 'Consultas al Tasador'}</h3>
            <table className="admin-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>{content.admin?.tableHeaders?.category || 'Categoría'}</th>
                        <th>{content.admin?.tableHeaders?.description || 'Descripción'}</th>
                        <th>{content.admin?.tableHeaders?.success || 'Éxito'}</th>
                        <th>{content.admin?.tableHeaders?.processingTime || 'Tiempo (ms)'}</th>
                        <th>{content.admin?.tableHeaders?.date || 'Fecha'}</th>
                    </tr>
                </thead>
                <tbody>
                    {data.tasadorQueries.map((query) => (
                        <tr key={query.id}>
                            <td>{query.id}</td>
                            <td>
                                <span className="category-badge">{query.category}</span>
                            </td>
                            <td title={query.description}>{query.description.substring(0, 60)}...</td>
                            <td>
                                <span className={`success-badge ${query.success ? 'success' : 'error'}`}>
                                    {query.success ? '✓' : '✗'}
                                </span>
                            </td>
                            <td>{query.processingTimeMs}</td>
                            <td>{new Date(query.createdAt).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    const renderItems = () => (
        <div className="admin-table-container">
            <h3 className="section-title">{content.admin?.sections?.items || 'Items del Catálogo'}</h3>
            <table className="admin-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>{content.admin?.tableHeaders?.name || 'Nombre'}</th>
                        <th>{content.admin?.tableHeaders?.type || 'Tipo'}</th>
                        <th>{content.admin?.tableHeaders?.acquisitionValue || 'Valor Adquisición'}</th>
                        <th>{content.admin?.tableHeaders?.currentValue || 'Valor Actual'}</th>
                        <th>{content.admin?.tableHeaders?.appreciation || 'Revalorización'}</th>
                    </tr>
                </thead>
                <tbody>
                    {data.items.map((item) => {
                        const appreciation = ((item.currentValue - item.acquisitionValue) / item.acquisitionValue * 100).toFixed(1);
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>
                                    <span className="type-badge">{item.type}</span>
                                </td>
                                <td>€{item.acquisitionValue?.toLocaleString()}</td>
                                <td>€{item.currentValue?.toLocaleString()}</td>
                                <td>
                                    <span className={`appreciation ${parseFloat(appreciation) >= 0 ? 'positive' : 'negative'}`}>
                                        {parseFloat(appreciation) >= 0 ? '+' : ''}{appreciation}%
                                    </span>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );

    const renderContent = () => {
        if (loading) {
            return (
                <div className="admin-loading">
                    <div className="spinner-large"></div>
                    <p>{content.admin?.loading || 'Cargando datos...'}</p>
                </div>
            );
        }

        switch (activeTab) {
            case 'dashboard':
                return renderDashboard();
            case 'users':
                return renderUsers();
            case 'tests':
                return renderTests();
            case 'queries':
                return renderQueries();
            case 'items':
                return renderItems();
            default:
                return renderDashboard();
        }
    };

    return (
        <div className="admin-panel">
            <aside className="admin-sidebar">
                <div className="sidebar-header">
                    <img src="/logo-wot.png" alt="WOT Finance" className="sidebar-logo" />
                    <h2 className="sidebar-title">Admin Panel</h2>
                </div>

                <nav className="sidebar-nav">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            <span className="nav-icon">{tab.icon}</span>
                            <span className="nav-label">{tab.label}</span>
                        </button>
                    ))}
                </nav>

                <div className="sidebar-footer">
                    {adminUser && (
                        <div className="admin-info">
                            <span className="admin-name">{adminUser.name}</span>
                            <span className="admin-role">{adminUser.role}</span>
                        </div>
                    )}
                    <button className="logout-btn" onClick={handleLogout}>
                        🚪 {content.admin?.logout || 'Cerrar Sesión'}
                    </button>
                </div>
            </aside>

            <main className="admin-main">
                <header className="admin-header">
                    <h1 className="page-title">
                        {tabs.find(t => t.id === activeTab)?.icon} {tabs.find(t => t.id === activeTab)?.label}
                    </h1>
                    <button className="refresh-btn" onClick={loadData}>
                        🔄 {content.admin?.refresh || 'Actualizar'}
                    </button>
                </header>

                <div className="admin-content">
                    {renderContent()}
                </div>
            </main>
        </div>
    );
};

export default AdminPanel;
