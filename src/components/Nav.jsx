import React, { useEffect, useRef, useState } from 'react'
import { CiMenuFries, CiSearch } from "react-icons/ci";
import { IoIosArrowForward, IoMdClose } from "react-icons/io";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { getnewssearch } from '../utilis/func';
const Nav = ({ country }) => {
  const tabs = ["Home", "Hots", "Subscribe", "Contact Us"]
  const [dis, setDis] = useState("none")
  const [news, setNews] = useState("")
  const [data, setData] = useState([])
  const [errorMsg, setErrorMsg] = useState(false)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    if (news) {
      var timer = setTimeout(() => {
        setDis("block")
        setLoading(true)
        getnewssearch(news, country || "India").then(function (res) {
          if (res.status) {
            setLoading(false)
            setData(res.data)
          }
          else {
            setLoading(false)
            throw new Error(res.msg)
          }
        }).catch((error) => setErrorMsg(error.message))
      }, 2000);
    }
    return () => clearTimeout(timer)
  }, [news])
  const [initialTab, setInitialTab] = useState("Home")
  const [toggleMneu, setToggleMneu] = useState(false)
  useEffect(() => { window.innerWidth >= 768 && setToggleMneu(true), [] })
  return (
    <div className=' xl:flex xl:justify-center sticky top-0 bg-white z-10'>
      <div className='relative  xl:w-[75rem] flex justify-between items-center py-5 px-3 lg:px-12 xl:px-0'>
        <div className=' left-navcon'>
          <div className='  w-full  flex items-center gap-5'>
            <h1 className=' text-2xl md:text-3xl text-[#E10C0D] font-semibold'>Buletin</h1>
            <span className=' bg-[#393C45] h-7 w-[2px] hidden md:block'></span>
            {toggleMneu && <ul className='absolute z-40  right-5 rounded-md top-16 bg-white md:static  md:flex gap-6 items-center text-[#393C45] md:text-xs lg:text-sm font-medium'>
              {
                tabs.map((list, index) => <a key={index} href={`#${list.split(" ")[0].toLowerCase()}`}>  <li onClick={() => setInitialTab(list)} style={list === initialTab ? { color: "#E10C0D", fontWeight: "800" } : {}} className=' py-3 text-sm pl-3 pr-5  md:p-0 '>{list}</li></a>
                )
              }

            </ul>}
          </div>
        </div>
        <div className="right-navcon  text-[#393C45] ">
          <ul className=' flex items-center gap-2 '>
            <div className='bg-[#F4F4F4] rounded-3xl flex items-center gap-2 text-sm py-3 sm:py-4 pl-3'>
              <CiSearch className=' text-xl' />
              <input type="search" placeholder='Search' className='  outline-none bg-transparent w-24 sm:w-full ' onChange={(e) => setNews(e.target.value)} />
            </div>
            <li className=' md:hidden'>
              {
                !toggleMneu ? <button className=' flex items-center' onClick={() => setToggleMneu(true)}><CiMenuFries className='font-medium text-xl' /></button> :
                  <button className=' flex items-center'><IoMdClose onClick={() => setToggleMneu(false)} className='font-medium text-xl' /> </button>
              }
            </li>
          </ul>
        </div>
        <div style={{ display: dis }} className='  w-[80%] sm:w-[50%] right-0 absolute h-[80vh]  top-20 overflow-y-auto mx-3'>
          {
            loading ?
              <div className='grid grid-cols-2 gap-3 '>
                <div className=''>
                  <Skeleton className=' h-40 rounded-md' />
                  <div className='w-full flex flex-wrap gap-4 justify-between items-center text-xs sm:text-sm my-3'>
                    <ul className=' flex gap-2'>
                      <Skeleton width={25} className=' h-5' />
                      <Skeleton width={25} className=' h-5' />
                      <Skeleton width={25} className=' h-5' />
                    </ul>
                  </div>
                  <div>
                    <Skeleton count={3} />
                    <Skeleton width={10} className=' h-2' />
                    <Skeleton className=' h-2' />
                    <Skeleton width={70} className=' h-2' />
                    <Skeleton className=' h-2' />
                    <Skeleton className=' h-2' />
                  </div>
                  <ul className=' flex gap-2'>
                    <Skeleton width={60} className=' h-7' />
                    <Skeleton width={40} className=' h-7' />
                    <Skeleton width={10} className=' h-7' />
                  </ul>
                </div>
                <div className=''>
                  <Skeleton className=' h-40 rounded-md' />
                  <div className='w-full flex flex-wrap gap-4 justify-between items-center text-xs sm:text-sm my-3'>
                    <ul className=' flex gap-2'>
                      <Skeleton width={25} className=' h-5' />
                      <Skeleton width={25} className=' h-5' />
                      <Skeleton width={25} className=' h-5' />
                    </ul>
                  </div>
                  <div>
                    <Skeleton count={3} />
                    <Skeleton width={10} className=' h-2' />
                    <Skeleton className=' h-2' />
                    <Skeleton width={70} className=' h-2' />
                    <Skeleton className=' h-2' />
                    <Skeleton className=' h-2' />
                  </div>
                  <ul className=' flex gap-2'>
                    <Skeleton width={60} className=' h-7' />
                    <Skeleton width={40} className=' h-7' />
                    <Skeleton width={10} className=' h-7' />
                  </ul>
                </div>
              </div> :
              errorMsg ?
                <div className="relative bg-white text-base px-4 py-3 border-[2px] border-solid rounded-md">
                  <h1 className=' '>{errorMsg}</h1>
                  <button onClick={() => setDis("none")} className=' absolute right-2 top-2 '><IoMdClose /></button>
                </div> :
                <div className='bg-[#F5F5F5] grid grid-cols-2 gap-3'>
                  <div className=' col-span-2 inline-flex justify-end items-center sticky top-0'>
                  <button onClick={() => setDis("none")} className='bg-black text-white rounded-md  p-3 '><IoMdClose /></button>
                    </div>
                  {
                    data.map((item, index) =>
                      <div key={index} className=' overflow-hidden '>
                        <img src={item.image} alt="" className=' rounded-md h-40 sm:h-52 w-full object-cover' />
                        <div className='w-full flex flex-wrap gap-4 justify-between items-center text-xs sm:text-sm my-3'>
                          <p className='bg-[#FF5B5B] text-white rounded-3xl px-3 py-2'>{item.publisher}</p>
                        </div>
                        <div>
                          <h2 className=' font-semibold text-sm md:text-lg'>{item.title.slice(0, 100)}...</h2>
                          <p className='my-2 text-[#6D7077] text-xs md:text-sm text-left'>{item.preview?.slice(0, 150) || "N/A"}</p>
                        </div>
                        <a href={item.link} rel='noopener noreferrer' target='_blank' className='btn flex gap-1 items-center text-sm sm:text-lg'>Read More <IoIosArrowForward className='icon' /></a>
                      </div>)
                  }

                </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Nav
