import React, { Suspense } from 'react'
import TodoList from '../_components/TodoList'
import Link from 'next/link'


export default function Page() {
  return (
    <div>
        <h1 className='text-red-500 font-bold'>Welcome to Todo Page</h1>
        <Link href={'/form/add'}>
        <button className='my-2 bg-blue-500 py-1'> Add Todo </button>
        </Link>
        
        <Suspense fallback = {<h1>Loading.....</h1>}>
              <TodoList/>
        </Suspense>
      
      
    </div>
  ) 
}
