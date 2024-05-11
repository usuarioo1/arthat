'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link';

const ListaProfesiones = () => {

  const [profesiones, setProfesiones] = useState([]);
  useEffect(() => {
    // Realizar la solicitud a la API al cargar el componente
    fetch("http://localhost:8080/profesiones")
      .then(response => response.json())
      .then(data => setProfesiones(data.info)) // Extraemos la lista de juegos de la respuesta de la API
      .catch(error => console.error("Error fetching data:", error));
  }, []); 

  return (
    <div className="flex flex-wrap justify-center mt-20">
      {profesiones.map((producto, index) => (
        <div key={index} className="w-1/3 sm:w-1/4 md:w-1/6 p-2">
          <Link href={`/profesiones/${producto._id}`}>
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
  )
}

export default ListaProfesiones
