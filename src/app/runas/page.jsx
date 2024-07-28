import React from 'react'
import ListaRunas from './ListaRunas'

const page = () => {
    return (
        <div>
            <div className="flex justify-start items-start ml-12">
                <div className="">
                    <h3 className="text-gray-800 font-semibold text-4xl px-4 py-2">RUNAS</h3>
                
                </div>
            </div>
            <ListaRunas/>
        </div>
    )
}

export default page
