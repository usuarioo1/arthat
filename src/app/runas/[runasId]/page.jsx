
import React from 'react';

export async function generateStaticParams() {
    const res = await fetch('https://backend-gamelink.onrender.com/games');
    const data = await res.json();

    if (Array.isArray(data.info)) {
        return data.info.map((producto) => ({
            params: {
                ninosId: producto._id.toString(),
            },
        }));
    } else {
        return []; // Retorna un array vacío si data.info no es un array
    }
}


async function getProductById(id) {
    const res = await fetch(`https://backend-gamelink.onrender.com/games/${id}`);
    const data = await res.json();
    return data.product; // Aquí accedemos directamente al objeto del producto
}

const page = async ({ params }) => {
    const product = await getProductById(params.runasId);

    return (
        <div>
    {product && (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-9/12 m-auto mt-32 mb-20">
            <div className="w-full md:flex"> {/* Adjust the width and flex behavior based on screen size */}
                <img className="h-full w-full object-cover md:w-1/4 md:h-auto" src={product.img} alt={product.nombre} /> {/* Adjust image size and flex behavior based on screen size */}
                <div className="w-full md:w-3/4 p-4 md:pl-8 flex flex-col justify-start items-start"> {/* Centered content */}
                    <h2 className="text-gray-800 font-semibold text-3xl">{product.nombre}</h2>
                    <p className="text-gray-600 mt-2">SKU: {product.sku}</p> {/* SKU */}
                    <hr className="border-gray-300 my-2 w-full" /> {/* Divider */}
                    <div className="flex items-center mt-2"> {/* Flex container for price and button */}
                        <p className="text-gray-900 font-bold text-xl mr-4">Precio: ${product.precio}</p> {/* Price */}
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Agregar al carrito</button> {/* Add to cart button */}
                    </div>
                    <hr className="border-gray-300 my-2 w-full" /> {/* Divider */}
                    <p className="text-gray-600 mt-2">{product.descripcion}</p>
                    <p className="text-gray-600 mt-2">
                        <strong>Diametro:</strong> {product.diametro}<br />
                        <strong>Peso:</strong> {product.peso}<br />
                        <strong>Material:</strong> {product.material}
                    </p>
                </div>
            </div>
        </div>
    )}
</div>
    );
};



export default page;
