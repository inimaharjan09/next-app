import Link from 'next/link'
import React from 'react'

export default function Navigation() {
  return (
    <div className='space-x-5'>
        <Link href={'/about'}>About</Link>
        <Link href={'/contact'}>Contact</Link>
        <Link href={'/product'}>Product Page</Link>
        <Link href={'/todo'}>Todo Page</Link>
    </div>
  )
}