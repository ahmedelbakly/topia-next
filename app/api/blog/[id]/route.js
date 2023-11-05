import Blog from "@/models/blogModel"
import { NextResponse } from "next/server"

export const GET  = async(req,res)=>{
    const id = req.url.split("blog/")[1]
    const blog = await Blog.find({_id:id})
  
       return NextResponse.json(
        blog
       )
    }
export const PUT  = async(req,res)=>{
    const id = req.url.split("blog/")[1]
    const data = await req.json()
  
    //const newBlog =  await Blog.create(data)
       return NextResponse.json(
      {id,data}
       )
    }
    export const DELETE  = async(req,res)=>{
        const id = req.url.split("blog/")[1]
         await Blog.deleteOne({_id:id})
       return NextResponse.json(
       "deleted is sucssfily"
       )
    }