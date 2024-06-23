import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Hotskeleton = () => {
  return (
    <div>
        <ul className=' hots inline-flex whitespace-nowrap gap-3 overflow-auto w-full my-5'>
            <Skeleton width={100} height={40}/>
            <Skeleton width={100} height={40}/>
            <Skeleton width={100} height={40}/>
            <Skeleton width={100} height={40}/>
            <Skeleton width={100} height={40}/>
            <Skeleton width={100} height={40}/>
            <Skeleton width={100} height={40}/>
            <Skeleton width={100} height={40}/>
        </ul>
    </div>
  )
}

export default Hotskeleton
