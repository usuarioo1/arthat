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
    const product = await getProductById(params.ninosId);

    return (
        <div>
            {product && (
                <div className="flex bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="w-1/4">
                        <img className="h-full w-full object-cover" src={product.img} alt={product.nombre} />
                    </div>
                    <div className="w-2/3 p-4 pl-8">
                        <h3 className="text-gray-800 font-semibold text-lg">{product.nombre}</h3>
                        <p className="text-gray-600 mt-2">Descripción del producto...</p>
                        <p className="text-gray-900 font-bold text-xl mt-2">Precio: ${product.precio}</p>
                    </div>
                </div>
            )}
        </div>
    );
};



export default page;
