import {useState} from 'react';
import FluidCanvas from './FluidCanvas';
import AboutMe from './aboutMe';
import Portfolio from './Portfolio';
import Skills from './Skills';
import Contact from './Contact';
import avatar from '../assets/jefferson-avatar-v3.png';
import CVJ from '../assets/CVJ.pdf';

const sections = [
    {id: 'about', label: 'Moi', icon: '☺'},
    {id: 'projects', label: 'Projets', icon: '▣'},
    {id: 'skills', label: 'Compétences', icon: '◇'},
    {id: 'cv', label: 'Mon CV', icon: '↓'},
    {id: 'contact', label: 'Contact', icon: '✦'},
];

function InteractivePortfolio() {
    const [activeSection, setActiveSection] = useState(null);

    const openSection = (section) => {
        if (section === 'cv') {
            const link = document.createElement('a');
            link.href = CVJ;
            link.download = 'cv_jefferson_ABALO.pdf';
            link.click();
            return;
        }
        setActiveSection(section);
    };

    return (
        <main className="interactive-shell">
            <FluidCanvas />
            <div className="interactive-content">
                <header className="intro-copy">
                    <span className="status-pill"><i/> Disponible pour de nouveaux projets</span>
                    <p>Salut, je suis</p>
                    <h1>Jefferson Abalo</h1>
                    <h2>Développeur Full-Stack · Applications métier & SaaS</h2>
                </header>

                <div className="avatar-stage">
                    <span className="avatar-halo" aria-hidden="true"/>
                    <img src={avatar} alt="Avatar illustré de Jefferson Abalo tenant un ordinateur portable"/>
                </div>

                <nav className="shortcut-grid" aria-label="Explorer le portfolio">
                    {sections.map((section) => (
                        <button key={section.id} type="button" onClick={() => openSection(section.id)}>
                            <span aria-hidden="true">{section.icon}</span>
                            <strong>{section.label}</strong>
                        </button>
                    ))}
                </nav>
                <p className="background-name" aria-hidden="true">Jefferson</p>
            </div>

            {activeSection && (
                <div className="panel-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setActiveSection(null)}>
                    <section className="content-panel" role="dialog" aria-modal="true" aria-label="Contenu du portfolio">
                        <button className="panel-close" type="button" onClick={() => setActiveSection(null)} aria-label="Fermer">×</button>
                        {activeSection === 'about' && <AboutMe />}
                        {activeSection === 'projects' && <Portfolio />}
                        {activeSection === 'skills' && <Skills />}
                        {activeSection === 'contact' && <Contact />}
                    </section>
                </div>
            )}
        </main>
    );
}

export default InteractivePortfolio;
