import React from 'react';
import {AppText, socialNetwork} from "../Constants";

function Footer() {
    return (
        <footer className="border-t border-white/10 bg-slate-950 px-6 py-10 md:px-10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
            <p className="text-sm text-slate-500">© {new Date().getFullYear()} {AppText.copywriteText}. Tous droits réservés.</p>
            <div className="flex gap-3">
                {socialNetwork.map((item,index)=>(
                    <a className="rounded-full border border-white/10 bg-white/5 p-2 transition hover:-translate-y-1 hover:border-cyan-300/40" key={item.id} href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`${item.name} de Jefferson Abalo (nouvel onglet)`}>
                        <img src={item.logo} className="h-6 w-6" alt="" />
                    </a>
                ))}
            </div>
          </div>
        </footer>

    );
}

export default Footer;
