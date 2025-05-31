'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function Client() {
    const router = useRouter();
    const [ count, setCount ] = useState();
  return (
    <div>
        <h1>Hello jee Client components</h1>
       <button onClick={() => router.push('/product')}>Go to Product Page</button>
        
      
    </div>
  )
}
