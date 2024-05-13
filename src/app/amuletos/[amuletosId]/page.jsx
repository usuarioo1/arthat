'use client';
import React, { useState, useEffect } from 'react';

const Page = ({ params }) => {
    const { id } = params; // Obtener el parámetro dinámico de la URL
    const [product, setProduct] = useState(null);

    // Obtener los detalles del producto con el ID especificado
    const fetchProductDetails = async () => {
        try {
            const response = await fetch(`http://localhost:8080/amuletos/${id}`);
            console.log('Response status:', response.status);
            const data = await response.json();
            console.log('Data from API:', data);
            // Verifica si 'amuletoById' está presente en los datos recibidos
            if (data && data.amuletoById) {
                setProduct(data.amuletoById);
            } else {
                console.log("Producto no encontrado en los datos recibidos");
            }
        } catch (error) {
            console.log(error, "error al obtener los datos");
        }
    };
    
    

    useEffect(() => {
        console.log("ID del producto:", id); // Agrega este console.log para verificar el ID del producto
        fetchProductDetails();
    }, [id]);

    if (!product) {
        return (
            <div>
                <h2>Producto no encontrado</h2>
            </div>
        );
    }

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-9/12 m-auto mt-24 mb-20">
            <div className="w-full md:flex">
                <img className="h-full w-full object-cover md:w-1/4 md:h-auto" src={product.img} alt={product.nombre} />
                <div className="w-full md:w-3/4 p-4 md:pl-8 flex flex-col justify-start items-start">
                    <h2 className="text-gray-800 font-semibold text-3xl">{product.nombre}</h2>
                    <p className="text-gray-600 mt-2">SKU: {product.codigo || 'No disponible'}</p>
                    <hr className="border-gray-300 my-2 w-full" />
                    <div className="flex items-center mt-2">
                        <p className="text-gray-900 font-bold text-xl mr-4">Precio: ${product.precio}</p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Agregar al carrito</button>
                    </div>
                    <hr className="border-gray-300 my-2 w-full" />
                    <p className="text-gray-600 mt-2">{product.descripcion}</p>
                    <p className="text-gray-600 mt-2">
                        <strong>Diametro:</strong> {product.diametro}<br />
                        <strong>Peso:</strong> {product.peso}<br />
                        <strong>Color:</strong> {product.color}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Page;
