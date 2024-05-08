'use client'
import { useEffect, useState } from 'react'
import Link  from 'next/link'


const ListaRunas = ({nombre, img, precio}) => {

    const [runaList, setRunasList] = useState([])


    useEffect(() => {
        // Realizar la solicitud a la API al cargar el componente
        fetch("http://localhost:8080/runas")
            .then(response => response.json())
            .then(data => setRunasList(data.info)) // Extraemos la lista de juegos de la respuesta de la API
            .catch(error => console.error("Error fetching data:", error));
    }, []); // El array vacío como segundo argumento asegura que useEffect se ejecute solo una vez al montar el componente

    return (
        <div className="flex flex-wrap justify-center mt-20">
            {runaList.map((producto, index) => (
                <div key={index} className="w-1/3 sm:w-1/4 md:w-1/6 p-2">
                    <Link href={`/runas/${producto._id}`}>
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
}

export default ListaRunas
