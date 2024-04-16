import React from 'react'
import ListaProfesiones from './ListaProfesiones'

const page = () => {
    return (
        <div>
        <div className='flex justify-center items-center mt-14'>
            <div className="w-64 mx-2 mb-4 bg-white shadow-lg rounded-lg overflow-hidden">
                <img className="w-full h-40 object-cover" src="https://media.istockphoto.com/id/954397602/es/foto/dos-pendientes-de-oro-zafiro-con-diamantes-peque%C3%B1os.jpg?s=612x612&w=0&k=20&c=lJUZUS1QLc9tGzR3Mq2jVet-paF3aclT4uQU8Cj8fwA=" alt="Imagen Profesiones" />
                <div className="px-4 py-2">
                    <h3 className="text-gray-800 font-semibold text-lg">Profesiones</h3>
                </div>
            </div>
        </div>
        <ListaProfesiones />
        </div>
    )
}

export default page
