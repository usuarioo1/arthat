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

    // Función para truncar el contenido a las primeras 50 palabras
    const truncateContent = (content, wordLimit) => {
        const words = content.split(' ');
        if (words.length <= wordLimit) return content;
        return words.slice(0, wordLimit).join(' ') + '...';
    };

    return (
        <div className='mx-auto my-8 mt-56'>
            <Link href={'/blog'}>
                <div className='text-center text-black text-2xl font-bold mb-4'>BLOG</div>
            </Link>
            <div className='flex flex-nowrap overflow-x-auto space-x-4 h-96'>
                {blogList.slice(0, 6).map(blog => (
                    <Link href={`/blog/${blog._id}`} key={blog._id} className='flex-none w-60'>
                        <div className='bg-white shadow-lg rounded-lg overflow-hidden h-80'>
                            <div className='aspect-w-16 aspect-h-9'>
                                <img src={blog.img} alt={blog.titulo} className='w-full h-full object-cover' />
                            </div>
                            <div className='p-4 flex flex-col justify-between'>
                                <h1 className='text-xl font-bold text-black'>{blog.titulo}</h1>
                                <p className='text-black text-sm overflow-hidden'>{truncateContent(blog.contenido, 18)}</p>
                                <button className='mt-2 bg-blue-500 text-white py-2 px-4 rounded mt'>Leer Articulo</button>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ListaDeBlogs;
