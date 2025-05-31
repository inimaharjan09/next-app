'use client';
import React, { useTransition } from 'react'
import { removeTodo } from '../_lib/action';
import toast from 'react-hot-toast';

export default function RemoveTodo({ id }) {
  const [isLoading, startTransition] = useTransition()
  const handleRemove = () => {
    startTransition(async () => {
      const { error, message } = await removeTodo(id);
      console.log(error);
      if (!error) toast.success('Todo removed successfully');
    })
  }

  return (
    <div>

      <button
        onClick={handleRemove}
        className=' bg-red-500 px-2 py-1'>Remove Todo</button>

      {isLoading && <span>Loading...</span>}


    </div>
  )
}