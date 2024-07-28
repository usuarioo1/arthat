import React from 'react'
import ListaAros from './ListaAros'

const page = () => {
    return (
        <div>
            <div className="flex justify-start items-start ml-12">
                <div className="">
                    <h3 className="text-gray-800 font-semibold text-4xl px-4 py-2">AROS</h3>
                
                </div>
            </div>
            <ListaAros />
        </div>
    )
}

export default page
