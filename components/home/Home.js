"use client"
import React, { useState,useEffect } from 'react'
import Button from '../helper/Button'
import Link from 'next/link';

const HomePage = () => {
    const [data, setData] = useState([]);
useEffect(() => {
    fetch('https://topia-next.vercel.app/api/blog').then(res=> res.json()).then(data=>setData(data))

  
}, [data])

  return (
    <section className="px-10">
    { data.length>0? data.map((blog) => (
      
      <div className="card flex justify-between shadow-blue-500 shadow-xl bg-orange-300 my-8 p-3 px-10 hover:bg-red-300 capitalize	" key={blog._id}>
        <Link href={`/blog/${blog._id}`}>

        <div>
        <h2 className="text-black text-3xl mb-3">{blog.title}</h2>
        <p className="text-black text-2xl ">{blog.description}</p>
        </div>
        </Link>
        <Button  id= {blog._id}/>
      </div>
      
     
      
    )):(<h2 className='text-black uppercase text-center text-3xl mt-32'> No blogs in database</h2>)}
  </section>
  )
}

export default HomePage