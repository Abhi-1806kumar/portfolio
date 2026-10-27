import React, { forwardRef } from 'react'
import '../styles/About.css'
import profile from '../data/profile'

const About = forwardRef((props, ref) => {
    const technologies = profile.technologies;

    return (
        <section className="about-section" id="about" ref={ref}>
            {/* Background glows matching the Hero style */}
            <div className="about-glow about-glow-left" />
            <div className="about-glow about-glow-right" />

            {/* Section Header */}
            <div className="about-header">
                <span className="about-badge">MY JOURNEY</span>
                <h2 className="about-title">
                    Building Toward a Career in <span className="gradient-text"> {profile.aboutTitle}</span>
                </h2>
                <div className="about-divider" />
            </div>

            {/* Main Content Layout */}
            <div className="about-content">
                {/* Left Column: Intro & Status */}
                <div className="about-col-left">
                    <div className="about-intro">
                        {profile.about.map((p, i) => <p key={i}>{p}</p>)}
                    </div>

                    <div className="about-availability">
                        <span className="about-status-dot" />
                        <span className="about-status-text">Open to Opportunities</span>
                    </div>
                </div>

                {/* Right Column: Education & Technologies */}
                <div className="about-col-right">
                    {/* Education Block */}
                    <div className="about-segment">
                        <h3 className="about-segment-title">EDUCATION</h3>
                        <div className="about-education-info">
                            <h4 className="about-degree">{profile.education.degree}</h4>
                            <p className="about-edu-detail">{profile.education.detail}</p>
                            <p className="about-edu-detail font-medium">{profile.education.extra}</p>
                        </div>
                    </div>

                    {/* Technologies Block */}
                    <div className="about-segment">
                        <h3 className="about-segment-title">TECHNOLOGIES</h3>
                        <div className="about-tech-list">
                            {technologies.map((tech) => (
                                <span className="about-tech-badge" key={tech}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
})

export default About
