'use client'
import { apiUrlBlog } from '@/utils/api';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const ListaDeBlogs = () => {
    const [blogList, setBlogList] = useState([]);

    useEffect(() => {
        fetch(apiUrlBlog)
            .then(response => response.json())
            .then(data => setBlogList(data.info))
            .catch(error => console.error('Error al hacer la solicitud', error));
    }, []);

    return (
        <div className='container'>
            <Link href={'blog'}><div className='text-center text-black text-2xl font-bold'>BLOG</div></Link>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {blogList.slice(0, 3).map(blog => ( // Usamos slice para limitar a los 3 primeros
                    <Link href={`/blog/${blog._id}`} key={blog._id}>
                        <div className='my-4 p-4 border border-gray-300 rounded-lg'>
                            <h1 className='text-xl font-bold text-black'>{blog.titulo}</h1>
                            <div className='my-2'>
                                <img src={blog.img} alt={blog.titulo} className='w-full h-auto' />
                            </div>
                            <div className='my-2'>
                                <p className='text-black'>{blog.contenido}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ListaDeBlogs;
