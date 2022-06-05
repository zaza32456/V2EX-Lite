import React from 'react'
import Link from 'next/link'

// —————————————— 辅助组件 —————————————— 
  //社区数据 
const Count = ({ item, amount }) => {
  return (
    <div className='flex '>
      <div className='flex w-20 justify-end'>
        <p className='text-sm text-gray-500'>{item}</p> 
      </div>
      <p className='pl-2 text-sm font-semibold text-gray-800'>{amount}</p>
    </div>
  )
}

  //排行榜
const Board = ({ title }) => {
  return (
    <div>
      <Link href='/'>
        <a className='text-sm text-gray-500 mb-1 hover:underline hover:text-gray-600'>
          {title}
        </a>
      </Link>
    </div>

  )
}


// —————————————— 主体组件 ——————————————

const Community = () => {
  return (
    <div>
      <div 
        className='bg-white w-64 p-2 border-y drop-shadow-sm border-t-0 rounded-t-sm
        text-sm text-gray-400 font-light'>
        社区运行情况
      </div>
      
      <div className='flex flex-wrap bg-white w-64 p-2 border-y drop-shadow-sm border-t-0 font-light'>
        <Count item='注册会员' amount='583852'/>
        <Count item='主题' amount='857385'/>
        <Count item='回复' amount='11734282'/>
      </div>

      <div className='bg-white w-64 p-2 rounded-b-sm drop-shadow'>
          <Board title='›财富排行榜' />
          <Board title='›消费排行榜' />     
      </div>

    </div>


  )
}

export default Community