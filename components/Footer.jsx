import React from 'react'
import Image from 'next/image'

// —————————————— 辅助组件 —————————————— 

const Context = ({context}) => {
  return (
    <div className='pl-2 flex-shrink-0'>
      <a href='#'
        className='text-gray-500 text-sm font-semibold 
        hover:text-gray-600'>{context}
      </a> 
      
      <span className='text-gray-300'>&nbsp;·&nbsp;</span>
    </div>

  )
}


  
// —————————————— 主体组件 ——————————————

const Footer = () => {
  return (
    <div className='flex justify-center'>
      <div className='flex justify-center w-8/12 p-2'>
        <div className=''>
          <div className='flex items-self mt-2'>
            <Context context='关于'/>
            <Context context='帮助文档'/>
            <Context context='API'/>
            <Context context='FAQ'/>
            <Context context='我们的愿景'/>
            <Context context='广告投放'/>
            <Context context='感谢'/>
            <Context context='实用小工具'/>
          
            <div className='pl-1 flex-shrink-0'>
              <span
                className='text-gray-400 text-xs font-semibold '>
                  2611人在线
              </span> 
              <span
                className='px-2 text-gray-300 text-xs '>
                最高纪录5479
              </span> 
            </div>
            
              <Image 
                src='/images/do_logo.png'
                width={164}
                height={28}
                alt='logo'/>

          </div>

          <div className='flex flex-col pl-2 my-4 text-gray-400 text-sm font-medium'>
            <p className='my-1'>创意工作者们的社区</p>
            <p className='my-1'>World is powered by solitude</p>
          </div>


          <div className='flex flex-col pl-2 my-4 text-gray-300 text-xs font-medium'>
            <p >VERSION: 3.9.8.5 · 8ms · <span className='text-gray-400'>UTC 13:48 · PVG 21:48 · LAX 06:48 · JFK 09:48</span></p>
            <p className='my-1'>Developed with <span className='text-gray-400'>CodeLauncher</span></p>
            <p >♥ Do have faith in what you're doing.</p>
          </div>
          


        </div>
      </div>
    </div>
  )
}

export default Footer