import React from 'react'
import ListaAnillos from './ListaAnillos'


const page = () => {
    return (
        <div>
            <div className="flex justify-center items-center mt-32">
                <div className="w-64 mx-2 mb-4 bg-white shadow-lg rounded-lg overflow-hidden">
                    <img className="w-full h-40 object-cover" src="https://media.istockphoto.com/id/1314987155/es/foto/pulseras-doradas-modernas-y-anillo-sobre-fondo-blanco-y-azul-con-espacio-de-copia.jpg?s=612x612&w=0&k=20&c=bSbzUGZROloXDbrHmMPL7tHJG8FBrit75DLCzYNTNAI=" alt="Imagen Anillos de Hombre" />
                    <div className="px-4 py-2 flex flex-col items-center">
                    <h3 className="text-gray-800 font-semibold text-lg">ANILLOS HOMBRE</h3>
                    <div className="w-full h-1 bg-yellow-500 rounded-b-lg"></div>
                    </div>
                </div>
                
            </div>
            <ListaAnillos />
            </div>
    )
}

export default page
