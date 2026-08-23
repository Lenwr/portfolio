import React from 'react';

const skillGroups = [
    {
        title: 'Frontend',
        icon: '⌘',
        description: 'Interfaces métier rapides, responsive et maintenables.',
        primary: ['Vue.js 3', 'Nuxt', 'React', 'Next.js'],
        tools: ['JavaScript', 'TypeScript', 'Pinia', 'Redux', 'Tailwind CSS', 'DaisyUI', 'Vite'],
    },
    {
        title: 'Backend & données',
        icon: '◫',
        description: 'Authentification, logique serveur, données temps réel et APIs.',
        primary: ['Firebase', 'Supabase', 'Node.js'],
        tools: ['Firestore', 'Cloud Functions', 'PostgreSQL', 'Express', 'API REST', 'Zod'],
    },
    {
        title: 'IA & automatisation',
        icon: '✦',
        description: 'Intégration d’assistants contextualisés dans des produits web.',
        primary: ['OpenAI API', 'Responses API'],
        tools: ['Prompting', 'Contexte métier', 'Chat conversationnel', 'API sécurisée côté serveur'],
    },
    {
        title: 'No-code',
        icon: '◇',
        description: 'Prototypage, bases métier et mise en ligne rapide de solutions.',
        primary: ['Airtable', 'Softr'],
        tools: ['Automatisations', 'Workflows', 'Bases de données', 'Prototypes métier'],
    },
    {
        title: 'CMS, SEO & mesure',
        icon: '◎',
        description: 'Sites administrables, visibilité organique et mesure des performances.',
        primary: ['WordPress', 'Google Site Kit'],
        tools: ['Astra', 'Spectra', 'WPForms', 'Yoast SEO', 'Search Console', 'Google Analytics'],
    },
    {
        title: 'Fonctionnalités métier',
        icon: '↗',
        description: 'Briques concrètes utilisées dans les projets logistiques et SaaS.',
        primary: ['QR codes', 'Tracking', 'Gestion des rôles'],
        tools: ['Scan mobile', 'Codes-barres', 'PDF', 'CSV', 'Recharts', 'Twilio', 'SMS & WhatsApp'],
    },
];

function Skills() {
    return (
        <section className="scroll-mt-24 px-6 py-24 md:px-10" id="skills">
            <div className="mx-auto max-w-7xl">
                <p className="section-kicker">Expertise technique</p>
                <div className="mt-3 grid gap-6 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
                    <h2 className="text-3xl font-bold leading-tight md:text-5xl">Des technologies choisies pour résoudre des <span className="gradient-text">problèmes métier.</span></h2>
                    <p className="text-base leading-7 text-slate-400">Ma stack principale combine Vue.js, React, Firebase et Supabase. Je l’étends avec l’IA, le no-code et WordPress lorsque le besoin du projet le justifie.</p>
                </div>

                <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {skillGroups.map((group) => (
                        <article key={group.title} className="glass-card skill-group-card p-6">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="text-xl font-bold">{group.title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-slate-400">{group.description}</p>
                                </div>
                                <span className="skill-group-icon" aria-hidden="true">{group.icon}</span>
                            </div>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {group.primary.map((skill) => <span key={skill} className="skill-pill skill-pill-primary">{skill}</span>)}
                            </div>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {group.tools.map((skill) => <span key={skill} className="skill-pill">{skill}</span>)}
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-8 rounded-2xl border border-slate-200 bg-white/80 p-5 text-sm leading-6 text-slate-600">
                    <strong className="text-slate-900">Approche :</strong> analyse du besoin, parcours utilisateurs, architecture, développement, tests, sécurisation, déploiement et évolution du produit.
                </div>
            </div>
        </section>
    );
}

export default Skills;
