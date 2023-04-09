import React from 'react'
import Stories from './Stories'
import Avatar from 'react-avatar'
import {BsThreeDots} from "react-icons/bs"
import {AiOutlineHeart} from "react-icons/ai"
import {BiCommentDots} from "react-icons/bi"
import {BsShare} from "react-icons/bs"


function Post({post}) {
  return (
    <div className='bg-white dark:bg-slate-800 rounded-xl p-5'>
        <div className=' flex justify-between mb-5'>
            <div className=' flex gap-4'>
                <Avatar name="Iman Kam" size='40' round={true} src={post?.profilepic}/>
                <p className=' flex flex-col'>{post.name} <span className=' text-sm'>a few min ago</span></p>
            </div>
            <div>
                <BsThreeDots/>
            </div>
        </div>

       
        <p className=' text-sm first-letter:capitalize'>{post.description}</p>

        <img className=' w-full my-5' src={post.img} alt="" />
        <div className=' flex gap-4'>
            <div className=' flex gap-2 items-center'>
                <AiOutlineHeart size={20}></AiOutlineHeart>
                <span>Likes</span>
            </div>

            <div className=' flex gap-2 items-center'>
                <BiCommentDots size={20}></BiCommentDots>
                <span>Comments</span>
            </div>

            <div className=' flex gap-2 items-center'>
                <BsShare size={20}></BsShare>
                <span>Share</span>
            </div>

        </div>
  
        
    </div>
  )
}

export default Post
