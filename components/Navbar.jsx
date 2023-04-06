import React from 'react'
import logo from "../images/logo.png"
import Image from 'next/image'
import { AiOutlineHome } from 'react-icons/ai';
import { BsMoonStars } from 'react-icons/bs';
import { AiOutlineAppstore } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineBell } from 'react-icons/ai';
import Avatar from 'react-avatar';





function Navbar() {
  return (
    <div className=' hidden py-4 shadow-lg px-5 justify-between md:flex bg-white  '>
        <div className=' flex items-center gap-5'>
            <div>
                <Image src={logo} width={120} height={30} alt="logo" />
            </div>

            <AiOutlineHome size={25}/>
            <BsMoonStars size={25}/>
            <AiOutlineAppstore size={25}/>
            <div className=' relative'>
                <input className=' border-2 w-[100%] px-10' type="text" placeholder='Search' />
                <AiOutlineSearch size={20} className=' absolute top-1 left-1'/>
            </div>
        </div>
        
        <div className=' flex gap-5'>
        <AiOutlineUser size={25}/>
        <AiOutlineMail size={25}/>
        <AiOutlineBell size={25}/>
        <div className=' flex gap-2 items-center'>
            <Avatar name="Iman Kam" size='30' round={true}/>
            <p>Iman Kamrava</p>
        </div>
        
        </div>
    </div>
  )
}

export default Navbar