'use client';
import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '@/contexts/CartContext';
import { apiUrlRunas } from '@/utils/api';
import ListaReligioso from '../ListaReligioso';

const Page = ({ params }) => {

    const {runasId} = params;
    const { id } = params; // 
    const [product, setProduct] = useState(null);

    const { addItem } = useContext(CartContext);

    
    const fetchProductDetails = async () => {
        try {
            const response = await fetch(`${apiUrlRunas}/${runasId}`);
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
        console.log("ID del producto:", id); 
        fetchProductDetails();
    }, [id]);

    if (!product) {
        return (
            <div>
                <h2>Producto no encontrado</h2>
            </div>
        );
    }

    const handleAddToCart = () => {
        addItem(product);
        console.log('Product added to cart:', product); 
        console.log('Cart contents:')
    };

    return (
        <div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-9/12 m-auto mt-24 mb-20">
            <div className="w-full md:flex">
                <img className="h-full w-full object-contain md:w-1/4 md:h-auto" src={product.img} alt={product.nombre} />
                <div className="w-full md:w-3/4 p-4 md:pl-8 flex flex-col justify-start items-start">
                    <h2 className="text-gray-800 font-semibold text-3xl">{product.nombre}</h2>
                    <p className="text-gray-600 mt-2">Código: {product.codigo || 'No disponible'}</p>
                    <hr className="border-gray-300 my-2 w-full" />
                    <div className="flex items-center mt-2">
                        <p className="text-gray-900 font-bold text-xl mr-4">Precio: ${product.precio}</p>
                        <button  onClick={handleAddToCart} className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">Agregar al carrito</button>
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
        <ListaReligioso />
        </div>
    );
};

export default Page;
