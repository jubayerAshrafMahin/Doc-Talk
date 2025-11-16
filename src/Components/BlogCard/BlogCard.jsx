import React from 'react';

const BlogCard = ({blog}) => {
    return (
        <div className='rounded-lg py-4 px-6 border-l-6 border-blue-600 bg-white mb-5'>
            <h1 className='text-xl font-medium border-b border-dashed border-gray-300 py-2'>{blog.question}</h1>
            <p className='py-2 text-justify text-gray-700'>{blog.answer}</p>
       </div>
    );
};

export default BlogCard;