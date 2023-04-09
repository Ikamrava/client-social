import Leftbar from '@/components/Leftbar'
import Navbar from '@/components/Navbar'
import Rightbar from '@/components/Rightbar'
import React from 'react'

function profile() {
  return (
    <div className='bg-gray-100 dark:bg-slate-700  mx-auto max-w-[1600px]'>
       <Navbar/>
       <div className=' flex items-start justify-between pt-1 '>
        <Leftbar/>
        <Rightbar/>
       </div>
    </div>
  )
}

export default profile