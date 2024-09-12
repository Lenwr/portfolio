import React, {useState} from 'react';
import {skill} from "../assets";
import {AppText, dataFormation, skillsList} from "../Constants";
import Formation from "./Formation";
import './cycle.css'

function Skills(props) {
    const [ display , setDisplay] = useState(false)
    function changeDisplay(){
        setDisplay(!display)
    }
    return (
        <div className='mt-10 h-[80%] '  id="skills">
            <div className='flex flex-row justify-center items-center '>
                <img src={skill} alt="" className="w-[70px] hover:animate-bounce "/>
                <h1 className='text-[40px] font-bold'>{AppText.skills}<span className='text-purple-600'>{}</span></h1>
            </div>
            <div className="flex flex-row items-center justify-center ">
                <button onClick={changeDisplay} className="btn bg-blue-800 text-white p-2 mx-2 rounded-md hover:scale-110 " >
                    Affichage
                </button>
                {
                    display ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z" />
                        </svg>
                }
            </div>
            {
                !display ?
                    <div className=' flex flex-col md:flex-row  justify-evenly px-8 md:px-0 mt-8 '>
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
                    :
                    <div className='flex mt-5 flex-col justify-end  md:mt-0 lg:mt-0'>
                        <Formation
                            color={dataFormation.color}
                            data={dataFormation.cycleData}/>
                    </div>
            }
        </div>
    )

}

export default Skills;
