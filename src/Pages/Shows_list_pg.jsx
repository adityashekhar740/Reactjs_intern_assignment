import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import {useShowData} from '../contexts/ShowData';
export const Shows_list_pg = () => {
    
    const {show_data,setshow_data}=useShowData();

useEffect(()=>{
    const fetch_data=async()=>{
        let res=await axios.get('https://api.tvmaze.com/search/shows?q=all');
        setshow_data(res.data);
        console.log(localStorage.getItem('name'))
    }
    fetch_data();
},[])




  return (
    <>
    <nav className="flex items-center justify-start gap-10 bg-gray-100 p-4">
  <a className="text-xl font-bold" href="#">Movie List</a>
  <div className=" " >
    <ul className="flex gap-5 ">
      <li className="">
        <a className="nav-link" href="">Home
        </a>
      </li>
      <li >
        <a className="nav-link" href="">Favorite</a>
      </li>
    </ul>
  </div>
</nav>

<div className="container mt-5 px-0">

  {/* 1st row: Search button */}
  <div className="flex justify-center mb-3" id="search-bar">
    <form className="flex items-center" id="search">
      <label htmlFor="search-input" className="sr-only">Name</label>
      <input type="text" className=" border p-2 form-control mb-2 mr-2" id="search-input" placeholder="Search name ..." />
      <button type="submit" className="bg-yellow-500 text-white py-2 mt-[-9px] px-4 rounded hover:bg-yellow-600">Search</button>
    </form>
  </div>

  {/* 2nd row: List Grid */}
  {/* <div className="flex justify-end my-3 px-3" id="display-switch">
    <i className="fa fa-th mr-2" aria-hidden="true" id="grid-display" data-id="1"></i>
    <i className="fa fa-bars" aria-hidden="true" id="list-display" data-id="2"></i>
  </div> */}

  {/* 3rd row: Data Panel */}
  <div className="flex w-[87%] m-auto gap-7 flex-wrap gap-y-5 pl-[94px] " id="data-panel">
    
    {
        (show_data)?
        show_data.map((Show,index)=>(
           
        (index!==4)?
         <div className='w-[200px] h-[350px] border' key={Show.show.id} >
                <div>
                     {Show.show.image && 
                     <img src={Show.show.image.medium} alt="" />                     
                     }
                </div>
               <div className='flex justify-between mt-5 px-2 ' >
                 <h1 className='font-semibold' >{Show.show.name}</h1>
                 <NavLink to={`/summary/${Show.show.name}/${index}`} >
                    <button  className='bg-yellow-500 py-1 px-2 rounded ' >See more</button>
                 </NavLink>
               </div>
            </div>:null
        )):null
    
    }

  </div>
</div>





     </>
  );
}


