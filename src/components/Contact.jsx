import React, { useState } from 'react'
import { BsFillSendFill } from "react-icons/bs";
import toast , {Toaster} from 'react-hot-toast';
const Contact = () => {
  const [userData  , setUserData]=useState({
    name:"",company:"", email:""
  })
  const postdata = (e)=>{
      e.preventDefault()
      setUserData({
        name:"",company:"", email:""
      })
      toast.success(`Thank you for your response ${userData.name}`)
  }
  return (
    <div style={{scrollMarginTop:"5rem"}} id='contact' className=' xl:flex xl:justify-center px-3 lg:px-10 xl:px-0 my-10'>
       <div className=' xl:w-[75rem] flex flex-col gap-4 sm:flex-row sm:justify-between'>
          <div className=' sm:w-[50%]'>
             <h2 className=' text-2xl sm:text-4xl font-semibold'>
                Let's <span className='text-[#E10C0D]'>Talk</span>
             </h2>
             <p className=' my-3 text-sm md:text-lg'>Tell us about your queries here , or send us email at <span className=' font-medium text-[#E10C0D]'>abc@gmail.com</span></p>
             <form className=' flex flex-col gap-3 sm:gap-5' onSubmit={postdata}>
                <div>
                    <label htmlFor="name" className=' text-sm'>Name</label>
                    <input type="text" id="name" required value={userData.name} onChange={(e)=>setUserData({...userData,name:e.target.value})} className=' mt-1 border-[2px] border-solid border-[#EDEDED] rounded-md w-full outline-none py-2 pl-2'/>
                </div>
                <div>
                    <label htmlFor="company" className=' text-sm'>Company</label>
                    <input type="text" id="company" required value={userData.company} onChange={(e)=>setUserData({...userData,company:e.target.value})}  className=' mt-1 border-[2px] border-solid border-[#EDEDED] rounded-md w-full outline-none py-2 pl-2'/>
                </div>
                <div>
                    <label htmlFor="email" className=' text-sm'>Email</label>
                    <input type="email" id="email" required value={userData.email} onChange={(e)=>setUserData({...userData,email:e.target.value})}  className=' mt-1 border-[2px] border-solid border-[#EDEDED] rounded-md w-full outline-none py-2 pl-2'/>
                </div>
                <button type='submit' className='text-base flex justify-center items-center gap-1 bg-[#E10C0D] text-white rounded-md py-3'>Send Message<BsFillSendFill/>
                </button>
             </form>
          </div>
          <div className=' '>
            <div>
                <h2 className=' text-sm'>Phone Number</h2>
                <p className=' font-semibold text-base mt-3'>+91 8756896789</p>
            </div>
            <div className=' my-3'>
                <h2 className=' text-sm'>For Support</h2>
                <p className=' font-semibold text-base mt-3'>abc@gmail.com</p>
            </div>
          </div>
       </div>
       <Toaster/>
    </div>
  )
}

export default Contact
