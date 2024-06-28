import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Newsskeleton = ({grid}) => {
  return (
    <div>
      <div className=' grid  grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  gap-x-5 gap-y-4'>
        <div className='  col-span-2  sm:col-span-3 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4  text-xs sm:text-sm lg:text-lg font-medium '>
          <div style={window.innerWidth>=768?{gridColumnStart:grid}:{}} className='relative  bg-[#F4F4F4] h-[20rem] md:h-auto  image-con sm:col-span-2 rounded-3xl sm:row-span-3 flex '>
            <div className=' bg-[#00000061] rounded-3xl text-white text-sm sm:text-2xl lg:font-extrabold absolute w-full h-full flex flex-col justify-between py-3 px-4'>
              <div className=' flex flex-wrap justify-between gap-4 items-center text-xs sm:text-sm  font-semibold'>
                <Skeleton height={40} width={180} className=' rounded-3xl' />
                <ul className=' flex gap-2'>
                  <Skeleton width={25} className=' h-5' />
                  <Skeleton width={25} className=' h-5' />
                  <Skeleton width={25} className=' h-5' />
                </ul>
              </div>
              <div className='font-semibold flex  flex-wrap gap-4 justify-between items-center '>
                <Skeleton count={2} width={"30vw"} height={20} />
                <Skeleton circle width={50} height={50} />
              </div>
            </div>
          </div>
          <div className=' bg-[#F4F4F4] w-full  rounded-3xl flex items-center md:flex-wrap xl:flex-nowrap justify-between gap-2 px-4 py-3'>
            <div className=' flex flex-col w-full gap-3 text-base'>
              <Skeleton count={4} />
              <div className=' flex flex-col w-full gap-4 items-start text-xs'>
                <Skeleton height={30} width={150} className=' rounded-3xl' />
                <ul className=' flex gap-2'>
                  <Skeleton width={25} className=' h-5' />
                  <Skeleton width={25} className=' h-5' />
                  <Skeleton width={25} className=' h-5' />
                </ul>
              </div>
            </div>
            <div className=''>
              <Skeleton circle width={48} className=' h-12' />
            </div>
          </div>
          <div className=' bg-[#F4F4F4]  rounded-3xl flex items-center md:flex-wrap xl:flex-nowrap justify-between gap-2 px-4 py-3'>
            <div className=' flex flex-col w-full gap-3 text-base'>
              <Skeleton count={4} />
              <div className=' flex flex-col w-full gap-4 items-start text-xs'>
                <Skeleton height={30} width={150} className=' rounded-3xl' />
                <ul className=' flex gap-2'>
                  <Skeleton width={25} className=' h-5' />
                  <Skeleton width={25} className=' h-5' />
                  <Skeleton width={25} className=' h-5' />
                </ul>


              </div>
            </div>
            <div className=''>
              {/* <FaArrowRight className=' text-xl lg:text-4xl' /> */}
              <Skeleton circle width={48} className=' h-12' />
            </div>
          </div>
          <div className=' bg-[#F4F4F4]  rounded-3xl flex items-center md:flex-wrap xl:flex-nowrap justify-between gap-2 px-4 py-3'>
            <div className=' flex flex-col w-full gap-3 text-base'>
              <Skeleton count={4} />
              <div className=' flex flex-col w-full gap-4 items-start text-xs'>
                <Skeleton height={30} width={150} className=' rounded-3xl' />
                <ul className=' flex gap-2'>
                  <Skeleton width={25} className=' h-5' />
                  <Skeleton width={25} className=' h-5' />
                  <Skeleton width={25} className=' h-5' />
                </ul>
              </div>
            </div>
            <div className=''>
              {/* <FaArrowRight className=' text-xl lg:text-4xl' /> */}
              <Skeleton circle width={48} className=' h-12' />
            </div>
          </div>
          <div className=' bg-[#F4F4F4]  rounded-3xl flex items-center md:flex-wrap xl:flex-nowrap justify-between gap-2 px-4 py-3'>
            <div className=' flex flex-col w-full gap-3 text-base'>
              <Skeleton count={4} />
              <div className=' flex flex-col w-full gap-4 items-start text-xs'>
                <Skeleton height={30} width={150} className=' rounded-3xl' />
                <ul className=' flex gap-2'>
                  <Skeleton width={25} className=' h-5' />
                  <Skeleton width={25} className=' h-5' />
                  <Skeleton width={25} className=' h-5' />
                </ul>
              </div>
            </div>
            <div className=''>
              {/* <FaArrowRight className=' text-xl lg:text-4xl' /> */}
              <Skeleton circle width={48} className=' h-12' />
            </div>
          </div>
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
      </div>
    </div>

  )
}

export default Newsskeleton
