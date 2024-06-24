import React, { useEffect, useState } from 'react'
import Hotskeleton from './Hotskeleton'
import { BsPinMapFill } from "react-icons/bs";

const Newshots = ({ country, setobj, type }) => {
  const arr = ["Latest News", "Sports", "World", "Business", "Technology", "Science", "Entertainment"]
  return (
    <div id="hots" className=' scroll-mt-24 xl:flex xl:justify-center px-3 lg:px-12 xl:px-0'>
      <div className=' xl:w-[75rem]'>
        <h2 className='flex items-center gap-1 font-semibold text-2xl sm:text-3xl'><span className=' text-[#E10C0D]'>Buletin</span>Hots {country &&<span className=' font-medium ml-4 flex  gap-1 bg-[#F5F5F5] rounded-3xl p-3 text-base'><BsPinMapFill className='text-[#E10C0D] text-2xl' />{country}</span>}</h2>
        <ul className=' hots inline-flex whitespace-nowrap gap-3 overflow-auto w-full my-5'>
          {
            arr.map((list, index) => <li style={list === type ? { backgroundColor: "#E10C0D", color: 'white' } : {}} key={index}><button onClick={() => setobj({type: list, location: country || "India"
            })}>{list}</button></li>)
          }
        </ul>
      </div>
    </div>
  )
}

export default Newshots
