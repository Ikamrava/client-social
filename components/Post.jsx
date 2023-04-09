import React from 'react'
import Stories from './Stories'

function Post({post}) {
  return (
    <div className=' w-full'>
        <img className=' w-full' src={post.img} alt="" />
        
    </div>
  )
}

export default Post
