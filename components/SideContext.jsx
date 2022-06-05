import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const SideContext = ({ context }) => {
  return (
  <div 
    className='bg-white w-64 p-2 border-y drop-shadow-sm border-t-0
    flex  items-center'>
    <div className=''>        
      <Image 
        src='/images/avatar.jpg'
        height={24}
        width={24}
        alt='avatar'
        className='flex-shrink-0 rounded-sm'/>
     </div>


    <div 
      className='ml-2 w-48 text-sm text-gray-500
      hover:underline hover:text-gray-600'>
        <Link href='/'>
          {context}
        </Link>
    </div>

    
  </div>
  )
}

export default SideContext