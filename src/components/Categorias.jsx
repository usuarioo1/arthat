import Link from 'next/link'
import React from 'react'

const Categorias = () => {
    return (
        <div className="flex flex-wrap justify-around">
            {/* Tarjeta 1: Niños ELA */}
            <Link href='ninosEla'>
            <div className="w-64 mx-2 mb-4 bg-white shadow-lg rounded-lg overflow-hidden">
                <img className="w-full h-40 object-cover" src="https://media.istockphoto.com/id/1415483167/es/foto/los-anillos-de-diamantes-de-joyer%C3%ADa-de-oro-se-muestran-en-el-escaparate-de-exhibici%C3%B3n-de-la.jpg?s=612x612&w=0&k=20&c=S77JfsrktUeCWC-FB34jgS5qCCXbdr1r0pgb7gFvo8I=" alt="Imagen Niños ELA" />
                <div className="px-4 py-2">
                    <h3 className="text-gray-800 font-semibold text-lg">Niños ELA</h3>
                </div>
            </div>
            </Link>

            {/* Tarjeta 2: Anillos de Hombre */}
            <Link href='anillosHombre'>
            <div className="w-64 mx-2 mb-4 bg-white shadow-lg rounded-lg overflow-hidden">
                <img className="w-full h-40 object-cover" src="https://media.istockphoto.com/id/1314987155/es/foto/pulseras-doradas-modernas-y-anillo-sobre-fondo-blanco-y-azul-con-espacio-de-copia.jpg?s=612x612&w=0&k=20&c=bSbzUGZROloXDbrHmMPL7tHJG8FBrit75DLCzYNTNAI=" alt="Imagen Anillos de Hombre" />
                <div className="px-4 py-2">
                    <h3 className="text-gray-800 font-semibold text-lg">Anillos de Hombre</h3>
                </div>
            </div>
            </Link>

            {/* Tarjeta 3: Madres y Niños */}
            <Link href='madresYninos'>
            <div className="w-64 mx-2 mb-4 bg-white shadow-lg rounded-lg overflow-hidden">
                <img className="w-full h-40 object-cover" src="https://media.istockphoto.com/id/1216928523/es/foto/elegante-conjunto-de-joyas-de-anillo-de-oro-blanco-collar-y-pendientes-con-diamantes.jpg?s=612x612&w=0&k=20&c=RcPyl7QzR7pSFs2WsCKhxY_0_IIT6YMfa7qD39f47As=" alt="Imagen Madres y Niños" />
                <div className="px-4 py-2">
                    <h3 className="text-gray-800 font-semibold text-lg">Madres y Niños</h3>
                </div>
            </div>
            </Link>

            {/* Tarjeta 4: Amuletos */}
            <Link href='/amuletos'>
            <div className="w-64 mx-2 mb-4 bg-white shadow-lg rounded-lg overflow-hidden">
                <img className="w-full h-40 object-cover" src="https://media.istockphoto.com/id/1331089160/es/foto/diferente-elegante-bijouterie-y-plato-sobre-mesa-de-m%C3%A1rmol-blanco-lay-plana.jpg?s=612x612&w=0&k=20&c=xzBIMdDszXMvunIyZSYp4Yfj46lHamH31Fu92VB0dVE=" alt="Imagen Amuletos" />
                <div className="px-4 py-2">
                    <h3 className="text-gray-800 font-semibold text-lg">Amuletos</h3>
                </div>
            </div>
            </Link>

            {/* Tarjeta 5: Runas */}
            <Link href='/runas'>
            <div className="w-64 mx-2 mb-4 bg-white shadow-lg rounded-lg overflow-hidden">
                <img className="w-full h-40 object-cover" src="https://media.istockphoto.com/id/1253049041/es/foto/conjunto-de-joyer%C3%ADa-de-lujo-de-pendientes-largos-colgante-pulsera-de-mariposa-anillo.jpg?s=612x612&w=0&k=20&c=1IRQBKk4KV6ArIrsTWrDACUxYY30hRwWJyeVXT-rjc8=" alt="Imagen Runas" />
                <div className="px-4 py-2">
                    <h3 className="text-gray-800 font-semibold text-lg">Runas</h3>
                </div>
            </div>
            </Link>

            {/* Tarjeta 6: Profesiones */}
            <Link href='profesiones'>
            <div className="w-64 mx-2 mb-4 bg-white shadow-lg rounded-lg overflow-hidden">
                <img className="w-full h-40 object-cover" src="https://media.istockphoto.com/id/954397602/es/foto/dos-pendientes-de-oro-zafiro-con-diamantes-peque%C3%B1os.jpg?s=612x612&w=0&k=20&c=lJUZUS1QLc9tGzR3Mq2jVet-paF3aclT4uQU8Cj8fwA=" alt="Imagen Profesiones" />
                <div className="px-4 py-2">
                    <h3 className="text-gray-800 font-semibold text-lg">Profesiones</h3>
                </div>
            </div>
            </Link>
        </div>



    )
}

export default Categorias
