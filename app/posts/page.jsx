import React from 'react'
import { getPosts } from '../_lib/action'

export default async function Page() {
    const { posts } = await getPosts();
    
  return (
    <div>
        {posts.map((post) => (
            <div key={post.id} className='shadow-2xl max-w-[300px] p-5'>
                <h1>{post.name}</h1>
                <img className='h-[150px] w-[150px]' src={post.avatar} alt="" />
                <p>{post.email}</p>
                </div>
        ))}
    </div>
  )
}
