import React from 'react'
import Link from 'next/link'

// —————————————— 辅助组件 —————————————— 

  // 节点
const NodeText = ({ nodeName }) => {
  return (
    <div>
      <Link href='/'>
        <a className='px-2 text-sm text-gray-500
          hover:underline hover:text-gray-600'>
          {nodeName}
        </a>
      </Link>
    </div>

  )
}


// —————————————— 主体组件 ——————————————

const NodeContainer = ({ item }) => {
  return (
      <div className='flex  items-center bg-white p-2 border-y drop-shadow-sm border-t-0 rounded-t-sm
      text-sm text-gray-300 '>
        <div className='flex justify-end w-24'>
          <p className='text-sm text-gray-300'>{item}</p> 
        </div>

        <div className='flex flex-wrap'> 
          <NodeText nodeName='Apple'/>
          <NodeText nodeName='macOS'/>
          <NodeText nodeName='iPhone'/>
          <NodeText nodeName='MacBook Pro'/>
          <NodeText nodeName='iOS'/>
          <NodeText nodeName='Web Dev'/>
          <NodeText nodeName='Go 编程语言'/>
          <NodeText nodeName='Go 编程语言'/>
          <NodeText nodeName='Go 编程语言'/>
          <NodeText nodeName='Go 编程语言'/>
          <NodeText nodeName='Go 编程语言'/>
          <NodeText nodeName='Lua'/>
        </div>

      </div>
      )
    }


export default NodeContainer