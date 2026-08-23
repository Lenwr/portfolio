import logo from './logo.png'
import frontEnd from './frontEnd.png'
import wave from './wave .svg'
import laptop from './laptop.png'
import homeImage from './homeImage.png'
import book from './book.png'
import skill from './skill.png'

import angular from './angular.png'
import ionic from './ionic.png'
import firebase from './firebase.png'
import typescript from './typescript.png'
import mysql from './mysql.png'
import nodejs from './nodejs.png'
import gitlab from './gitlab.jpg'
import android from './android.png'
import react from './react.png'
import robo from './robo.png'
import cognizantLogo from './cognizantLogo.png'
import wellsLogo from './wells.png'
import aflacLogo from './aflac.png'
import wiuLogo from './wiu.png'
import phone from './phone.png'
import youtube from './youtube.png'
import instagram from './Instagram.png'
import facebook from './Facebook.png'
import vue from './Vue.png'
import softr from './softr.png'
import expressJs from './express.png'
import airtable from './airtable.png'
import javascript from './javascript.png'
import linkedin from './LinkedIn.png'
import github from './github.png'
import contactusbg from './contactusbg.png'
import logoLemonTri from'./logoLemonTri.png'
import logoMapharma from './banniereMapharma.jpeg'
import logoWefretafrica from './logoWefretafrica.png'
import logoTracksend from './logo-tracksend.png'
import logoAaronTravel from './logo-gate.png'
import logoYsab from './logo-ysab.jpg'
import logoSowOcaz from './logo-sow-ocaz.png'
import logoTerangaCargo from './logo-teranga-cargo.jpg'
import logoADCO from './logoADCO.svg'
import nextJs from "./next-js.svg"
import logoPropreetvert from "./logoPropreetvert .png"

export {
    logo,
    frontEnd,
    wave,
    laptop,
    nextJs,
    logoPropreetvert
}

export const aboutSection = [
    {
        id: 1,
        image: "https://img.freepik.com/vecteurs-libre/gens-dessinent-elements-page-web-smartphone-ecran-lcd-developpement-frontal-il-concept-processus-developpement-logiciel-palette-bleu-corail-rose-illustration-vectorielle_335657-1640.jpg?t=st=1715768863~exp=1715772463~hmac=fe21782e0b61c55941f37111f2b1ab7f125d9ace974afd0f278c7fa4c55bd03d&w=1800",
        title: "Développement web frontEnd ",
        description:""
    },
    {
        id: 2,
        image: "https://d1rluokkqqu56n.cloudfront.net/wpapp/uploads/2023/08/07144831/no-code-1.jpeg",
        title: "Développement No Code ",
        description:""
    },
]

export {
    cognizantLogo,wellsLogo,nodejs,phone,youtube,instagram,facebook,
    homeImage,aflacLogo,wiuLogo,
    book,
    skill,
    angular,
    typescript,
    android,
    gitlab,
    ionic,
    firebase,
    mysql,
    react,
    robo,
    vue,
    softr,
    javascript,
    airtable,
    expressJs,
    linkedin,
    github,
    contactusbg,
    logoMapharma,
    logoLemonTri

}

export const portfolio=[
    {
        id:1,
        title:'TrackSend',
        type:'SaaS',
        status:'Produit personnel',
        desc:"Plateforme de gestion logistique centralisant les colis, les clients, les chargements, les bordereaux de livraison et les communications.",
        url:"https://tracksend.vercel.app/#/login",
        imageUrl:logoTracksend,
        stack:['Vue.js','Firebase','jsPDF','QR codes'],
        featured:true,
    },
    {
        id:10,
        title:'WeFret Africa — Suivi colis',
        type:'Portail client',
        status:'Produit personnel',
        desc:"Portail public permettant aux clients de consulter l’avancement de leur expédition à partir de leur numéro de suivi.",
        url:"https://wefretafrica.vercel.app/",
        imageUrl:logoWefretafrica,
        stack:['Vue.js','Suivi logistique','Responsive'],
        featured:false,
    },
    {
        id:2,
        title:'Aaron Travel',
        type:'Application métier',
        status:'Mission freelance',
        desc:"Application de gestion logistique réunissant authentification, rôles utilisateurs, gestion des colis, QR codes, scan, suivi des statuts, notifications et documents PDF.",
        url:'https://gate-self-three.vercel.app/#/dashboard',
        imageUrl:logoAaronTravel,
        stack:['Vue.js 3','Pinia','Firebase','Tailwind CSS','jsPDF'],
        featured:true,
    },
    {
        id:3,
        title:"Greff’Up",
        type:'Impact social',
        status:'Mission freelance',
        desc:"Site institutionnel responsive de l’association des jeunes greffés : présentation de la mission, des actions, des témoignages et des moyens de rejoindre ou soutenir l’association.",
        url:'https://greffup.fr/',
        stack:['WordPress','Astra','SEO','Google Site Kit'],
        featured:true,
    },
    {
        id:4,
        title:'Checkup Impact',
        type:'Application métier',
        status:'Mission freelance',
        desc:"Application associée à Greff’Up pour diffuser des questionnaires avant/après par QR code, comparer les statistiques, exporter les résultats et suivre les accompagnements.",
        stack:['Next.js','TypeScript','Supabase','Recharts','Zod'],
        featured:true,
    },
    {
        id:5,
        title:'France Distribution',
        type:'Application métier',
        status:'Mission freelance',
        desc:"Solution de gestion des produits et des stocks avec scan de codes-barres, intégration de l’API OpenFoodFacts, alertes et notifications.",
        stack:['React','Redux','Supabase','Tailwind CSS'],
        featured:true,
    },
    {
        id:6,
        title:'Transport Fomek',
        type:'Logistique',
        status:'Projet client en cours',
        desc:"Conception d’une solution de gestion du fret entre la France et le Cameroun : enlèvements, colis, conteneurs, listes de colissage et suivi client.",
        stack:['Application web','Gestion de fret','Suivi client'],
        featured:false,
    },
    {
        id:7,
        title:'Sow Ocaz',
        type:'Application web',
        status:'Réalisation web',
        desc:"Application web responsive dédiée à Sow Ocaz, conçue autour d’une expérience simple et accessible sur mobile comme sur ordinateur.",
        url:'https://sowocaz.vercel.app/',
        imageUrl:logoSowOcaz,
        stack:['React','Application web','Responsive'],
        featured:false,
    },
    {
        id:8,
        title:'AD & Co',
        type:'Site Web',
        status:'Autre réalisation',
        desc:"Site vitrine pour une agence de consulting en marketing et communication.",
        url:"https://adcoagency.fr/",
        imageUrl:logoADCO,
        stack:[],
        featured:false,
    },
    {
        id:9,
        title:'MaPharma',
        type:'Site Web',
        status:'Autre réalisation',
        desc:"Plateforme mettant en relation les pharmacies avec les particuliers.",
        url:"https://mapharma.vercel.app/accueil",
        imageUrl:logoMapharma,
        stack:[],
        featured:false,
    },
    {
        id:11,
        title:'YSAB',
        type:'Catalogue digital',
        status:'Réalisation web',
        desc:"Catalogue de pagnes permettant de découvrir les modèles disponibles et leurs différentes variantes de couleurs.",
        url:'https://ysab.vercel.app/',
        imageUrl:logoYsab,
        stack:['Vue.js','Vite','Catalogue produit','Responsive'],
        featured:false,
    },
    {
        id:13,
        title:'Paris Fret Transport',
        type:'Logistique',
        status:'Réalisation web',
        desc:"Application métier pour accompagner les opérations de transport et de fret depuis un espace sécurisé, avec documents PDF et QR codes.",
        url:'https://parisfrettransport.vercel.app/#/login',
        stack:['Vue.js','Vite','jsPDF','QR codes'],
        featured:false,
    },
    {
        id:14,
        title:'Teranga Cargo Groupage',
        type:'Site & suivi logistique',
        status:'Réalisation web',
        desc:"Site de groupage France–Sénégal présentant l’enlèvement, l’expédition maritime et la réception à Dakar, avec demande de devis et suivi de colis.",
        url:'https://www.terangacargogroupage.com/',
        imageUrl:logoTerangaCargo,
        stack:['Next.js','Site vitrine','Devis','Suivi colis'],
        featured:true,
    },
]
