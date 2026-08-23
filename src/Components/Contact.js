import React, {useState} from 'react'
import {contactusbg} from '../assets'
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

emailjs.init({ publicKey: "dnBjox8ayfiBML1MH" });

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [feedback, setFeedback] = useState("");
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");
    const notify = () => toast("Formulaire envoyé");

    const sendMessage = (event) => {
        event.preventDefault();
        if (!name || !email || !feedback) {
            return;
        }
        setLoading(true);
        setStatus("");
        const templateParams = {
            from_name: `${name}" : "${email}`,
            to_name: "Jefferson ABALO",
            message: feedback,
        };
        emailjs
            .send("service_djdok9h", "template_87bi9zu", templateParams)
            .then(
                () => {
                    notify();
                    setStatus("Votre message a bien été envoyé.");
                    setLoading(false);
                    setName("");
                    setEmail("");
                    setFeedback("");
                },
                (err) => {
                    console.error("Échec de l'envoi du formulaire", err);
                    setStatus("L'envoi a échoué. Réessayez dans quelques instants.");
                    setLoading(false);
                }
            );
    };


    return (

        <section id="contact" className="scroll-mt-24 px-6 py-24 md:px-10">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <p className="section-kicker">Contact</p>
              <h2 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">Construisons quelque chose de <span className="gradient-text">mémorable.</span></h2>
              <p className="mt-6 max-w-lg text-lg leading-8 text-slate-400">Une idée, une mission ou une opportunité ? Écris-moi et discutons de la meilleure façon de la concrétiser.</p>
              <a className="mt-6 inline-flex text-sm font-semibold text-cyan-300 hover:text-cyan-200" href="mailto:jeffersonabalo@outlook.fr">jeffersonabalo@outlook.fr</a>
              <img src={contactusbg} alt="" className="mt-8 hidden w-64 opacity-80 lg:block" loading="lazy"/>
            </div>
            <form onSubmit={(event) => sendMessage(event)} className="glass-card p-6 md:p-8">
                        <div className="w-full space-y-5">
                            <div className=" flex flex-col">
                                <label htmlFor="name" className="mb-2 text-sm font-medium text-slate-300">Nom</label>
                                <input placeholder='votre nom'
                                       id="name"
                                       type="text"
                                       name="name"
                                       value={name}
                                       onChange={(e) => setName(e.target.value)}
                                       required
                                       autoComplete="name"
                                       className="form-field"/>
                            </div>
                            <div className='flex flex-col '>
                                <label htmlFor="email" className="mb-2 text-sm font-medium text-slate-300">Email</label>
                                <input placeholder=''
                                       id="email"
                                       type="email"
                                       name="email"
                                       value={email}
                                       onChange={(e) => setEmail(e.target.value)}
                                       required
                                       autoComplete="email"
                                       className="form-field"/>
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="feedback" className="mb-2 text-sm font-medium text-slate-300">Message</label>
                                <textarea rows={7} placeholder='Votre message'
                                          id="feedback"
                                          name="feedback"
                                          value={feedback}
                                          onChange={(e) => setFeedback(e.target.value)}
                                          required
                                          className="form-field resize-none"/>
                                <button type="submit" disabled={loading}
                                        className="mt-6 flex w-full items-center justify-center rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">
                                    {loading ? "Envoi en cours..." : "Envoyer"}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="ml-2 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/>
                                    </svg>

                                </button>
                                <p className={`mt-3 text-sm ${status.includes('échoué') ? 'text-red-300' : 'text-emerald-300'}`} role="status" aria-live="polite">{status}</p>
                            </div>


                        </div>
                <ToastContainer
                    position="top-right"
                    autoClose={1500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </form>
          </div>
        </section>

    );
}

export default Contact;
