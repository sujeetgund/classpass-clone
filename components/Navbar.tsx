import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className='flex justify-between items-center py-3 px-4 sticky shadow-md z-20 bg-white'>
      <div className=''>
        <Image src="./logo.svg" alt="logo" width={130} height={130} />
      </div>
      <div className='flex flex-1 justify-end items-center space-x-4 text-sm font-medium'>
        <Link className='nav-btn' href={`/search`}>Find classes & appointments</Link>
        <Link className='nav-btn' href={`/plans`}>Plans</Link>
        <Link className='nav-btn' href={`/features`}>How credits work</Link>
        <Link className='nav-btn' href={`/login`}>Log in</Link>
        <Link className='btn' href={`/pricing/getclasspass`}>Get started</Link>
      </div>
    </nav>
  )
}

export default Navbar