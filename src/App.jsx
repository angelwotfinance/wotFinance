import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Stats from './components/Stats';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import TestSelection from './pages/TestSelection';

const LandingPage = () => (
    <>
        <Hero />
        <HowItWorks />
        <Benefits />
        <Stats />
        <Team />
        <Testimonials />
        <Footer />
    </>
);

function App() {
    return (
        <LanguageProvider>
            <ThemeProvider>
                <Router>
                    <div className="App">
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<LandingPage />} />
                            <Route path="/comenzar" element={<TestSelection />} />
                        </Routes>
                    </div>
                </Router>
            </ThemeProvider>
        </LanguageProvider>
    );
}

export default App;
