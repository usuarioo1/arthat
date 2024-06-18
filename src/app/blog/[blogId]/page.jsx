'use client'
import { useState, useEffect, } from "react"
import { apiUrlBlog } from "@/utils/api"

import React from 'react'

const Page = () => {

    const { blogId } = params;
    const { id } = params;
    const [blog, setBlog] = useState(null)

    const fetchBlogId = async () => {

        try {
            const response = await fetch(`${apiUrlBlog / blogId}`)
            console.log('response status:', response.status);
            const data = await response.json();
            console.log('data api:', data)

            if (data && data.blogById) {
                setBlog(data.blogById)
            } else {
                console.log('blog no encontrado')
            }
        } catch (error) {
            console.log(error, 'no se pudo encontrar los datos')
        }
    }

    useEffect(() => {
        console.log('id blog:', id);
        fetchBlogId();
    }, [id]);

    if (!blog) {
        return (
            <div>
                <h2>articulo no encontrado</h2>
            </div>
        )
    }

    return (
        <div>
            
        </div>
    )
}

export default Page;