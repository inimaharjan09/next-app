import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <div>

      <p>This is product Page</p>

      <div className='flex gap-5'>


        <Link href={'/product/100'}>
          <div className='h-[100px] w-[100px] bg-red-700'></div>
        </Link>



        <div className='h-[100px] w-[100px] bg-purple-700'></div>
        <div className='h-[100px] w-[100px] bg-blue-600'></div>
      </div>


    </div>
  )
}