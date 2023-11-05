"use client"
import React, { useState, useRef } from 'react'
import style from "./add.module.css"
import axios from 'axios'
import { useRouter } from 'next/navigation'
const AddBlog = () => {
  const router = useRouter()
 const [blogData, setBlogData] = useState({
  title:"" ,
  content: ""
 })
 const [blog, setBlog] = useState({
  title:"" ,
  description: ""
 })

 const handleChange = (e)=>{
 setBlogData(prev=> ({...prev,[e.target.name]: e.target.value}))
 }
 const handleSubmit = (e)=>{
  e.preventDefault()
 axios.post("https://topia-next.vercel.app/api/blog",blogData).then((res)=>console.log(res.data));
 router.push('/', { scroll: false })
 }
 
  
  return (
    <div className={style.container}>
       
        <form className={style.form} onSubmit={handleSubmit}>
        <h1 className={style.header}>Add new Blog</h1>
            <input className={style.title} name='title' type="text" placeholder="Blog title" value={blogData.title} onChange={handleChange}/>
            <textarea rows={6} className={style.content}name='description' type="text" placeholder="Blog content" value={blogData.description} onChange={handleChange} />
            <button className={style.submit} >Submit</button>
        </form>
    </div>
  )
}

export default AddBlog