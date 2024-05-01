import React from 'react'
import ListaNinos  from './ListaNinos'

const NinosEla = () => {
    return (
        <div>
        <div className="flex justify-center items-center mt-32">
            <div className="w-64 mx-2 mb-4 bg-white shadow-lg rounded-lg overflow-hidden">
                <img className="w-full h-40 object-cover" src="https://media.istockphoto.com/id/1415483167/es/foto/los-anillos-de-diamantes-de-joyer%C3%ADa-de-oro-se-muestran-en-el-escaparate-de-exhibici%C3%B3n-de-la.jpg?s=612x612&w=0&k=20&c=S77JfsrktUeCWC-FB34jgS5qCCXbdr1r0pgb7gFvo8I=" alt="Imagen Niños ELA" />
                <div className="px-4 py-2">
                    <h3 className="text-gray-800 font-semibold text-lg">Niños ELA</h3>
                </div>
            </div>
        </div>
        <ListaNinos />
        </div>
        

    )
}

export default NinosEla
