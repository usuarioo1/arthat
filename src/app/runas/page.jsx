import React from 'react'
import ListaRunas from './ListaRunas'

const page = () => {
    return (
        <div>
        <div className="flex justify-center items-center mt-32">
            <div className="w-64 mx-2 mb-4 bg-white shadow-lg rounded-lg overflow-hidden">
                <img className="w-full h-40 object-cover" src="https://media.istockphoto.com/id/1331089160/es/foto/diferente-elegante-bijouterie-y-plato-sobre-mesa-de-m%C3%A1rmol-blanco-lay-plana.jpg?s=612x612&w=0&k=20&c=xzBIMdDszXMvunIyZSYp4Yfj46lHamH31Fu92VB0dVE=" alt="Imagen Amuletos" />
                <div className="px-4 py-2 flex flex-col items-center">
                <h3 className="text-gray-800 font-semibold text-lg">Runas</h3>
                    <div className="w-full h-1 bg-yellow-500 rounded-b-lg"></div>
                </div>
            </div>
        </div>
        <ListaRunas />
        </div>
    )
}

export default page
