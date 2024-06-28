import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Repeat from '../components/Repeat'
import { firstdata } from '../../data';
import { getnewsbylocation } from '../utilis/func';

const NewsByCategory = () => {
    const data = useParams()
    const [loading, setLoading] = useState(false)
    const [newsError, setNewsError] = useState(null)
    const [arrData, setArrData] = useState([])
    useEffect(() => {
        setLoading(true)
        setNewsError(null)
        getnewsbylocation(data).then(function (res) {
            if (res.status) {
                setLoading(false)
                setArrData(res.data)
            }
            else {
                setLoading(false)
                throw new Error(res.msg)
            }
        }).catch((error) => setNewsError(error.message))
    }, [data])
    return (
        <div className=' xl:flex xl:justify-center'>
            <div className=' xl:w-[75rem] px-3 lg:px-12 xl:px-0'>
                <h1 className=' text-2xl font-medium my-3'>Home &gt; {data.category}</h1>
                <Repeat loading={loading} data={arrData} newsError={newsError} grid={1} />
            </div>
        </div>
    )
}

export default NewsByCategory
