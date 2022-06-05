import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// —————————————— 辅助组件 —————————————— 
  // Cell胶囊
const NodeCell = ({ nodeName }) => {
  return (
    <div 
      className='border-x border-y text-sm mr-1 mb-1 px-2 py-0.5 rounded-full text-gray-600 bg-white
      hover:text-gray-800 hover:drop-shadow-md hover:border-gray-300'>
        <Link href='/'>
          <a>
            {nodeName}
          </a>
        </Link>
    </div>
  )
}


// —————————————— 主体组件 ——————————————

const SideCell = ({title, rsson}) => {
  return (
    <div>
      <div 
        className='bg-white w-64 p-2 border-y drop-shadow-sm border-t-0 rounded-t-sm
        text-sm text-gray-400 font-light'>
        {title}
      </div>

      <div className={`flex flex-wrap bg-white w-64 p-2 border-y drop-shadow-sm border-t-0
          ${rsson ? '' : 'drop-shadow rounded-b-sm'}`}>
        <NodeCell nodeName='问与答'/>
        <NodeCell nodeName='全球工单系统'/>
        <NodeCell nodeName='程序员'/>
        <NodeCell nodeName='酷工作'/>
        <NodeCell nodeName='求职'/>
      </div>

      {rsson 
        ? <div 
            className='flex bg-white w-64 p-2 rounded-b-sm drop-shadow'>
            <Image
              src='/images/rss@2x.png'
              width={16}
              height={16}
              alt='rss'
              />
              <a href='#'
                className='text-xs ml-1 text-gray-500 
                hover:underline hover:text-gray-600'>RSS</a> 
          </div> 
        : ''}
    </div>
  )
}

export default SideCell