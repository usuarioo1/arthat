'use client'
import React, { useEffect, useState } from 'react'
import Link from "next/link";
import { apiUrlAnillos } from '@/utils/api';

const ListaAnillos = ({nombre, img, precio}) => {
    const [anillosList, setAnillosList] = useState([]);

    useEffect(() => {
        // Fetch data from the API when the component mounts
        fetch(apiUrlAnillos)
            .then(response => response.json())
            .then(data => setAnillosList(data.info)) // Extract the list of jewelry from the API response
            .catch(error => console.error("Error fetching data:", error));
    }, []); // The empty array as the second argument ensures that useEffect runs only once when the component mounts

    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 mt-20">
            {anillosList.map((producto, index) => (
                <div key={index} className="relative p-1">
                    <Link href={`/amuletos/${producto._id}`}>
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden  mt-8" style={{ height: '450px' }}>
                            <div className="aspect-w-1 aspect-h-1">
                                <img className="object-contain" src={producto.img} alt="Imagen Producto" />
                            </div>
                            <div className="px-4 py-2">
                                <h3 className="text-gray-800 font-semibold text-lg">{producto.nombre}</h3>
                                <p className="text-gray-600 text-sm">Precio: ${producto.precio}</p>
                            </div>
                        </div>
                    </Link>
                    <button
                        onClick={() => handleAddToCart(producto)}
                        className="absolute inset-x-0 bottom-0 transform translate-y-1/2 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full w-4/5 h-12 mx-auto shadow-lg"
                    >
                        Agregar al
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ListaAnillos;
