import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Searchbar from './Searchbar';
import Tool from './Tool';

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
            {/* TODO:搜索框继承阴影 */}
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