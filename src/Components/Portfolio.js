import React, {useEffect, useState} from 'react';
import {portfolio} from "../assets";
import {AppText } from "../Constants";
import SectionHeading from '../reusable/sectionHeading'
import {robo} from './../assets/index'
import Microlink from "react-microlink";
function Portfolio(props) {
    const [portfolioList,setPortfolioList]=useState([]);
    const [portfolioListOrg,setPortfolioListOrg]=useState([]);

    useEffect(()=>{
        setPortfolioList(portfolio);
        setPortfolioListOrg(portfolio)
    },[])
    const filterPortfolio=(type)=>{
        if(type=='All')
        {
            setPortfolioList(portfolioListOrg);
        }
        else{
            const result= portfolioListOrg.filter(item=>item.type==type);
            setPortfolioList(result)
            console.log(result)
        }
    }
    return (
        <div className='mt-5 flex justify-center flex-col'>
            <div className='flex flex-row px-6 md:px-0 items-center justify-center'>
                {/* <h1 className='text-[40px] font-bold'>{AppText.Creative}
        <span className='text-purple-600'>{AppText.Portfolio}</span></h1> */}
                <SectionHeading firstTitle={AppText.Creative} secondTitle={AppText.Portfolio} />
                <img src={robo} className="w-[70px] ml-5 animate-bounce"/>
            </div>
            <div className='flex flex-row justify-evenly gap-2 px-4 md:px-72'>
                <button onClick={()=>filterPortfolio('All')} className='border-purple-600 border-2
            text-purple-600 focus:text-white
            active:bg-purple-500 p-1 px-4 rounded-md
            focus:ring-violet-300 focus:bg-purple-600 focus:ring '>Tous</button>
                <button  onClick={()=>filterPortfolio('Site Web')}  className='border-purple-600 border-2
            text-purple-600 focus:text-white
            active:bg-purple-500 p-1 px-4 rounded-md
            focus:ring-violet-300 focus:bg-purple-600 focus:ring '>Site Web</button>
                <button onClick={()=>filterPortfolio('WebApp')} className='border-purple-600 border-2
            text-purple-600 focus:text-white
            active:bg-purple-500 p-1 px-4 rounded-md
            focus:ring-violet-300 focus:bg-purple-600 focus:ring '>Web App</button>
            </div>
            <div className='grid grid-cols-2 items-center content-center md:grid-cols-3 lg:grid-cols-3
        md:px-24 lg:px-48 p-4 '>
                {portfolioList.map((item,index)=>(
                    <div className='p-2 flex flex-col m-2 rounded-lg bg-purple-100
                transition-all ease-in-out group hover:scale-110'>
                            <Microlink className="h-[180px] object-cover rounded-lg" url={item.imageUrl} />
                        <h1 className='text-[14px] group-hover:scale-110 mt-2 text-center  font-bold'>{item.title}</h1>
                        <h1 className='text-[12px] text-gray-500 px-6 pb-3'>{item.desc}</h1>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default Portfolio;