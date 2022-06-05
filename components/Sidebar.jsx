import React from 'react'

const Sidebar = () => {
  const sidebarStyle = 'bg-white w-64 rounded-sm drop-shadow-md'

  return (
    <div id='sidebar-container' className='flex flex-col gap-5 ml-5'>
      <div className={`${sidebarStyle} h-40`}>1</div>
      <div className={`${sidebarStyle} h-60`}>今日热议主题</div>
      <div className={`${sidebarStyle} h-60`}>最热节点</div>
      <div className={`${sidebarStyle} h-60`}>最近新增节点</div>
      <div className={`${sidebarStyle} h-60`}>社区运行情况</div>
    </div>
  )
}

export default Sidebar