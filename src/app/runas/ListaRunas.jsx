'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { apiUrlRunas } from "@/utils/api";

const getData = async () => {
    const res = await fetch(apiUrlRunas);

    if (!res.ok) {
        throw new Error("¡Algo pasó!");
    }

    return res.json();
};

const ListaRunas  = () => {
    const [runasFetch, setRunasFetch] = useState([]);

    useEffect(() => {
        const fetchRunas = async () => {
            try {
                const data = await getData();
                setRunasFetch(data.info);
            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
        };

        fetchRunas();
    }, []);

    return (
        <div className="flex flex-wrap justify-center mt-20">
            {runasFetch.map((producto, index) => (
                <div key={index} className="w-1/3 sm:w-1/4 md:w-1/6 p-2">
                    <Link href={`/amuletos/${producto._id}`}>
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <div className="aspect-w-1 aspect-h-1">
                                <img className="object-contain" src={producto.img} alt="Imagen Producto" />
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

export default ListaRunas;
