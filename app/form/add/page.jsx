'use client'
import React, { useActionState } from 'react'

const handleSubmit = async (prevState, formData) => {
    console.log(formData);

}
export default function Page() {
    const [ state, formAction, isPending] = useActionState(handleSubmit, null);
  
  return (
    <div>
        <form action = { formAction } className='space-y-4'>
          <div>
              <input name='title' type='text' placeholder='Title' className='border-2 border-red-500 px-2'>
            </input>
          </div>

          <div>
              <input name='body' type='text' placeholder='Body' className='border-2 border-red-500 px-2'>
            </input>
          </div>
          <button type='submit' className='my-2 bg-blue-500 px-2 py-1'>Submit</button>
        </form>   
    </div>
  )
}