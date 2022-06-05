import Link from 'next/link'
import React from 'react'
import LogIn from './LogIn'
import SideTopic from './SideTopic'
import SideCell from './SideCell'
import Community from './Community'


const Sidebars = () => {
  const baseStyle = 'bg-white w-64 p-2'
  const topStyle = 'bg-white w-64 p-2 border-y drop-shadow-sm border-t-0 rounded-t-sm'
  const midStyle = 'bg-white w-64 p-2 border-y drop-shadow-sm border-t-0'
  const bottomStyle = 'bg-white w-64 p-2 rounded-b-sm drop-shadow'

  return (
    <div id='sidebar-container' className='flex flex-col gap-5 ml-5'>
      <LogIn />
      <SideTopic context='所以 Apple 把自己正式翻译成苹果了？'/>
      <SideCell title='最热节点' rsson='true'/>
      <SideCell title='最近新增节点'/>
      <Community />

     </div>
  )
}

export default Sidebars