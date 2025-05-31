import React, { Suspense } from 'react'
import TodoList from '../_components/TodoList'

export default function Page() {
  return (
    <div>
        <h1 className='text-red-500 font-bold'>Welcome to Todo Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi hic dolor corrupti omnis, consequatur dolores maiores molestias minus aspernatur quasi voluptatum optio, amet nulla. Sed officia maxime similique quia tempore!</p>
        <Suspense fallback = {<h1>Loading.....</h1>}>
              <TodoList/>
        </Suspense>
      
      
    </div>
  )
}
