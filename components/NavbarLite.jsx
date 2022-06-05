import React from 'react'
import Link from 'next/link';

const Keyword = ({ context, href }) => {
  return (
    <Link href={href}>
      <a
        className='h-6 px-2 py-1 leading-4 text-sm text-gray-500  rounded-sm cursor-pointer
        hover:text-gray-700 hover:underline
        '>
        {context}
      </a>
    </Link>
  )
}

const NavbarLite = () => {
  return (
    <div className='flex flex-wrap bg-gray-50 pl-4 pr-2 py-2 w-full rounded-t-sm border-y border-t-0'>
      <Keyword context='獭獭' href=''/>
      <Keyword context='獭獭' href=''/>
      <Keyword context='獭獭' href=''/>
      <Keyword context='獭獭' href=''/>
      <Keyword context='獭獭' href=''/>
      <Keyword context='獭獭' href=''/>
      <Keyword context='獭獭' href=''/>
      <Keyword context='獭獭' href=''/>
      <Keyword context='獭獭' href=''/>
      <Keyword context='獭獭' href=''/>
      <Keyword context='獭獭' href=''/>
      <Keyword context='獭獭' href=''/>
    </div>
  )
}

export default NavbarLite