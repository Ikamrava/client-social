import React, { useContext, useEffect, useState } from 'react'
import back from "../images/nature.jpg"
import Image from 'next/image'
import { AuthContext } from '@/context/authContext'

function MainProfile() {
    const {currentUser} =  useContext(AuthContext)
  const[user,setuser] = useState(null)
  useEffect(()=>{
    setuser(currentUser)
  },[currentUser])
  return (
    <div className='flex-[50%]  flex flex-col md:mx-5 px-5 md:my-5 mx-3 py-5 gap-5   '>
        <div className=' w-full h-32 relative'>
          <img src="https://images.unsplash.com/photo-1584990302213-1248392c4892?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2692&q=80" />
          <img className=' rounded-full w-[150px] absolute top-[100px] left-[38%]' src={user?.profilepic} alt="" />
        </div>
        
        <div className=' bg-white h-14 mt-10'>
            <p className=' text-black pt-20 text-center'>{user?.name}</p>
        </div>
        
    </div>
  )
}

export default MainProfile