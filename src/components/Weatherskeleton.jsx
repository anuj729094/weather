import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Weatherskeleton = () => {
    return (
        <div>
            <div className='flex  flex-col gap-2 border-b-[2px] border-solid py-4'>
                <Skeleton className=' h-9' />
                <Skeleton width={100} className=' h-4' />
            </div>
            <div className='flex gap-2 border-b-[2px]  items-center border-solid py-3'>
                <Skeleton width={35} circle className=' h-9' />
                <Skeleton width={25} className=' h-9' />
            </div>
            <div className='  border-b-[2px]  border-solid py-4'>
                <ul className=' flex items-center justify-between'>
                    <li className=' flex items-center gap-1'><Skeleton width={40} className=' h-7'/></li>
                    <li className=' flex items-center gap-1'><Skeleton width={40} className=' h-7'/></li>
                    <li className=' flex items-center gap-1'><Skeleton width={40} className=' h-7'/></li>
                </ul>
            </div>
        </div>
    )
}

export default Weatherskeleton
