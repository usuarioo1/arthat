'use client';
import { useState, useEffect } from "react";
import { apiUrlBlog } from "@/utils/api";
import React from 'react';

const Page = ({ params }) => {
    const { blogId } = params;
    const { id } = params;

    const [blog, setBlog] = useState(null);

    const fetchBlogId = async () => {
        try {
            const response = await fetch(`${apiUrlBlog}/${blogId}`);
            console.log('response status:', response.status);
            const data = await response.json();
            console.log('data api:', data);

            if (data && data.blogByid) {
                setBlog(data.blogByid);
            } else {
                console.log('blog no encontrado');
            }
        } catch (error) {
            console.log(error, 'no se pudo encontrar los datos');
        }
    };

    useEffect(() => {
        console.log('id blog:', id);
        fetchBlogId();
    }, [id]);

    if (!blog) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <h2 className="text-2xl font-semibold">Artículo no encontrado</h2>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden w-1/2 m-4 p-6">
                <h1 className="text-3xl font-bold mb-4 text-center text-black">{blog.titulo}</h1>
                <img src={blog.img} alt={blog.titulo} className="w-full h-auto object-cover mb-4 rounded" />
                <div className="prose prose-lg max-w-none">
                    <p className="text-black">{blog.contenido}</p>
                </div>
            </div>
        </div>
    );
};

export default Page;
