"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation'
import React from 'react'

const Button = ({id}) => {
    const router = useRouter()
 

    const handleDelete = ()=>{
        axios.delete(`https://topia-next.vercel.app/api/blog/`+ id).then((res)=>console.log(res.data));
         router.push('/', { scroll: false })
    }
  return (
    <div>
        <button className="bg-black px-3 py-2 rounded" onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Button