import React, {useState} from 'react';
import {portfolio} from "../assets";
function Portfolio() {
    const [portfolioList,setPortfolioList]=useState(portfolio.filter(item=>item.featured));
    const filterPortfolio=(filter)=>{
        if(filter==='All') setPortfolioList(portfolio);
        else if(filter==='Featured') setPortfolioList(portfolio.filter(item=>item.featured));
        else setPortfolioList(portfolio.filter(item=>item.status==='Mission freelance'));
    }
    return (
        <section id="portfolio" className="scroll-mt-24 border-y border-white/10 bg-slate-900/60 px-6 py-24 md:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="section-kicker">Portfolio</p>
            <div className="mt-3 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div><h2 className="text-3xl font-bold md:text-5xl">Applications métier & produits SaaS</h2><p className="mt-4 max-w-2xl text-slate-400">Je transforme des processus concrets en outils simples : gestion logistique, tracking, stocks, tableaux de bord, QR codes et automatisations.</p></div>
              <div className="flex flex-wrap gap-2" aria-label="Filtrer les projets">
                <button onClick={()=>filterPortfolio('Featured')} className="filter-button">Sélection</button>
                <button onClick={()=>filterPortfolio('Freelance')} className="filter-button">Freelance</button>
                <button onClick={()=>filterPortfolio('All')} className="filter-button">Tous</button>
              </div>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
                {portfolioList.map((item,index)=>(
                    <article key={item.title} className="project-card group flex h-full flex-col overflow-hidden">
                        <div className={`project-cover project-cover-${index % 4}`}>
                          {item.imageUrl ? <img src={item.imageUrl} className="h-44 w-full object-contain transition duration-500 group-hover:scale-105" alt={`Identité visuelle du projet ${item.title}`} loading="lazy"/> : <span aria-hidden="true">{item.title.split(' ').map(word=>word[0]).slice(0,2).join('')}</span>}
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                          <div className="flex items-center justify-between gap-3"><span className="text-xs uppercase tracking-[.18em] text-blue-600">{item.type}</span><span className="rounded-full border border-slate-200 px-2 py-1 text-[10px] text-slate-500">{item.status}</span></div>
                          <h3 className="mt-4 text-2xl font-bold">{item.title}</h3>
                          <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{item.desc}</p>
                          {item.stack?.length > 0 && <div className="mt-5 flex flex-wrap gap-2">{item.stack.map(tech=><span key={tech} className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] text-slate-600">{tech}</span>)}</div>}
                          {item.url && <a className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800" href={item.url} target="_blank" rel="noopener noreferrer">Voir le projet <span aria-hidden="true">↗</span></a>}
                        </div>
                    </article>
                ))}
            </div>
          </div>
        </section>
    )

}

export default Portfolio;
