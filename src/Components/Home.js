import React from 'react';
import {AppText} from "../Constants";
import {frontEnd} from '../assets'
import Typewriter from 'typewriter-effect';
import CVJ from '../assets/CVJ.pdf';

function Home(props) {
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
        <div className="mt-7 flex px-4 md:px-10 flex-col items-center md:flex-row ">
            <div className='flex w-full flex-col  items-start content-end' >
                <h1 className="text-[20px]   md:text-[30px] font-bold">{AppText.hello}</h1>
                <div className="flex">
                    <h1 className=" text-[20px]   md:text-[30px] font-bold">{AppText.Iam}&nbsp;
                    </h1>
                    <h1 className= " text-[20px] md:text-[30px] font-bold  text-blue-800 " >
                        <Typewriter
                            options={{
                                strings: [AppText.myName, AppText.frontEntDeveloper,"Intégrateur Web",],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>


                </div>
                <h1 className="text-gray-400">{AppText.description}</h1>
                <div className="flex flex-row">
                    <button className="bg-blue-800 p-2 mt-4 px-3 rounded-md mr-4
             transition-all ease-in-out hover:scale-110 text-white "> <a href={`tel:${+33676492528}`} className="bg-blue-800 p-2 mt-4 px-3 rounded-md transition-all ease-in-out hover:scale-110 text-white">
                        Me contacter
                    </a> </button>
                    <button   onClick={handleDownload} className="bg-blue-800 p-2 mt-4 px-3 rounded-md
             transition-all ease-in-out hover:scale-110 text-white ">
                        Mon CV
                    </button>
                </div>

            </div>
            <img src={frontEnd} className="md:w-[400px]"  alt=""/>
        </div>
    );
}

export default Home;