import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Searchbar from './Searchbar';

// —————————————— 辅助组件 —————————————— 
  //  首页右上角侧菜单栏
const Tool = ({ href, text }) => {
  return (
    <Link 
      href={href} >
      <a className='ml-2 text-gray-800 
        hover:text-gray-400'>
        {text}
      </a>
    </Link>
  )
}

// —————————————— 主体组件 ——————————————

const Header = () => {
  return (
    <div className='flex w-full border-b-2 pt-2 drop-shadow-sm bg-white '>
      
      <div className='flex flex-shrink-0 px-5 pb-1 w-10/12 items-center'>
        <div className='flex flex-shrink-0 flex-grow justify-center'>
            <Link href='/'>
              <a className='h-8'>
                <Image 
                  src='/images/v2ex@2x.png'
                  height={30}
                  width={100}
                  alt='logo'
                  className=''/>
              </a>
            </Link>
            <Searchbar />
        </div>
          

        <div id='tools' className='flex flex-shrink-0 flex-grow justify-end l-10 min-w-96 max-w-160'>
          <Tool 
            href='/'
            text='首页'
          />

          <Tool 
            href='/'
            text='注册'
          />

          <Tool 
            href='/'
            text='登录'
          />
        </div>
      </div>
    </div>
  )
}

export default Header