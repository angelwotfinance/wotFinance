import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Stats from './components/Stats';
import Team from './components/Team';
import Footer from './components/Footer';
import TestSelection from './pages/TestSelection';
import AdminLogin from './components/AdminLogin';
import AdminPanel from './components/AdminPanel';
import FinancialPlan from './pages/FinancialPlan';

const LandingPage = () => (
    <>
        <Hero />
        <HowItWorks />
        <Benefits />
        <Stats />
        <Team />
        <Footer />
    </>
);

// Wrapper to conditionally show Navbar
const AppContent = () => {
    const location = useLocation();
    const isAdminRoute = location.pathname.startsWith('/admin');

    return (
        <div className="App">
            {!isAdminRoute && <Navbar />}
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/comenzar" element={<TestSelection />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={<AdminPanel />} />
                <Route path="/admin" element={<AdminLogin />} />
                <Route path="/plan-financiero" element={<FinancialPlan />} />
            </Routes>
        </div>
    );
};

function App() {
    return (
        <LanguageProvider>
            <ThemeProvider>
                <Router>
                    <AppContent />
                </Router>
            </ThemeProvider>
        </LanguageProvider>
    );
}

export default App;

