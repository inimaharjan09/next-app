import axios from 'axios';
import React from 'react'

export default async function TodoList() {
    const response = await axios.get('https://683a849a43bb370a8672ea61.mockapi.io/todos');
    const todos = response.data;

  return (
    <div>
        {todos.map((todo) => (
            <div key={todo.id}>
                <h1>{todo.title}</h1>
                <p>{todo.body}</p>
                </div>
        ))}
        
      
    </div>
  )
}
