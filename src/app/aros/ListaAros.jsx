'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { apiUrlAros } from "@/utils/api";

const getData = async () => {
    const res = await fetch(apiUrlAros)

    if (!res.ok) {
        throw new Error("¡Algo pasó!");
    }

    return res.json();
};

const ListaAros = () => {
    const [arosFetch, setArosFetch] = useState([]);

    useEffect(() => {
        const fetchAros = async () => {
            try {
                const data = await getData();
                setArosFetch(data.info);
            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
        };

        fetchAros();
    }, []);

    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 mt-20">
            {arosFetch.map((producto, index) => (
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

export default ListaAros;
