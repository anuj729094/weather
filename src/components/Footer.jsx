import React from 'react'
import { FaTwitter, FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='  xl:flex xl:justify-center px-3 lg:px-12 xl:px-0 my-10'>
            <div className=' xl:w-[75rem] md:flex md:justify-between '>
                <div className=' md:w-[30%] flex flex-col justify-between'>
                    <div>
                        <h2 className=' text-[#E5101C] font-semibold text-2xl'>Buletin</h2>
                        <p className=' text-sm md:text-base my-3 '>Craft narratives that ignite insipiration , knowledge and insipiration</p>
                        <ul className='social flex gap-3'>
                            <li className=' bg-white p-2 rounded-full'>
                                <div className='bg-red-500 rounded-full p-[0.2rem]'>
                                    <FaFacebookF className=' text-white text-xs ' />
                                </div>
                            </li>
                            <li className=' bg-white p-2 rounded-full'>
                                <div className='bg-red-500 rounded-full p-[0.2rem]'>
                                    <FaTwitter className=' text-white text-xs ' />
                                </div>
                            </li>
                            <li className=' bg-white p-2 rounded-full'>
                                <div className='bg-red-500 rounded-full p-[0.2rem]'>
                                    <FaLinkedin className=' text-white text-xs ' />
                                </div>
                            </li>
                            <li className=' bg-white p-2 rounded-full'>
                                <div className='bg-red-500 rounded-full p-[0.2rem]'>
                                    <FaInstagram className=' text-white text-xs ' />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <p className=' relative md:static text-center md:text-left md:w-auto py-4 md:py-0  bottom-[-52rem] text-sm'>Copyright &copy; 2024 Buletin</p>
                </div>
                <div className=' my-4 md:my-0 md:w-[60%]  flex flex-col gap-10'>
                    <ul className=' grid grid-cols-2 md:grid-cols-4 gap-4'>
                        <li>
                            <p className=' font-semibold text-lg'>Business</p>
                            <ul className=' text-xs flex flex-col gap-3 mt-3'>
                                <li>Startup</li>
                                <li>Employee</li>
                                <li>Success</li>
                                <li>Videos</li>
                                <li>Markets</li>
                            </ul>
                        </li>
                        <li>
                            <p className=' font-semibold text-lg'>Business</p>
                            <ul className=' text-xs flex flex-col gap-3 mt-3'>
                                <li>Startup</li>
                                <li>Employee</li>
                                <li>Success</li>
                                <li>Videos</li>
                                <li>Markets</li>
                            </ul>
                        </li>
                        <li>
                            <p className=' font-semibold text-lg'>Business</p>
                            <ul className=' text-xs flex flex-col gap-3 mt-3'>
                                <li>Startup</li>
                                <li>Employee</li>
                                <li>Success</li>
                                <li>Videos</li>
                                <li>Markets</li>
                            </ul>
                        </li>
                        <li>
                            <p className=' font-semibold text-lg'>Business</p>
                            <ul className=' text-xs flex flex-col gap-3 mt-3'>
                                <li>Startup</li>
                                <li>Employee</li>
                                <li>Success</li>
                                <li>Videos</li>
                                <li>Markets</li>
                            </ul>
                        </li>
                    </ul>
                    <ul className=' grid grid-cols-2 md:grid-cols-4 gap-4'>
                        <li>
                            <p className=' font-semibold text-lg'>Business</p>
                            <ul className=' text-xs flex flex-col gap-3 mt-3'>
                                <li>Startup</li>
                                <li>Employee</li>
                                <li>Success</li>
                                <li>Videos</li>
                                <li>Markets</li>
                            </ul>
                        </li>
                        <li>
                            <p className=' font-semibold text-lg'>Business</p>
                            <ul className=' text-xs flex flex-col gap-3 mt-3'>
                                <li>Startup</li>
                                <li>Employee</li>
                                <li>Success</li>
                                <li>Videos</li>
                                <li>Markets</li>
                            </ul>
                        </li>
                        <li>
                            <p className=' font-semibold text-lg'>Business</p>
                            <ul className=' text-xs flex flex-col gap-3 mt-3'>
                                <li>Startup</li>
                                <li>Employee</li>
                                <li>Success</li>
                                <li>Videos</li>
                                <li>Markets</li>
                            </ul>
                        </li>
                        <li>
                            <p className=' font-semibold text-lg'>Business</p>
                            <ul className=' text-xs flex flex-col gap-3 mt-3'>
                                <li>Startup</li>
                                <li>Employee</li>
                                <li>Success</li>
                                <li>Videos</li>
                                <li>Markets</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
