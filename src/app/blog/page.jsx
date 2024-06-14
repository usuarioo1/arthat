'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const page = () => {
    const [blogList, setBlogList] = useState([]);

    useEffect(() => {
        fetch('https://backendjwl.onrender.com/blogs')
            .then(response => response.json())
            .then(data => setBlogList(data.info))
            .catch(error => console.error('Error al hacer la solicitud', error));
    }, []);

    return (
        <div className='container justify-center mx-auto'>
            <div className='text-start text-black text-2xl font-bold'>BLOG</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {blogList.map(blog => (
                    <Link href={`/blogs/${blog._id}`} key={blog._id}>
                        <div className='my-4 p-4 border border-gray-300 rounded-lg'>
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

export default page;
