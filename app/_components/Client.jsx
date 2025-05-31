import { useRouter } from 'next/router'
import React, { useState } from 'react'

export default function Client() {
    const router = useRouter();
    const [ count, setCount ] = useState();
  return (
    <div>
        <h1>Hello jee Client components</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, natus voluptatum eum voluptate enim vitae rem. Dolorem similique laboriosam doloribus, fugit ut sint magni cumque natus voluptatem, officiis, voluptas quas!</p>
        
      
    </div>
  )
}
