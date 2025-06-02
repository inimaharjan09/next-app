import React from 'react'

export default function Page({ params }) {
  const { id } = params;

  // if (id === '100') {
  //   redirect('/product');
  // }
  return (
    <div>
        <h1>This is Product Detail Page</h1>
    </div>
  )
}
