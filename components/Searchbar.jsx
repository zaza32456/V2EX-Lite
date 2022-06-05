import React, { useState, useEffect } from 'react'
import Image from 'next/image';

const Searchbar = () => {
  const [onFocus, setOnfucus] = useState(false)

  return (
    <div id='search-container' 
      className={`flex pl-2 h-7 w-60 ml-2 justify-start items-center rounded-full
      bg-gray-50  ${onFocus? 'border-x border-y border-gray-600' : ''}`}
      >
      <Image 
        src='/images/search@light.png'
        height={16}
        width={16}
        alt='search'
        className={`${onFocus? 'opacity-80' : 'opacity-40'}`}
      />
      <input 
        id='search' 
        type='text'
        onFocus={() => setOnfucus(true)}
        onBlur={() => setOnfucus(false)}
        className='bg-gray-50 ml-2 outline-none' 
        />
    </div>
  )
}

export default Searchbar