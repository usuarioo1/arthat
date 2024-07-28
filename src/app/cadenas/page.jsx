import React from 'react'
import ListaCadenas from './ListaCadenas'
const page = () => {
    return (
        <div>
            <div className="flex justify-start items-start ml-12">
                <div className="">
                    <h3 className="text-gray-800 font-semibold text-4xl px-4 py-2">CADENAS</h3>
                
                </div>
            </div>
            <ListaCadenas/>
        </div>
    )
}

export default page
