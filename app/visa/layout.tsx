import React from 'react'
import Visa from './page'
import Link from 'next/link'



const layout = () => {
  return (
    <div className='bg-cyan-600 p-5 flex-row text-center flex-auto mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <ul>
      <li className='flex-row'>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/visa">visa</Link>
      </li>
      <li>
        <Link href="/dashboard">Dashboard</Link>
      </li>
    </ul>
       <Visa /> 
        
    </div>
  )
}

export default layout