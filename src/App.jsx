import React from 'react';
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

function App() {
    return (
        <LanguageProvider>
            <ThemeProvider>
                <div className="App">
                    <Navbar />
                    <Hero />
                    <HowItWorks />
                    <Benefits />
                    <Stats />
                    <Team />
                    <Testimonials />
                    <Footer />
                </div>
            </ThemeProvider>
        </LanguageProvider>
    );
}

export default App;


