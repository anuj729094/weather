import React, { useEffect, useState } from 'react'
import { firstdata, seconddata, thirddata } from '../../data';
import Repeat from './Repeat';
const News = () => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
              setLoading(false)
        }, 2000);
    }, [])
    return (
        <div className='flex flex-col items-center px-3 lg:px-12 xl:px-0'>
            <div className=' xl:w-[75rem]'>
                <Repeat loading={loading} data={firstdata}  newsError={false} grid={1} />
                <Repeat loading={loading} data={seconddata} newsError={false}  grid={2} />
                <Repeat loading={loading} data={thirddata}  newsError={false} grid={3} />
            </div>
        </div >
    )
}

export default News
