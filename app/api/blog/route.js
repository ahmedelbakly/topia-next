import Blog from "@/models/blogModel";
import connection from "../../../utils/database"
import { NextRequest, NextResponse } from "next/server";


 export const GET  = async(req,res)=>{
  const blogs = await Blog.find()
    return NextResponse.json(blogs)
 }
 
 export const POST  = async(req,res)=>{
 const data = await req.json()
 const newBlog =  await Blog.create(data)
    return NextResponse.json(
      newBlog
    )
 }
 