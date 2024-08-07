'use client'
import { apiUrlBlog } from '@/utils/api';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    return (
        <div className='my-8 mt-56 mx-auto w-5/6'>
            <Link href={'/blog'}>
                <div className='text-center text-black text-2xl font-bold mb-4'>BLOG</div>
            </Link>
            <Slider {...settings}>
                {blogList.slice(0, 6).map(blog => (
                    <Link href={`/blog/${blog._id}`} key={blog._id} className='flex-none'>
                        <div style={{height:400}} className='rounded-lg overflow-hidden flex flex-col sm:w-80 w-full mx-auto relative'>
                            <div className='aspect-w-16 aspect-h-9'>
                                <img src={blog.img} alt={blog.titulo} className='w-full h-full object-cover' />
                            </div>
                            <div className='flex flex-col flex-grow mt-3'>
                                <h1 className='text-xl font-bold text-black justify-start flex'>{blog.titulo}</h1>
                                <p className='text-black text-lg overflow-hidden'>{truncateContent(blog.contenido, 18)}</p>
                            </div>
                            <button className='absolute bottom-0 left-1/2 transform -translate-x-1/2 btn btn-outline btn-info py-2 px-4 rounded-full w-36 mb-4'>Leer Articulo</button>
                        </div>

                    </Link>
                ))}
            </Slider>
        </div>
    );
}

export default ListaDeBlogs;
