import React from 'react'
import ListaCollares from './ListaCollares'

const page = () => {
    return (
        <div>
            <div className="flex justify-start items-start ml-12">
                <div className="">
                    <h3 className="text-gray-800 font-semibold text-4xl px-4 py-2">COLLARES</h3>
                
                </div>
            </div>
            <ListaCollares/>
        </div>
    )
}

export default page
