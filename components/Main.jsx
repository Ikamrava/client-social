import React from 'react'
import Stories from './Stories'
import Posts from './Posts'

function Main() {
  return (
    <div className='flex-[50%] border-2  bg-white dark:bg-slate-800 md:mx-5 px-5 md:my-5 mx-3 py-5   '>
      <div className=' '>
        <Stories/>
      </div>
      
      <Posts/>      
      </div>
  )
}

export default Main