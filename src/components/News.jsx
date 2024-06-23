import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaRegClock } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import Newsskeleton from './Newsskeleton';
import { data2 } from '../utilis/data'
import { getnewsbylocation } from '../utilis/func';
const News = ({ obj }) => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(data2)
    const [newsError, setNewsError] = useState(false)
    // console.log(data);
    useEffect(() => {
        setLoading(true)
        getnewsbylocation(obj).then(function (res) {
            if (res.status) {
                setLoading(false)
                setData(res.data)
            }
            else {
                setLoading(false)
                throw new Error(res.msg)
            }
        }).catch((error) => setNewsError(false))
    }, [obj])
    return (
        <div className='flex flex-col items-center px-3 lg:px-12 xl:px-0'>
            <div className=' xl:w-[75rem]'>
                {loading ? <Newsskeleton /> : newsError ? <h1>{newsError}</h1> :
                    <div>
                        <h3 className=' text-2xl sm:text-4xl mb-5 font-medium '>Latest News</h3>
                        <div className=' grid  grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  gap-x-5 gap-y-4'>
                            {
                                data.map((item, index) => index === 0 ?
                                    <div key={index} className=' col-span-2  sm:col-span-3 lg:col-span-4  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4  text-xs sm:text-sm lg:text-lg font-medium '>
                                        <div className='relative  image-con sm:col-span-2 rounded-3xl sm:row-span-3 flex  '>
                                            <img src={item.image} alt="" className=' w-full rounded-3xl h-full object-cover ' />
                                            <div className=' bg-[#00000061] rounded-3xl text-white text-sm sm:text-2xl lg:font-extrabold absolute w-full h-full flex flex-col justify-between py-3 px-4'>
                                                <div className=' flex justify-between gap-4 items-center text-xs sm:text-sm  font-semibold'>
                                                    <p className=' bg-[#4FCB9E] text-white py-2 px-4 rounded-3xl'>{item.domain}</p>
                                                    {/* <p className='bg-[#FF5B5B] text-white rounded-3xl  py-2 px-4'>{item.publisher}</p> */}
                                                    <img src={item.pubLogo} alt="" className=' rounded-full w-12 sm:w-14'/>
                                                </div>
                                                <div className='font-semibold flex gap-4 justify-between items-center '>
                                                    <h3>{item.title}</h3>
                                                    <a href={item.link} rel='noopener noreferrer' target='_blank' className='btn border-[2px] p-4 rounded-full border-white'><FaArrowRight className='icon text-xl lg:text-4xl' /></a>
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            item.relatedArticles.map((news, index) => <div className='  bg-[#F4F4F4] rounded-3xl flex items-center md:flex-wrap xl:flex-nowrap justify-between gap-2 px-4 py-3'>
                                                <div className=' flex flex-col gap-3 text-base'>
                                                    <p>{news.title}</p>
                                                    <div className=' flex flex-wrap gap-4 items-center text-xs'>
                                                        <p className=' bg-[#FF5B5B] text-white py-2 px-4 rounded-3xl'>{item.domain}</p>
                                                        <p>18 June 2024</p>
                                                    </div>
                                                </div>
                                                <a href={news.link} rel='noopener noreferrer' target='_blank' className='btn border-[2px] p-4 rounded-full border-[#5D5D5D]'><FaArrowRight className='icon text-xl lg:text-4xl' /></a>
                                            </div>)
                                        }
                                    </div> :
                                    <div key={index} className=' overflow-hidden '>
                                        <img src={item.image} alt="" className=' rounded-md h-52 w-full object-cover' />
                                        <div className='w-full flex flex-wrap gap-4 justify-between items-center text-xs sm:text-sm my-3'>
                                        <p className='bg-[#FF5B5B] text-white rounded-3xl px-3 py-2'>{item.publisher}</p>
                                        </div>
                                        <div>
                                            <h2 className=' font-semibold text-sm md:text-lg'>{item.title.slice(0, 100)}...</h2>
                                            <p className='my-2 text-[#6D7077] text-xs md:text-sm text-left'>{item.preview?.slice(0, 150) || "N/A"}</p>
                                        </div>
                                        <a href={item.link} rel='noopener noreferrer' target='_blank' className='btn flex gap-1 items-center text-sm sm:text-lg'>Read More <IoIosArrowForward className='icon' /></a>
                                    </div>
                                )
                            }
                        </div>
                    </div>}

            </div>
        </div >
    )
}

export default News
