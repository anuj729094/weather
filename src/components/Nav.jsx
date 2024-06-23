import React, { useEffect, useRef, useState } from 'react'
import { IoNotificationsOutline } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Nav = () => {
  const tabs =["Home" , "Hots" , "Subscribe" , "Contact Us"]
  const [initialTab , setInitialTab]=useState("Home")
  const [toggleMneu, setToggleMneu] = useState(false)
  useEffect(() => window.innerWidth > 640 && setToggleMneu(true), [])
  return (
    <div className=' xl:flex xl:justify-center sticky top-0 bg-white z-10'>
      <div className='relative  xl:w-[75rem] flex justify-between items-center py-5 px-3 lg:px-12 xl:px-0'>
        <div className=' left-navcon'>
          <div className='  w-full  flex items-center gap-5'>
            <h1 className=' text-2xl md:text-3xl text-[#E10C0D] font-semibold'>Buletin</h1>
            <span className=' bg-[#393C45] h-7 w-[2px] hidden sm:block'></span>
            {toggleMneu && <ul className='absolute  right-5 rounded-md top-16 bg-white sm:static  sm:flex gap-6 items-center text-[#393C45] sm:text-xs lg:text-sm font-medium'>
              {
                tabs.map((list,index)=>  <a  key={index} href={`#${list.split(" ")[0].toLowerCase()}`}>  <li onClick={()=>setInitialTab(list)} style={list===initialTab ? {color:"#E10C0D", fontWeight:"800"}:{}} className=' py-3 text-sm pl-3 pr-5  sm:p-0 '>{list}</li></a>
              )
                
              }
            </ul>}
          </div>
        </div>
        <div className="right-navcon  text-[#393C45] ">
          <ul className=' flex items-center gap-2 '>
            <li><IoNotificationsOutline className='font-medium text-xl' /></li>
            <li className=''>
              <img src="https://joesch.moe/api/v1/random" alt="error" className=' w-8 h-8  rounded-full ' />
            </li>
            <li className=' sm:hidden'>
              {
                !toggleMneu ? <button className=' flex items-center' onClick={() => setToggleMneu(true)}><CiMenuFries className='font-medium text-xl' /></button> :
                  <button className=' flex items-center'><IoMdClose onClick={() => setToggleMneu(false)} className='font-medium text-xl' /> </button>
              }
            </li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default Nav
