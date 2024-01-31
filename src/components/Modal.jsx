import React from 'react'
import Styles from './Modal.module.css'


const Modal = ({showname,schedule,setshowmodal}) => {
  return (
   <div>
     <div className={Styles.modal} >
        <div className='flex justify-between px-3' >
            <h3 className='text-[20px]' >Book your seat</h3>
            <div onClick={()=>{
                setshowmodal(false)
            }} className='text-[25px] cursor-pointer' >&times;</div>
        </div>

        <form onSubmit={(e)=>{
            e.preventDefault()
            localStorage.setItem('name',e.target[0].value)
            localStorage.setItem('phone',e.target[1].value)
            console.log(localStorage.getItem('name'),localStorage.getItem('phone'))
            alert("Your booking has been made")
        }} action="">
           <div className='flex flex-col  w-[50%] mx-auto mt-4 ' >
            <label className='mt-2' htmlFor="">Name</label>
             <input  className='border-[1px] border-solid border-gray-500 h-[35px] ' type="text" name="" id="" />
             <label className='mt-4' htmlFor="">Phone</label>
            <input className='border-[1px] border-solid border-gray-500 h-[35px] ' type="number" name="" id="" />
             <label className='mt-4' htmlFor="">Show:</label>
            <input  value={showname} className='border-[1px] border-solid border-gray-500 h-[35px] ' type="text" name="" id="" />
             <label className='mt-4' htmlFor="">ShowTime:</label>
            <input value={schedule.time} className='border-[1px] border-solid border-gray-500 h-[35px] ' type="text" name="" id="" />
             <label className='mt-4' htmlFor="">Day:</label>
            <input value={schedule.days[0]} className='border-[1px] border-solid border-gray-500 h-[35px] ' type="text" name="" id="" />
            <button className='bg-[#f5c518] px-3 py-2 mt-4 w-[30%] rounded ml-[30%] ' >Book</button>
           </div>
        </form>
     </div>
     <div className={Styles.overlay} ></div>
   </div>
  )
}

export default Modal