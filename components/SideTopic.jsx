import React from 'react'
import SideContext from './SideContext'

const SideTopic = ({ context }) => {

  return (
    <div>
      <div 
        className='bg-white w-64 p-2 border-y drop-shadow-sm border-t-0 rounded-t-sm
        text-sm text-gray-400 font-light'>
        今日热议主题
      </div >

      <SideContext context='体检过程中，你发现自己有哪些异常项目？'/>
      <SideContext context='办公室布网络，是选 AC+AP，还是最近几年的有线回程 mesh 比较好？'/>
      <SideContext context='新手入坑机械键盘段落轴，幸福感++'/>

    </div>

  )
}

export default SideTopic