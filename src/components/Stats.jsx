import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Stats.css';

const Stats = () => {
    const { content } = useLanguage();
    const [counters, setCounters] = useState({});

    useEffect(() => {
        const duration = 2000;

        // Extract target values from content
        const targets = {};
        content.stats.items.forEach((item, index) => {
            targets[`stat${index}`] = parseInt(item.value);
        });

        const interval = 50;
        const steps = duration / interval;

        const increments = {};
        Object.keys(targets).forEach(key => {
            increments[key] = targets[key] / steps;
        });

        let current = {};
        Object.keys(targets).forEach(key => {
            current[key] = 0;
        });

        let step = 0;

        const timer = setInterval(() => {
            step++;

            if (step <= steps) {
                Object.keys(targets).forEach(key => {
                    current[key] = Math.min(current[key] + increments[key], targets[key]);
                });
                setCounters({ ...current });
            } else {
                clearInterval(timer);
            }
        }, interval);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="stats">
            <div className="container">
                <div className="stats-grid">
                    {content.stats.items.map((stat, index) => (
                        <div
                            key={index}
                            className="stat-item fade-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="stat-number">
                                {Math.floor(counters[`stat${index}`] || 0)}{stat.suffix}
                            </div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;

