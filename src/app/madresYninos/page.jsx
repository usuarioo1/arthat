import React from 'react'
import ListaMadres from './ListaMadres'


const page = () => {
    return (
        <div>
        <div className="flex justify-center items-center mt-32">
            <div className="w-64 mx-2 mb-4 bg-white shadow-lg rounded-lg overflow-hidden">
                <img className="w-full h-40 object-cover" src="https://media.istockphoto.com/id/1216928523/es/foto/elegante-conjunto-de-joyas-de-anillo-de-oro-blanco-collar-y-pendientes-con-diamantes.jpg?s=612x612&w=0&k=20&c=RcPyl7QzR7pSFs2WsCKhxY_0_IIT6YMfa7qD39f47As=" alt="Imagen Madres y Niños" />
                <div className="px-4 py-2 flex flex-col items-center">
                <h3 className="text-gray-800 font-semibold text-lg">MADRES Y NIÑOS</h3>
                    <div className="w-full h-1 bg-yellow-500 rounded-b-lg"></div>
                </div>
            </div>
        </div>
        <ListaMadres />
        </div>
    )
}

export default page
