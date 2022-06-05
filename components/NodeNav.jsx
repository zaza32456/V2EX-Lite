import React from 'react'
import Link from 'next/link'
import NodeContainer from './NodeContainer'

const NodeNav = () => {
  return (
    <div>
      <div 
        className='bg-white mt-5 p-2 border-y drop-shadow-sm border-t-0 rounded-t-sm
        text-sm text-gray-300'>
        <span className='font-semibold'>V2EX</span>
        <span> / 节点导航</span>
        <Link href='/'>
          <a className='absolute right-2 text-gray-500
            hover:underline hover:text-gray-600'>
            浏览全部节点
          </a>
        </Link>
      </div>

      <NodeContainer item='分享与探索'/>
      <NodeContainer item='V2EX'/>
      <NodeContainer item='Apple'/>
      <NodeContainer item='前端开发'/>
      <NodeContainer item='编程语言'/>
    </div>
  )
}

export default NodeNav