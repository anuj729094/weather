import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { IoIosArrowForward } from 'react-icons/io'
import Newsskeleton from './Newsskeleton'

const Repeat = ({ loading, data, newsError, grid }) => {
    return (
        <>
            {
                loading ? <Newsskeleton grid={grid} /> : newsError ? <h1 className=' text-sm sm:text-lg'>{newsError}</h1> :
                    <div className=' grid  grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  gap-x-5 gap-y-4'>
                        {
                            data.map((item, index) => index === 0 ?
                                <div key={index} className=' col-span-2  sm:col-span-3 lg:col-span-4  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4  text-xs sm:text-sm lg:text-lg font-medium '>
                                    <div style={window.innerWidth >= 768 ? { gridColumnStart: grid } : {}} className='relative  image-con sm:col-span-2 rounded-3xl sm:row-span-3  flex  '>
                                        <img src={item.image} alt="" className=' w-full rounded-3xl h-full object-cover ' />
                                        <div className=' bg-[#00000061] rounded-3xl text-white text-sm sm:text-2xl lg:font-extrabold absolute w-full h-full flex flex-col justify-between py-3 px-4'>
                                            <div className=' flex justify-between gap-4 items-center text-xs sm:text-sm  font-semibold'>
                                                <p className=' bg-[#4FCB9E] text-white py-2 px-4 rounded-3xl'>{item.domain}</p>
                                                {/* <p className='bg-[#FF5B5B] text-white rounded-3xl  py-2 px-4'>{item.publisher}</p> */}
                                                <img src={item.pubLogo} alt="" className=' rounded-full w-12 sm:w-14' />
                                            </div>
                                            <div className='font-semibold flex gap-4 justify-between items-center '>
                                                <h3>{item.title}</h3>
                                                <a href={item.link} rel='noopener noreferrer' target='_blank' className='btn border-[2px] p-4 rounded-full border-white'><FaArrowRight className='icon text-xl lg:text-4xl' /></a>
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        item.relatedArticles.map((news, index) => <div key={index} className='  bg-[#F4F4F4] rounded-3xl flex items-center md:flex-wrap  justify-between gap-2 px-4 py-3'>
                                            <div className=' flex flex-col gap-3 text-base'>
                                                <p>{news.title}</p>
                                                <div className=' flex flex-wrap gap-4 items-center text-xs'>
                                                    <p className=' bg-[#FF5B5B] text-white py-2 px-4 rounded-3xl'>{item.domain}</p>
                                                    <p>18 June 2024</p>
                                                </div>
                                            </div>
                                            <a href={news.link} rel='noopener noreferrer' target='_blank' className='btn border-[2px] p-4 rounded-full border-[#5D5D5D]'><FaArrowRight className='icon text-xl lg:text-3xl xl:text-2xl' /></a>
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
            }
        </>

    )
}

export default Repeat
