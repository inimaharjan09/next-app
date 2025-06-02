'use client';

import React from 'react'
import { useRouter } from 'next/navigation';

export default function Error( {error, reset}) {

    const router = useRouter();
    
  return (
    <div>
        <h1>{error.message}</h1>
        <button onClick={() => router.back()}>Go Back</button>
        <br />
        <button onClick={reset}>Try again</button>
      
    </div>
  )
}
