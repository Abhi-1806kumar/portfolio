import React, { forwardRef } from 'react'
import "../styles/Hero.css"
import profile from '../data/profile'
// import TechCircle from '../components/TechCircle'
import { FaFilePdf, FaGithub, FaLinkedin, FaFileAlt, FaFileWord } from 'react-icons/fa'


const Hero = forwardRef(({ projectRef }, ref) => {
    const scrollToSection = (sectionRef) => {
        if (sectionRef && sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className='hero' ref={ref}>
            <div className="glow"></div>

            <div className="hero-content">
                {/* <span className="badge">Developer</span> */}

                <h1 className="hero-title">
                    Hey, I'm <span className="gradient-text">{profile.name}</span>
                </h1>

                <h2 className="hero-subtitle">{profile.title}</h2>
                <p className="hero-description">
                    {profile.tagline}
                </p>

                <div className="button-group">
                    <button className="hero-btn" onClick={() => scrollToSection(projectRef)}>
                        View Projects
                    </button>
                    <button className="hero-btn-outline" onClick={() => window.open(profile.resume, "_blank", "noopener,noreferrer")}>
                        View Resume
                    </button>
                </div>

                <div className="skills-strip">
                    {profile.heroSkills.map((s) => (
                        <span className="skill-badge" key={s}>{s}</span>
                    ))}
                </div>

                <div className='nav-btn-container'>
                    <a
                        href={profile.github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="nav-icon" />
                    </a>

                    <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin className="nav-icon" />
                    </a>

                    <a
                        href={profile.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFileAlt className="nav-icon" />
                    </a>
                </div>

            </div>

            <div className="scroll-indicator" onClick={() => scrollToSection(projectRef)}>
                <span className="scroll-text">Explore my work</span>
                <span className="scroll-arrow">↓</span>
            </div>

            {/* <div className="hero-visual">
                <TechCircle />
            </div> */}

        </section>
    )
})

export default Hero
