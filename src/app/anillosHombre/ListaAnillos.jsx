'use client'
import React, { useEffect, useState } from 'react'
import Link from "next/link";

const ListaAnillos = ({nombre, img, precio}) => {
    const [anillosList, setAnillosList] = useState([]);

    useEffect(() => {
        // Fetch data from the API when the component mounts
        fetch("https://backend-gamelink.onrender.com/games")
            .then(response => response.json())
            .then(data => setAnillosList(data.info)) // Extract the list of jewelry from the API response
            .catch(error => console.error("Error fetching data:", error));
    }, []); // The empty array as the second argument ensures that useEffect runs only once when the component mounts

    return (
        <div className="flex flex-wrap justify-center mt-20">
            {anillosList.map((producto, index) => (
                <div key={index} className="w-1/3 sm:w-1/4 md:w-1/6 p-2">
                    <Link href={`/anillosHombre/${producto._id}`}>
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
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
    );
};

export default ListaAnillos;
