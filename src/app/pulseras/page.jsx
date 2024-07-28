import React from 'react'
import ListaPulseras from './ListaPulseras'

const page = () => {
    return (
        <div>
            <div className="flex justify-start items-start ml-12">
                <div className="">
                    <h3 className="text-gray-800 font-semibold text-4xl px-4 py-2">Pulseras</h3>
                
                </div>
            </div>
            <ListaPulseras />
        </div>
    )
}

export default page
