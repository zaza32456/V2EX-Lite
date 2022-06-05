import React from 'react'
import Link from 'next/link'

const LogIn = () => {
  const topStyle = 'bg-white w-64 p-2 border-y drop-shadow-sm border-t-0 rounded-t-sm'
  const bottomStyle = 'bg-white w-64 p-2 rounded-b-sm drop-shadow'

  return (
    <div id='logIn'>
      <div 
        className={`${topStyle}`}>    
          <p className='text-sm font-semibold'>V2EX = way to explore</p>
          <p className='text-sm pt-2 text-gray-400'>V2EX 是一个关于分享和探索的地方</p>
      </div>
      <div 
        className={`${bottomStyle} flex flex-col items-center `}>       
          <button type='button' className='text-sm font-semibold border-x border-y my-1 p-1 border-gray-400 rounded-md bg-white
            hover:drop-shadow-md'>
            现在注册
          </button>
          <p className='text-sm pt-1'>已注册用户请<span> </span>  
            <Link href='/'>
              <a className='text-gray-500 hover:text-gray-600 hover:underline'>登录</a>
            </Link>
          </p> 
      </div>
    </div>
  )
}

export default LogIn