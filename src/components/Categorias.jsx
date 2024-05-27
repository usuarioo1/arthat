import Link from 'next/link'
import React from 'react'
import LoMasVendido from './LoMasVendido'

const Categorias = () => {
    return (
        <div>
            <div className="flex flex-wrap justify-around mt-24 mb-40 gap-2 ">
                {/* Tarjeta 1: Niños ELA */}
                <Link href='ninosEla'>
                    <div className="w-64 mx-2 mb-4 bg-white shadow-lg rounded-lg overflow-hidden">
                        <img className="w-full h-40 object-contain" src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1714528155/arthat/e1p6oyfnxzwnvohkfvkc.jpg" alt="Imagen Niños ELA" />
                        <div className="px-4 py-2">
                            <h3 className="text-gray-800 font-semibold text-lg">Niños ELA</h3>
                        </div>
                    </div>
                </Link>


                {/* Tarjeta 2: Anillos de Hombre */}
                <Link href='anillosHombre'>
                    <div className="w-64 mx-2 mb-4 bg-white shadow-lg rounded-lg overflow-hidden">
                        <img className="w-full h-40 object-contain" src="https://media.istockphoto.com/id/1314987155/es/foto/pulseras-doradas-modernas-y-anillo-sobre-fondo-blanco-y-azul-con-espacio-de-copia.jpg?s=612x612&w=0&k=20&c=bSbzUGZROloXDbrHmMPL7tHJG8FBrit75DLCzYNTNAI=" alt="Imagen Anillos de Hombre" />
                        <div className="px-4 py-2">
                            <h3 className="text-gray-800 font-semibold text-lg">Anillos de Hombre</h3>
                        </div>
                    </div>
                </Link>

                {/* Tarjeta 3: Madres y Niños */}
                <Link href='madresYninos'>
                    <div className="w-64 mx-2 mb-4 bg-white shadow-lg rounded-lg overflow-hidden">
                        <img className="w-full h-40 object-contain" src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1714528155/arthat/jynwtqjsqsnoqv8bi1ms.jpg" alt="Imagen Madres y Niños" />
                        <div className="px-4 py-2">
                            <h3 className="text-gray-800 font-semibold text-lg">Madres y Niños</h3>
                        </div>
                    </div>
                </Link>

                {/* Tarjeta 4: Amuletos */}
                <Link href='/amuletos'>
                    <div className="w-64 mx-2 mb-4 bg-white shadow-lg rounded-lg overflow-hidden">
                        <img className="w-full h-40 object-contain" src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1714528154/arthat/hux0ubv47am4kdd0hqrs.jpg" alt="Imagen Amuletos" />
                        <div className="px-4 py-2">
                            <h3 className="text-gray-800 font-semibold text-lg">Amuletos</h3>
                        </div>
                    </div>
                </Link>

                {/* Tarjeta 5: Runas */}
                <Link href='/runas'>
                    <div className="w-64 mx-2 mb-4 bg-white shadow-lg rounded-lg overflow-hidden">
                        <img className="w-full h-40 object-contain" src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1714528155/arthat/ajubizwvacj9elahpohq.jpg" alt="Imagen Runas" />
                        <div className="px-4 py-2">
                            <h3 className="text-gray-800 font-semibold text-lg">Runas</h3>
                        </div>
                    </div>
                </Link>

                {/* Tarjeta 6: Profesiones */}
                <Link href='profesiones'>
                    <div className="w-64 mx-2 mb-4 bg-white shadow-lg rounded-lg overflow-hidden">
                        <img className="w-full h-40 object-contain" src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1714528155/arthat/vaztbzxbsrjm5vbilr72.jpg" alt="Imagen Profesiones" />
                        <div className="px-4 py-2">
                            <h3 className="text-gray-800 font-semibold text-lg">Profesiones</h3>
                        </div>
                    </div>
                </Link>

            </div>
            <LoMasVendido />
        </div>



    )
}

export default Categorias
