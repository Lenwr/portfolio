import React from 'react';
import {AppText} from "../Constants";
import {laptop} from "../assets";

function AboutMe() {
    return (
        <section id="a-propos" className="scroll-mt-24 border-y border-white/10 bg-slate-900/60 px-6 py-24 md:px-10">
            <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
                <div className="relative mx-auto max-w-sm">
                    <div className="absolute -inset-5 rounded-full bg-violet-500/20 blur-3xl" />
                    <img src={laptop} className="relative mx-auto w-full max-w-xs drop-shadow-2xl" alt="Ordinateur portable représentant mon métier de développeur" loading="lazy"/>
                </div>
                <div>
                    <p className="section-kicker">À propos</p>
                    <h2 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">Je construis des produits numériques <span className="gradient-text">utiles et soignés.</span></h2>
                    <p className="mt-7 max-w-3xl text-base leading-8 text-slate-400 md:text-lg">{AppText.aboutMeDescription}</p>
                    <div className="mt-10 grid gap-4 sm:grid-cols-2">
                        <article className="glass-card p-6"><span className="text-2xl text-cyan-300">01</span><h3 className="mt-5 text-lg font-semibold">Applications métier</h3><p className="mt-2 text-sm leading-6 text-slate-400">Gestion des clients, stocks, colis, paiements et documents dans des interfaces adaptées aux équipes.</p></article>
                        <article className="glass-card p-6"><span className="text-2xl text-cyan-300">02</span><h3 className="mt-5 text-lg font-semibold">SaaS & logistique</h3><p className="mt-2 text-sm leading-6 text-slate-400">Architectures multi-entreprises, rôles utilisateurs, tracking, QR codes et automatisation des opérations.</p></article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
