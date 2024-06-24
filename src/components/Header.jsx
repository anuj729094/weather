import React, { useEffect, useState } from 'react'
import handwriting from '../assets/handwriting.png'
import lightbulb from '../assets/lightbulb.png'
import book from '../assets/book.png'
import clapperboard from '../assets/clapperboard.png'
import { FaRegClock } from "react-icons/fa6";
import { GoSun } from "react-icons/go";
import { CiCloud } from "react-icons/ci";
import { FiWind } from "react-icons/fi";
import { LuCloudRainWind } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import Weatherskeleton from './Weatherskeleton'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { getquotes, getweatherdata } from '../utilis/func'

const Header = ({func}) => {
    const [weatherData, setWeatherData] = useState(null)
    const [errorweather, setErrorweather] = useState(null)
    const [errorquote, setErrorquote] = useState(null)
    const [quote, setQuote] = useState(null)
    const [state, setState] = useState("New Delhi")
    const [loading, setLoading] = useState(true)
    const [load, setLoad] = useState(true)
    useEffect(() => {
        if (state) {
            var timer = setTimeout(() => {
                setLoading(true)
                getweatherdata(state).then(function (res) {
                    if (res.status) {
                        setLoading(false)
                        setErrorweather(null)
                        setWeatherData(res.data)
                        func(res.data.location.country) 
                    }
                    else {
                        setLoading(false)
                        setErrorweather(res.msg)
                    }
                }).catch((error) => setErrorweather(error.message))
            }, 2000);
        }
        return () => clearTimeout(timer)
    }, [state])
    useEffect(() => {
        getquotes().then(function (res) {
            setLoad(true)
            if (res.status) {
                setLoad(false)
                setQuote(res.data)
            }
            else {
                setLoad(false)
                throw new Error(res.msg)
            }
        }).catch((error) => setErrorquote(error.message))
    }, [])
    return (
        <div id='home' className=' scroll-mt-32 xl:flex xl:justify-center px-3 lg:px-12 xl:px-0'>
            <div className=' xl:w-[75rem]'>
                <div className="banner  font-medium overflow-hidden bg-[#F5F5F5] rounded-md text-center flex gap-3 flex-col items-center py-8">
                    <h2 className=' text-[#42444D] tracking-[0.4rem] text-xs sm:text-sm'>WELCOME TO BULETIN</h2>
                    <p className=' text-center gap-2 text-base px-4 sm:px-0 sm:text-xl sm:w-[30rem]  flex items-center justify-center flex-wrap'>Craft narratives <span><img src={handwriting} alt="" className='w-3 lg:w-9' /></span> that ignite <span className=' text-[#E5101C]'>inpiration</span><span><img src={lightbulb} alt="" className=' w-3 lg:w-9' /></span>,<span className=' text-[#E5101C]'>knowledge</span><span><img src={book} alt="" className=' w-3 lg:w-9' /></span>,and <span className=' text-[#E5101C]'>entertainment</span> <span><img src={clapperboard} alt="" className='w-3 lg:w-9' /></span></p>
                </div>
                <div className="datetimeweather-con flex flex-col gap-4 sm:flex-row items-center sm:justify-between sm:items-start my-7">
                    <div className="datequote flex  sm:w-[50%] overflow-hidden  w-full items-center sm:items-start flex-col gap-3 text-sm sm:text-base ">
                        <p className=' bg-[#E5101C] flex items-center  gap-2 text-white rounded-3xl px-4 py-2'><FaRegClock />{new Date().toDateString()}</p>
                        {load ?
                            <>
                                <Skeleton count={3} width={window.innerWidth < 649 ? "100vw" : "50vw"} />
                                <Skeleton width={140} />
                            </> :
                            errorquote ? <h1>{errorquote}</h1> :
                                <div className='italic'>
                                    <q className=' text-xl'>{quote.content}</q>
                                    <p className=' mt-3'>--{quote.author} <sup>""</sup></p>
                                </div>}
                    </div>
                    <div className="weather  sm:w-[30%] flex flex-col text-sm md:text-base lg:text-xl">
                        <div className='bg-[#F4F4F4] rounded-3xl flex items-center gap-2 text-sm py-3 sm:py-4 pl-3'>
                            <CiSearch className=' text-xl' />
                            <input type="text" placeholder='Search' className='  outline-none bg-transparent w-full ' onChange={(e) => setState(e.target.value)} />
                        </div>
                        {loading ? <Weatherskeleton /> : errorweather ? <h1>{errorweather}</h1> : weatherData && <>
                            <div className=' flex  flex-col gap-2 border-b-[2px] border-solid py-4'>
                                <p className=' font-medium  text-3xl'>{weatherData.location.name}</p>
                                <p>{weatherData.current.condition.text || <Skeleton />}</p>
                            </div>
                            <div className=' flex gap-2 border-b-[2px]  items-center border-solid py-4'>
                                {/* <p className=' font-medium '><GoSun className='' /></p> */}
                                <img src={weatherData.current.condition.icon} alt="" />
                                <p>14"c</p>
                            </div>
                            <div className='  border-b-[2px]  border-solid py-4'>
                                <ul className=' flex items-center justify-between'>
                                    <li className=' flex items-center gap-1'><FaRegEye />{weatherData.current.vis_km}</li>
                                    <li className=' flex items-center gap-1'><FiWind />{weatherData.current.wind_kph} km/hr</li>
                                    <li className=' flex items-center gap-1'><LuCloudRainWind />6.7%</li>
                                </ul>
                            </div>
                        </>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
