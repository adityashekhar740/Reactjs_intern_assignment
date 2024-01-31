import React, { useEffect, useState } from 'react'
import {useShowData} from '../contexts/ShowData';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Modal from '../components/Modal';
export const Show_detail = () => {
      const [showinfo,setshowinfo]=useState(null);
      const [showmodal,setshowmodal]=useState(false);
   const { showname } = useParams();
   const {index}=useParams();
   const show = decodeURIComponent(showname);
  useEffect(()=>{
       const fetch_data=async()=>{
        let res=await axios.get('https://api.tvmaze.com/search/shows?q=all');
        const shows=res.data;
        setshowinfo(shows[index])
    }
    fetch_data();
  },[show])
  return (
    <>
    {
      showinfo && console.log(showinfo)
    }
   
    
    <div className='h-[100%] w-[87%] m-auto mt-10  ' >
      {
        (showinfo)?
        <div>
          <h1 className='text-[24px] font-semibold' >{showinfo.show.name}</h1>
          {/* {showinfo.show.rating.average && <h3> {showinfo.show.rating.average} </h3> } */}
          <div className='flex ' >
          <p className='text-gray-600' >Launch: {showinfo.show.premiered} &nbsp; •</p>
          <p className='text-gray-600' > &nbsp; {showinfo.show.runtime}min</p>        
        </div>
        <div className='flex  ' >
          <img  src={showinfo.show.image.medium} alt="" />
         <div className='ml-5 pt-[70px] ' >
         
           <p className='w-[700px]' >{showinfo.show.summary}</p>
         </div>
        <div className='pt-[100px] ml-[70px]' >
           <button onClick={()=>{
            setshowmodal(true);
           }} className='bg-[#f5c518] py-2 px-4 rounded  ' >Book A Ticket</button>
        </div>
        </div>
        </div>:null
        
      }
    </div>
    {
      (showmodal)?<div>
     
        <Modal showname={showinfo.show.name} schedule={showinfo.show.schedule} setshowmodal={setshowmodal} />
      </div>
      :null
    }
    </>
  )
}
