import React, {useState} from 'react';
import {logo} from '../assets'

function NavBar(props) {
    const [toggle, setToggle] = useState(false)
    return (
        <div className="flex justify-between">
            <img src={logo} alt="Logo" className="h-5"/>
            <div className="hidden md:flex"  >
                <ul className="flex flex-row">
                    <li className="mr-3 transition ease-in-out hover:scale-110 cursor-pointer">Accueil</li>
                    <li className="mr-3 transition ease-in-out hover:scale-110 cursor-pointer">A propos</li>
                    <li className="mr-3 transition ease-in-out hover:scale-110 cursor-pointer">Compétences</li>
                    <li className="mr-3 transition ease-in-out hover:scale-110 cursor-pointer">Portfolio</li>
                    <li className="mr-3 transition ease-in-out hover:scale-110 cursor-pointer">Contactez Moi</li>
                </ul>
            </div>
            <div className="mg:hidden lg:hidden">
                {!toggle?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                         onClick={()=>{setToggle(true)}}
                         viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin= "round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                    onClick={()=>{setToggle(false)}}
                    viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer float-right">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                }
                {
                    toggle?
                        <ul className="flex absolute right-1 flex-col mt-8 rounded-md bg-gray-300 p-4 ">
                            <li className="p-3 transition ease-in-out hover:scale-110 cursor-pointer">Accueil</li>
                            <li className="p-3 transition ease-in-out hover:scale-110 cursor-pointer">A propos</li>
                            <li className="p-3 transition ease-in-out hover:scale-110 cursor-pointer">Compétences</li>
                            <li className="p-3 transition ease-in-out hover:scale-110 cursor-pointer">Portfolio</li>
                            <li className="p-3 transition ease-in-out hover:scale-110 cursor-pointer">Contactez Moi</li>
                        </ul>
                        :null
                }
            </div>
        </div>
    );
}

export default NavBar;