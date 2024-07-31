'use client'
import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "@/contexts/CartContext";
import { apiUrlAmuletos } from "@/utils/api";

const getData = async () => {
    const res = await fetch(apiUrlAmuletos);

    if (!res.ok) {
        throw new Error("¡Algo pasó!");
    }

    return res.json();
};

const ListaAmuletos = () => {
    const [amuletosFetch, setAmuletosFetch] = useState([]);
    const { addItem } = useContext(CartContext);

    useEffect(() => {
        const fetchAmuletos = async () => {
            try {
                const data = await getData();
                setAmuletosFetch(data.info);
            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
        };

        fetchAmuletos();
    }, []);

    const handleAddToCart = (producto) => {
        addItem(producto);
        console.log('Product added to cart:', producto);
    };

    return (
        <div className="flex justify-center mt-10 md:w-full lg:w-full xl:w-full">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3 md:gap-4 w-5/6">
                {amuletosFetch.map((producto, index) => (
                    <div key={index} className="relative">
                        <Link href={`/amuletos/${producto._id}`}>
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-8 h-80 sm:h-[450px] md:h-[450px] lg:h-[450px] xl:h-[450px]">
                                <div className="aspect-w-1 aspect-h-1">
                                    <img className="object-contain" src={producto.img} alt="Imagen Producto" />
                                </div>
                                <div className="px-2 sm:px-4 py-2">
                                    <h3 className="text-gray-800 font-semibold text-xl sm:text-2xl mt-2">{producto.nombre}</h3>
                                    <p className="text-lg sm:text-xl mt-2 text-black font-bold p-1">${producto.precio}</p>
                                </div>
                            </div>
                        </Link>
                        <button
                            onClick={() => handleAddToCart(producto)}
                            className="absolute inset-x-0 bottom-0 transform translate-y-1/2 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full w-4/5 h-12 mx-auto shadow-lg text-sm sm:text-lg md:text-xl"
                        >
                            Agregar al carrito
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListaAmuletos;
