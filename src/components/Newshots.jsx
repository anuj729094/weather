import React, { useEffect, useState } from 'react'
import Hotskeleton from './Hotskeleton'
import { BsPinMapFill } from "react-icons/bs";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { BiSolidNews } from "react-icons/bi";
import { BiWorld } from "react-icons/bi";
import { IoMdBusiness } from "react-icons/io";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineScience } from "react-icons/md";
import { SiDcentertainment } from "react-icons/si";
import { Link } from 'react-router-dom';

const Newshots = ({ country }) => {
  const arr = [ {title:"Latest News" , icon: <BiSolidNews className=' text-4xl'  />},  {title:"Sports" , icon: <MdOutlineSportsBaseball className=' text-4xl'  />}, {title:"World" , icon: <BiWorld className=' text-4xl'  />}, {title:"Business" , icon: <IoMdBusiness className=' text-4xl'  />}, {title:"Technology" , icon: <GrTechnology className=' text-4xl'  />}, {title:"Science" , icon: <MdOutlineScience className=' text-4xl'  />}, {title:"Entertainment" , icon: <SiDcentertainment className=' text-4xl'  />}]
  return (
    <div id="hots" className=' scroll-mt-24 xl:flex xl:justify-center px-3 lg:px-12 xl:px-0 '>
      <div className=' xl:w-[75rem]'>
        <h2 className='flex items-center gap-1 font-semibold text-2xl sm:text-3xl'><span className=' text-[#E10C0D]'>Buletin</span>Hots {country && <span className=' font-medium ml-4 flex  gap-1 bg-[#F5F5F5] rounded-3xl p-3 text-base'><BsPinMapFill className='text-[#E10C0D] text-2xl' />{country}</span>}</h2>
        <ul className=' hots inline-flex flex-wrap items-center whitespace-nowrap gap-5   w-full my-5 '>
          {
            arr.map((list, index) =>
              <li className=' cursor-pointer w-10 h-10 sm:w-14 sm:h-14 p-2 border-2 border-solid border-[#E10C0D]' key={index}>
                 <Link to={`/news/${list.title}/${country}`}>{list.icon}</Link> 
              </li>)
          }
        </ul>
      </div>
    </div>
  )
}

export default Newshots
