import React from 'react';
import {AppText, socialNetwork} from "../Constants";

function Footer(props) {
    return (
        <div className=' bg-blue-400 mt-10 p-20 items-center flex flex-col  px-10 md:px-80'>
            <div className='flex gap-4'>
                {socialNetwork.map((item,index)=>(
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                        <img src={item.logo} className="w-[40px]" alt={item.name} />
                    </a>
                ))}
            </div>
            <h1 className='text-white text-[15px] mt-4'>{AppText.copywriteText}</h1>
        </div>

    );
}

export default Footer;