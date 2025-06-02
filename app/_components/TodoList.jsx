import axios from 'axios';
import React from 'react'
import RemoveTodo from './RemoveTodo';
import Link from 'next/link';

export default async function TodoList() {
    const response = await axios.get('https://683a849a43bb370a8672ea61.mockapi.io/tod');
    const todos = response.data;

  return (
    <div>
        {todos.map((todo) => (
            <div key={todo.id} className='shadow-2xl max-w-[300px] p-5'>
                <h1>{todo.title}</h1>
                <p>{todo.body}</p>
                <RemoveTodo id={todo.id}/>
                <Link href={`/form/edit/${todo.id}`}>
                <button>Edit Todo</button>
                </Link>
                </div>
        ))}
        
      
    </div>
  )
}
