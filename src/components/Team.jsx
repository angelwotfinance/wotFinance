import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Team.css';

const Team = () => {
    const { content } = useLanguage();
    return (
        <section id="equipo" className="team">
            <div className="container">
                <div className="section-header">
                    <h2>{content.team.title}</h2>
                    <p>{content.team.subtitle}</p>
                </div>

                <div className="team-grid">
                    {content.team.members.map((member, index) => (
                        <div key={index} className="team-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="team-image-wrapper">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="team-image"
                                />
                                <div className="team-overlay"></div>
                            </div>
                            <div className="team-info">
                                <h3 className="team-name">{member.name}</h3>
                                <h4 className="team-role">{member.role}</h4>
                                <p className="team-specialty">{member.specialty}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
