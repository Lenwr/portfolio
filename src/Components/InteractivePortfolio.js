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
    const [question, setQuestion] = useState('');
    const [messages, setMessages] = useState([
        {role: 'assistant', content: 'Bonjour ! Posez-moi une question sur Jefferson, ses compétences ou ses projets.'},
    ]);
    const [isThinking, setIsThinking] = useState(false);

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

    const handleQuestion = async (event) => {
        event.preventDefault();
        const value = question.trim();
        if (!value || isThinking) return;
        const nextMessages = [...messages, {role: 'user', content: value}];
        setMessages(nextMessages);
        setQuestion('');
        setIsThinking(true);
        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({messages: nextMessages}),
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.error || 'Erreur de connexion');
            setMessages((current) => [...current, {role: 'assistant', content: data.answer}]);
        } catch (error) {
            setMessages((current) => [...current, {role: 'assistant', content: error.message}]);
        } finally {
            setIsThinking(false);
        }
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

                <div className="ai-chat" aria-live="polite">
                    {messages.slice(-3).map((message, index) => (
                        <p key={`${message.role}-${index}`} className={`chat-message ${message.role}`}>{message.content}</p>
                    ))}
                    {isThinking && <p className="chat-message assistant thinking">Jefferson AI réfléchit…</p>}
                </div>

                <form className="question-bar" onSubmit={handleQuestion}>
                    <label className="sr-only" htmlFor="portfolio-question">Que souhaitez-vous découvrir ?</label>
                    <input id="portfolio-question" value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="Posez-moi une question sur mon parcours…"/>
                    <button type="submit" disabled={isThinking || !question.trim()} aria-label="Envoyer la question à l’assistant IA">→</button>
                </form>

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
