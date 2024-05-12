import React from 'react';

export async function generateStaticParams() {
    const res = await fetch('http://localhost:8080/anillos');
    const data = await res.json();

    if (Array.isArray(data.info)) {
        return data.info.map((anillo) => ({
            params: {
                anillosId: anillo._id.toString(),
            },
        }));
    } else {
        return []; // Retorna un array vacío si data.info no es un array   
    }
}

async function getAnilloById(id) {
    const res = await fetch(`http://localhost:8080/anillos/${id}`);
    const data = await res.json();
    return data.anilloById; // Aquí accedemos directamente al objeto del producto
}

const page = async ({ params }) => {
    const amuleto = await getAnilloById(params.anillosId);

    return (
        <div>
            {amuleto && (
                <div className="bg-white shadow-lg rounded-lg overflow-hidden w-9/12 m-auto mt-32 mb-20">
                    <div className="w-full md:flex">
                        <img className="h-full w-full object-cover md:w-1/4 md:h-auto" src={amuleto.img} alt={amuleto.nombre} />
                        <div className="w-full md:w-3/4 p-4 md:pl-8 flex flex-col justify-start items-start">
                            <h2 className="text-gray-800 font-semibold text-3xl">{amuleto.nombre}</h2>
                            <p className="text-gray-600 mt-2">Código: {amuleto.codigo}</p>
                            <hr className="border-gray-300 my-2 w-full" />
                            <div className="flex items-center mt-2">
                                <p className="text-gray-900 font-bold text-xl mr-4">Precio: ${amuleto.precio}</p>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Agregar al carrito</button>
                            </div>
                            <hr className="border-gray-300 my-2 w-full" />
                            <p className="text-gray-600 mt-2">{amuleto.descripcion}</p>
                            <p className="text-gray-600 mt-2">
                                <strong>Diametro:</strong> {amuleto.diametro}<br />
                                <strong>Peso:</strong> {amuleto.peso}<br />
                                <strong>Color:</strong> {amuleto.color}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default page;
