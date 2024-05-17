import React from 'react';
import {skill} from "../assets";
import {AppText, dataFormation, skillsList} from "../Constants";
import Formation from "./Formation";

function Skills(props) {
    return (
        <div className='mt-10 h-[80%] '  id="skills">
            <div className='flex flex-row justify-center items-center '>
                <img src={skill} alt="" className="w-[70px] hover:animate-bounce "/>
                <h1 className='text-[40px] font-bold'>{AppText.skills}<span className='text-purple-600'>{}</span></h1>
            </div>
                <div className='hidden flex flex-col md:flex-row  justify-evenly px-8 md:px-0 mt-8 '>
                    <div className='grid grid-cols-4 md:grid-cols-4 gap-8  items-center'>
                        {skillsList.map((item, index)=>(
                            <div className='w-[80px] transition ease-in-out delay-100 hover:scale-125 bg-purple-50
                 p-3 rounded-full' >
                                <img src={item.icon} alt=""
                                     className="w-[80px]"/>
                            </div>

                        ))}
                    </div>
                </div>

                <div className='flex mt-5 flex-col justify-end  md:mt-0 lg:mt-0'>
                    <Formation
                        color={dataFormation.color}
                        data={dataFormation.cycleData}/>
                </div>
        </div>
    )

}

export default Skills;