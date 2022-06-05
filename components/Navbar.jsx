import React from 'react'

// —————————————— 辅助组件 —————————————— 

  // 0级目录关键字
const IndexWord = ({ context }) => {
  return (
    <button
    // TODO：focus失去焦点会消失，不用focus
      className='h-6 px-2 py-1 leading-4 text-sm rounded-sm cursor-pointer mr-1
      hover:bg-gray-100
      focus:bg-gray-700 focus:text-white
      '>
      {context}
    </button>
  )
}

// —————————————— 主体组件 ——————————————

const Navbar = () => {
  return (
    <>
      <div className='flex flex-wrap mr-1 p-2 bg-white w-full rounded-t-sm'>
        <IndexWord context='开心'/>
        <IndexWord context='开心'/>
        <IndexWord context='开心'/>
        <IndexWord context='开心'/>
        <IndexWord context='开心'/>
        <IndexWord context='开心'/>
        <IndexWord context='开心'/>
        <IndexWord context='开心'/>
        <IndexWord context='开心'/>
        <IndexWord context='开心'/>
        <IndexWord context='开心'/>
        <IndexWord context='开心'/>
        <IndexWord context='开心'/>
        <IndexWord context='开心'/>
        <IndexWord context='开心'/>
      </div>
    </>
      
      
  )
}

export default Navbar