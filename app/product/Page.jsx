import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <div>
      <h1>This is product page</h1>
      <div className='flex gap-5'>
        <Link href={'/product/100'}>
        <div className='h-[100px] w-[100px] bg-red-500'>
          </div>
          </Link>
          <div className='h-[100px] w-[100px] bg-purple-500'></div>
          <div className='h-[100px] w-[100px] bg-blue-500'></div>
        
      </div>
    </div>
  )
}
