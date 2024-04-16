import React from 'react'
import ListaNinos from '../ninosEla/ListaNinos'

const ListaMadres = () => {
    return (

        <div>
            <div className="flex justify-center items-center">
                <div className="w-64 mx-2 mb-4 bg-white shadow-lg rounded-lg overflow-hidden">
                    <img className="w-full h-40 object-cover" src="https://media.istockphoto.com/id/1216928523/es/foto/elegante-conjunto-de-joyas-de-anillo-de-oro-blanco-collar-y-pendientes-con-diamantes.jpg?s=612x612&w=0&k=20&c=RcPyl7QzR7pSFs2WsCKhxY_0_IIT6YMfa7qD39f47As=" alt="Imagen Madres y Niños" />
                    <div className="px-4 py-2">
                        <h3 className="text-gray-800 font-semibold text-lg">Madres y Niños</h3>
                    </div>
                </div>
            </div>   
        </div>

    )
}

export default ListaMadres
