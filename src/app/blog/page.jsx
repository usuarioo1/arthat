'use client'
import { apiUrlBlog } from '@/utils/api';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Page = () => {
    const [blogList, setBlogList] = useState([]);

    useEffect(() => {
        fetch(apiUrlBlog)
            .then(response => response.json())
            .then(data => setBlogList(data.info))
            .catch(error => console.error('Error al hacer la solicitud', error));
    }, []);

    return (
        <div className='container justify-center mx-auto'>
            <div className='text-center text-black text-4xl font-bold mb-10 mt-20'>BLOG</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {blogList.map(blog => (
                    <Link href={`/blog/${blog._id}`} key={blog._id}>
                        <div className='my-4 p-4 border border-gray-300 rounded-lg text-black'>
                            <h1 className='text-xl font-bold'>{blog.titulo}</h1>
                            <div className='my-2'>
                                <img src={blog.img} alt={blog.titulo} className='w-full h-auto' />
                            </div>
                            <div className='my-2'>
                                <p>{blog.contenido}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>

    );
}

export default Page;
