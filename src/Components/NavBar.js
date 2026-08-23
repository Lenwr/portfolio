import React, {useState} from 'react';
import {logo} from '../assets'

const links = [
    {label: 'Accueil', href: '#accueil'},
    {label: 'À propos', href: '#a-propos'},
    {label: 'Compétences', href: '#skills'},
    {label: 'Portfolio', href: '#portfolio'},
    {label: 'Me contacter', href: '#contact'},
];

function NavBar() {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 px-5 py-4 backdrop-blur-xl md:px-10" aria-label="Navigation principale">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <a href="#accueil" aria-label="Retour à l'accueil">
                <img src={logo} alt="Jefferson Abalo" className="h-9 w-auto rounded bg-white px-2 py-1"/>
            </a>
            <ul className="hidden items-center gap-6 md:flex">
                {links.map((link) => (
                    <li key={link.href}><a className="text-sm font-medium text-slate-300 transition-colors hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400" href={link.href}>{link.label}</a></li>
                ))}
            </ul>
            <div className="md:hidden">
                <button type="button" aria-label={toggle ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={toggle} aria-controls="mobile-menu" onClick={()=>setToggle(!toggle)} className="rounded p-2 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400">
                {!toggle?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true"
                         viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
                        <path strokeLinecap="round" strokeLinejoin= "round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true"
                    viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                }</button>
                {
                    toggle?
                        <ul id="mobile-menu" className="absolute left-4 right-4 top-16 flex flex-col rounded-2xl border border-white/10 bg-slate-900 p-3 shadow-2xl">
                            {links.map((link) => (
                                <li key={link.href}><a className="block rounded-xl p-3 font-medium text-slate-200 hover:bg-white/5 hover:text-cyan-300" href={link.href} onClick={()=>setToggle(false)}>{link.label}</a></li>
                            ))}
                        </ul>
                        :null
                }
            </div>
          </div>
        </nav>
    );
}

export default NavBar;
