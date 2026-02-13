import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useInView } from 'framer-motion';
import './Stats.css';

const Stats = () => {
    const { content } = useLanguage();
    const [counters, setCounters] = useState({});
    const [isFinished, setIsFinished] = useState(false);

    // Ref for intersection observer
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-100px" });

    useEffect(() => {
        if (!isInView) {
            setCounters({});
            setIsFinished(false);
            return;
        }

        const duration = 1000;

        // Extract target values from content
        const targets = {};
        content.stats.items.forEach((item, index) => {
            targets[`stat${index}`] = parseInt(item.value);
        });

        const interval = 30; // Faster updates for smoother feel
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
                    // Easing out slightly for realism
                    current[key] = Math.min(current[key] + increments[key], targets[key]);
                });
                setCounters({ ...current });
            } else {
                // Ensure final values are exact
                setCounters(targets);
                setIsFinished(true); // Trigger color change
                clearInterval(timer);
            }
        }, interval);

        return () => clearInterval(timer);
    }, [isInView, content]);

    return (
        <section className="stats" ref={ref}>
            <div className="container">
                <div className="stats-grid">
                    {content.stats.items.map((stat, index) => (
                        <div
                            key={index}
                            className="stat-item fade-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={`stat-number ${isFinished ? 'finished' : ''}`}>
                                {Math.floor(counters[`stat${index}`] || 0)}{stat.suffix}
                            </div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
                {content.stats.disclaimer && (
                    <p className="stats-disclaimer">{content.stats.disclaimer}</p>
                )}
            </div>
        </section>
    );
};

export default Stats;

