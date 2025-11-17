//Blogs.jsx
import React, { use } from 'react';
import BlogCard from '../../Components/BlogCard/BlogCard';

const Blogs = ({ blogsPromise }) => {

    const blogs = use(blogsPromise);
    console.log(blogs);
    document.title = "DocTalk | Blogs";
    return (
        <div className='max-w-7xl mx-auto mt-5 pb-20'>
            <div className='bg-white rounded-lg py-12 px-5 content-center text-center mb-5'>
                <h1 className='text-3xl font-bold mb-3'>Blogs</h1>
                <p className='text-gray-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quisquam voluptatum quia, quaerat modi repellat debitis harum fuga praesentium illo.</p>
            </div>
            <div>
                {
                    blogs.map(blog=><BlogCard key={blog.id} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default Blogs;