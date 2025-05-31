'use client';
import { Formik } from 'formik'
import React, { useTransition } from 'react'
import { addData } from '../../_lib/action';
import toast from 'react-hot-toast';


export default function Page() {
  const [isLoading, setTransition] = useTransition();

  return (
    <div>
      <Formik
        initialValues={{
          title: '',
          body: ''
        }}
        onSubmit={(val, { resetForm }) => {
          setTransition(async () => {
            const { error, message } = await addData(val);
            if (error) {
              toast.error(message);
            } else {
              toast.success('Data added successfully');

            }

          })
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <input
                onChange={handleChange}
                value={values.title}
                name='title'
                type="text" placeholder='Title' className='border-2 border-red-500 px-2' />

            </div>
            <div>
              <input
                onChange={handleChange}
                value={values.body}
                name='body'
                type="text" placeholder='Body' className='border-2 border-red-500 px-2' />

            </div>

            {isLoading ? <h1>Loading...</h1> :
              <button type='submit' className='my-2 bg-blue-500 px-2 py-1'>Submit</button>}
          </form>
        )}
      </Formik>


    </div>
  )
}