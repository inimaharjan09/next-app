import Link from 'next/link'
import React from 'react'

export default function Navigation() {
  return (
    <div className='space-x-5'>
        <Link href={'/posts'} className='font-bold'>Posts</Link>
        <Link href={'/contact'}>Contact</Link>
        <Link href={'/product'} className='font-bold'>Product Page</Link>
        <Link href={'/todo'} className='font-bold'>Todo Page</Link>

    </div>
  )
}