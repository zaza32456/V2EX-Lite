import React from 'react'
import Link from 'next/link';

const Tool = ({ href, text }) => {
  return (
    <Link 
      href={href} >
      <a className='ml-2 text-gray-800 
        hover:text-gray-400'>
        {text}
      </a>
    </Link>
  )
}

export default Tool