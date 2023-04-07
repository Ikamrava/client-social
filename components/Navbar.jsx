import React, { useState } from 'react'
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
import ham from "../images/ham.png"

import MenuItems from './MenuItems'
import friends from "../images/friends.png"
import image from "../images/image.png"
import market from "../images/market.png"
import watch from "../images/watch.png"
import memory from "../images/memory.png"
import event from "../images/event.png"
import game from "../images/game.png"
import gallery from "../images/gallery.png"
import video from "../images/video.png"
import message from "../images/message.png"





function Navbar() {
    const [show,setShow] = useState(false)
    function menuHandler(){
        if(show){
            setShow(false)
           }else{
            setShow(true)
           }
    }
  return (
    <div className='  py-4 shadow-lg px-5 justify-between flex bg-white sticky top-0 '>
        <div className=' flex items-center gap-5'>
            <div>
                <Image src={logo} width={120} height={30} alt="logo" />
            </div>

            <AiOutlineHome size={25}/>
            <BsMoonStars size={25}/>
            <AiOutlineAppstore size={25}/>

            <div className=' hidden md:block relative'>
                <input className=' border-2 w-[100%] px-10' type="text" placeholder='Search' />
                <AiOutlineSearch size={20} className=' absolute top-1 left-1'/>
            </div>
        </div>
        
        <div className='hidden md:flex  gap-5'>
            <AiOutlineUser size={25}/>
            <AiOutlineMail size={25}/>
            <AiOutlineBell size={25}/>
            <div className=' flex gap-2 items-center'>
                <Avatar name="Iman Kam" size='30' round={true}/>
                <p>Iman Kamrava</p>
            </div>
        
        </div>

       
        <div className=" overflow-scroll">
        <Image src={ham} width={35} height={10} onClick={menuHandler} />
        { show &&
            
            <div className='flex-[10%] flex flex-col border-2 w-[50%] bg-white  gap-2 pb-3 absolute  right-0 md:hidden  overflow-scroll h-[calc(100vh-70px)] top-[66px]  '>
      
                <div className=' flex items-center gap-3 pl-4 pt-5 cursor-pointer'>
                    <Avatar name="Iman Kam" size='30' round={true}></Avatar>
                    <p>Iman Kamrava</p>
                </div>

                <MenuItems imageUrl={friends} title="Friends"/>
                <MenuItems imageUrl={image} title="Group"/>
                <MenuItems imageUrl={market} title="Market Place"/>
                <MenuItems imageUrl={watch} title="Watch"/>
                <MenuItems imageUrl={memory} title="Memories"/>
                <p className='pl-4 mt-5 pt-5 border-t-2'>Your Shortcuts</p>
                <MenuItems imageUrl={event} title="Events"/>
                <MenuItems imageUrl={game} title="Game"/>
                <MenuItems imageUrl={gallery} title="Gallery"/>
                <MenuItems imageUrl={video} title="Videos"/>
                <MenuItems imageUrl={message} title="Messages"/>
                <p className='pl-4 mt-5 pt-5 border-t-2'>Others</p>
                <MenuItems imageUrl={gallery} title="Fundraiser"/>
                <MenuItems imageUrl={video} title="Tutorials"/>
                <MenuItems imageUrl={message} title="Courses"/>
                
                </div>
                }
            
        </div>

    </div>
  )
}

export default Navbar