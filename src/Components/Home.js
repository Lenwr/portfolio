import React from 'react';
import {AppText} from "../Constants";
import {frontEnd} from '../assets'
import Typewriter from 'typewriter-effect';
import CVJ from '../assets/CVJ.pdf';

function Home() {
    const handleDownload = () => {
        // Mettez ici le lien vers votre CV
        const cvUrl = CVJ ;
        // Créez un élément <a> invisible pour déclencher le téléchargement
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'cv_jefferson_ABALO.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="accueil" className="relative scroll-mt-24 overflow-hidden px-6 py-20 md:px-10 md:py-28">
          <div className="hero-glow" aria-hidden="true" />
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
            <div className='relative z-10 flex flex-col items-start' >
                <p className="mb-6 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold uppercase tracking-[.18em] text-cyan-300">Disponible pour de nouveaux projets</p>
                <p className="text-lg font-medium text-slate-400">{AppText.hello}</p>
                <div className="mt-2 flex flex-wrap">
                    <h1 className="text-4xl font-bold leading-tight md:text-6xl">{AppText.Iam}<span className="sr-only">Jefferson Abalo, développeur frontend et intégrateur web</span>&nbsp;</h1>
                    <div aria-hidden="true" className="gradient-text text-4xl font-bold leading-tight md:text-6xl" >
                        <Typewriter
                            options={{
                                strings: [AppText.myName, AppText.frontEntDeveloper,"Intégrateur Web",],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>


                </div>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">{AppText.description}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                    <a href="#portfolio" className="mt-4 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400">
                        Voir mes projets
                    </a>
                    <button onClick={handleDownload} className="mt-4 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:border-white/40 hover:bg-white/5">
                        Télécharger mon CV
                    </button>
                </div>
                <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-500">
                  <span>React · Next.js · Vue</span><span>Paris, France</span><span>Frontend & No-code</span>
                </div>
            </div>
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/20 to-violet-500/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-2xl">
                <img src={frontEnd} className="w-full" alt="Illustration d'un espace de travail de développeur web"/>
              </div>
            </div>
          </div>
        </section>
    );
}

export default Home;
