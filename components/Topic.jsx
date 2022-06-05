import React from 'react'
import Image from 'next/dist/client/image'
import Link from 'next/link';

// —————————————— 辅助组件 —————————————— 

const InfoButton = ( {href, context, className} ) => {
  return (
    <Link href={href}>
      <a className={className}>
        {context}
      </a>
    </Link>

  )
}

// —————————————— 主体组件 —————————————— 

const Topic = ( { topicLink, topicContext } ) => {
  return (
    <div className='flex bg-white w-full border-y border-t-0 p-2 px-3 items-center'>

      {/* 头像栏 */}
      <div id='avatar-container' className='h-12 flex-shrink-0'>
        <Link href='/'>
          <Image 
            src='/images/avatar.jpg'
            width={48}
            height={48}
            alt='avatar'
            className='rounded-sm'/>
        </Link>

      </div>

      {/* 主题栏 ： 主标题 + 主题信息 */}
      <div id='topic-container' className='flex flex-col gap-2 ml-3 flex-grow'>
        <div id='topic-link' >
          <Link href={topicLink}>
            <a 
              className='text-gray-500
              hover:text-gray-700 hover:underline'>
              {topicContext}
            </a>
          </Link>
        </div>

        <div id='topic-info' className='text-gray-400 text-xs font-light'>

          <InfoButton 
            href='/'
            context='Python'
            className=' bg-gray-100 rounded p-0.5 leading-3
              hover:bg-gray-200 hover:text-gray-600'/>
          
          &nbsp;&nbsp;•&nbsp;&nbsp;

          <InfoButton 
            href='/'
            context='Meowmini'
            className='font-semibold text-gray-500
              hover:underline'/>

          &nbsp;&nbsp;•&nbsp;&nbsp;

          <InfoButton 
            href='/'
            context='2 分钟前'
            className=''/>

          &nbsp;&nbsp;•&nbsp;&nbsp;

          <span>最后回复来自</span>

          &nbsp;&nbsp;

          <InfoButton 
            href='/'
            context='幻海'
            className='font-semibold text-gray-500
              hover:underline'/>

        </div>

      </div>

      {/* 回复数量 */}
      <div id='count' className='pl-16'>
        <button 
          className='bg-gray-400 bg-opacity-70 text-white px-3 text-sm rounded-full
          hover:bg-opacity-100'>
          5
        </button>
      </div>
    </div>
  )
}

export default Topic