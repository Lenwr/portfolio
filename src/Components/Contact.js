import React, {useState} from 'react'
import {contactusbg, phone} from '../assets'
import {AppText} from '../Constants'
import SectionHeading from '../reusable/sectionHeading'
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Contact(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [feedback, setFeedback] = useState("");
    const [loading, setLoading] = useState(false);
    const notify = () => toast("Formulaire envoyé");

    (function(){
        emailjs.init({
            publicKey: "dnBjox8ayfiBML1MH",
        });
    })();
    const sendMessage = (event) => {
        event.preventDefault();
        if (!name || !email || !feedback) {
            return;
        }
        setLoading(true);
        const templateParams = {
            from_name: `${name}" : "${email}`,
            to_name: "Jefferson ABALO",
            message: feedback,
        };
        emailjs
            .send("service_djdok9h", "template_87bi9zu", templateParams)
            .then(
                () => {
                    console.log("sucess")
                    {notify()}
                    setLoading(false);
                    setName("");
                    setEmail("");
                    setFeedback("");
                },
                (err) => {
                    console.log("FAILED...", err);
                    setLoading(false);
                }
            );
    };


    return (

        <div id="contact" className='flex flex-col justify-center mt-5'>
            <form onSubmit={(event) => sendMessage(event)}>
                <div className='flex flex-row  justify-center '>
                    <SectionHeading secondTitle={AppText.Contact} firstTitle="Me"/>
                    <img src={phone} alt="" className="w-[80px] "/>
                </div>
                    <div className=' "w-1/2 grid grid-cols-1 md:grid-cols-2 justify-evenly px-10 md:px-44'>
                        <img src={contactusbg} alt="" className="w-[300px] mr-10"/>
                        <div className='w-full'>
                            <div className=" flex flex-col">
                                <label className='text-black '> Nom</label>
                                <input placeholder='votre nom'
                                       type="text"
                                       name="name"
                                       value={name}
                                       onChange={(e) => setName(e.target.value)}
                                       required
                                       className='border-[1.5px] px-2 border-blue-800
              hover:border-blue-800 rounded-md'/>
                            </div>
                            <div className='flex flex-col '>
                                <label className='text-black '>Email</label>
                                <input placeholder=''
                                       type="email"
                                       name="email"
                                       value={email}
                                       onChange={(e) => setEmail(e.target.value)}
                                       required
                                       className='border-[1.5px] px-2 border-blue-800
              hover:border-blue-800 rounded-md'/>
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-black '>Message</label>
                                <textarea type="text" rows={7} placeholder='Votre message'
                                          name="feedback"
                                          value={feedback}
                                          onChange={(e) => setFeedback(e.target.value)}
                                          required
                                          className='border-[1.5px] px-2 hover:border-blue-800 border-blue-800 rounded-md'/>
                                <button type="submit" disabled={loading}
                                        className='transition-all ease-in-out hover:scale-110 bg-blue-800 flex flex-row items-center justify-center text-[14px]  py-1 mt-5 text-white  rounded-md'>
                                    {loading ? "Envoi en cours..." : "Envoyé"}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="ml-2 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/>
                                    </svg>

                                </button>
                            </div>


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

    );
}

export default Contact;