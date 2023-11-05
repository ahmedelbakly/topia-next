import React from "react";

export const metadata = {
  title: 'blog details',
  description: ' blog details for blog app',
}
const BlogDetails = async ({ params }) => {
  const id = params.id;
  const res = await fetch(`http://localhost:3000/api/blog/${id}`);
  const data = await res.json();
  console.log(data);
  return (
    <div className="text-black bg-red-600 flex justify-center items-center min-h-screen ">
      <div className="text-white bg-green-600 flex justify-center items-start flex-col h-max px-6 py-5">
        <h2 className="text-white text-3xl mb-8">{data[0].title}</h2>
        <p className="text-white text-2xl">{data[0].description}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
