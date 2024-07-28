import React from 'react'
import ListaColgantesPiedrasNaturales from './ListaColgantesPiedrasNaturales'

const page = () => {
    return (
        <div>
        <div className="flex justify-start items-start ml-12">
            <div className="">
                <h3 className="text-gray-800 font-semibold text-4xl px-4 py-2">COLGANTES</h3>
            
            </div>
        </div>
        <ListaColgantesPiedrasNaturales/>
    </div>
    )
}

export default page
