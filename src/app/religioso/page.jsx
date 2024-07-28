import React from 'react'
import ListaReligioso from './ListaReligioso'

const page = () => {
    return (
        <div>
            <div className="flex justify-start items-start ml-12">
                <div className="">
                    <h3 className="text-gray-800 font-semibold text-4xl px-4 py-2">RELIGIOSO</h3>
                
                </div>
            </div>
            <ListaReligioso/>
        </div>
    )
}

export default page
