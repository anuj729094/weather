import React from 'react'
import handwriting from '../assets/handwriting.png'

const Email = () => {
    return (
        <div id="subscribe" className=' scroll-mt-28 xl:flex xl:justify-center  px-3 lg:px-12 xl:px-0 my-10'>
            <div className=' xl:w-[75rem] lg:h-[12rem] bg-[#F5F5F5] px-4 xl:px-10 flex gap-10 sm:flex-row justify-between sm:items-center flex-col rounded-md py-7'>
                <div>
                    <h2 className=' text-[#474A52] font-semibold text-xs sm:text-sm tracking-[0.4rem] '>GET FIRST UPDATE</h2>
                    <p className='mt-2 font-semibold flex flex-wrap items-center lg:text-3xl md:text-xl'>Get the news in front line by subscribe <span><img src={handwriting} className=' w-8 lg:w-10'/></span>our latest updates</p>
                </div>
                <div className=' flex flex-wrap items-center gap-2'>
                  <input type="text" placeholder='Your email' className=' bg-white outline-gray-500 border-[2px] border-solid border-[#f5f5f5a7] py-2 rounded-md pl-2 md:w-[15rem] lg:w-[20rem] text-base' />
                  <button className='py-3 px-4 bg-[#E50914] text-white text-sm rounded-md'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Email
