'use client';

import { Formik } from 'formik';
import React from 'react'
import { editData } from '../_lib/action';
import { useRouter } from 'next/navigation';

export default function EditForm( {todo} ) {
    const router = useRouter();
  return (
    <div>
        <Formik
        initialValues={{
          title: todo.title,
          body: todo.body
        }}
        onSubmit={ async (val, { resetForm }) => {
            console.log(val);
            const { error, message } = await editData({ body: val, id: todo.id});
            if(!error)
            router.back();
        }}>
            {({ handleChange, handleSubmit, values }) => (
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <div>
                        <input className='border border-black'
                        onChange={handleChange}
                        value={values.title}
                        name='title'
                        type='text'
                        placeholder='Title'>
                        </input>
                    </div>
                    <div>
                        <input className='border border-black'
                        onChange={handleChange}
                        value={values.body}
                        name='body'
                        type='text'
                        placeholder='Body'>
                        </input>
                            </div>
            <button className='bg-blue-500' type='submit'>Update</button>
          </form>
        )}
      </Formik>
    </div>
  )
}