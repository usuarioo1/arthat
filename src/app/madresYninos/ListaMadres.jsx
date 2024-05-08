'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'


import React from 'react'

const ListaMadres = () => {

    const [madresList, setMadresList] = useState([]);

    useEffect(() => {

        fetch('http://localhost:8080/madres')
            .then(response => response.json())
            .then(data => setMadresList(data.info))
            .catch(error => console.error('no se puedieron obtener los datos', error))
    }, [])


    return (

        <div className='flex flex-wrap justify-center mt-20'>
            {madresList.map((producto, index)=>(
                <div key={index} className='w-1/3 sm:w-1/4 md:w-1/6 p-2'>
                    <Link href={`/madresYninos/${producto._id}`}>
                        <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
                            <div className="aspect-w-1 aspect-h-1">
                                <img className="object-cover" src={producto.img} alt="Imagen Producto" />
                            </div>
                            <div className="px-4 py-2">
                                <h3 className="text-gray-800 font-semibold text-lg">{producto.nombre}</h3>
                                <p className="text-gray-600 text-sm">Precio: ${producto.precio}</p>
                            </div>

                        </div>
                    </Link>

                </div>
            ))}

        </div>
    )
}

export default ListaMadres

