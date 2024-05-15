import React from 'react';
import {AppText} from "../Constants";
import {wave, laptop, aboutSection} from "../assets";

function AboutMe(props) {
    return (
        <div className="mt-36">
            <img src={wave} className="w-screen relative hidden  " alt=""/>
            <img src={laptop} className="absolute mt-[-180px] md:mt-[-140px] w-[220px] md:w-[300px]" alt=""/>
            <div className="h-[300px] bg-blue-800 w-full">
                <h2 className="md:text-[50px] text-[40px] font-bold text-center text-white">A propos de <span
                    className="text-black"> Moi </span></h2>
                <h2 className="text-white text-center pt-6
               md:mt-4 px-10 md:px-64 lg:px-80
               ">{AppText.aboutMeDescription}</h2>
            </div>
            <div className="md:flex-row justify-around
            mt-[-60px] px-32
            flex flex-col w-full items-center">
                {
                    aboutSection.map((item, index) => (
                        <div className=" group hover:bg-blue-800 mb-5 p-7 rounded-xl">
                            <img src={item.image} alt="" className="w-[280px] h-[250px] object-cover rounded-lg"/>
                            <div className="w-[230px] pb-[20px]">
                                <h2 className="font-bold text-center group-hover:text-white ">{item.title}</h2>
                                <h2 className="text-[12px] text-center group-hover:text-gray-200 text-gray-500">{item.description}</h2>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default AboutMe;