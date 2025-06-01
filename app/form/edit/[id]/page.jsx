import EditForm from '@/app/_components/EditForm.jsx';
import axios from 'axios';
import React from 'react'

export default async function Page( { params }) {
    const { id } = await params;
    //console.log(id);
    const response = await axios.get(`https://683a849a43bb370a8672ea61.mockapi.io/todos/${id}`);
    const todo = response.data;

  return (
    <div>
        <EditForm todo={todo} />
      
    </div>
  )
}
