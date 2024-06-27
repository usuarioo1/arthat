import Link from 'next/link'
import React from 'react'
import LoMasVendido from './LoMasVendido'

const Categorias = () => {
    return (
        <div className="px-2 sm:px-4"> {/* Ajustar el padding para pantallas pequeñas */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-2 sm:gap-4 mt-24 mb-40 sm:-mx-2"> {/* Ajustar el gap y eliminar el margen en pantallas pequeñas */}
                {/* Tarjeta 1: Niños ELA */}
                <Link href='ninosEla'>
                    <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
                        <img className="w-full h-40 sm:h-32 object-contain" src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1714528155/arthat/e1p6oyfnxzwnvohkfvkc.jpg" alt="Imagen Niños ELA" />
                        <div className="px-4 py-2 flex flex-col items-center">
                            <h3 className="text-gray-800 font-semibold text-lg sm:text-base">NINOS ELA</h3>
                        </div>
                        <div className="w-full h-1 bg-yellow-500 rounded-b-lg"></div>
                    </div>
                </Link>

                {/* Tarjeta 2: Anillos de Hombre */}
                <Link href='anillosHombre'>
                    <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
                        <img className="w-full h-40 sm:h-32 object-contain" src="https://media.istockphoto.com/id/1314987155/es/foto/pulseras-doradas-modernas-y-anillo-sobre-fondo-blanco-y-azul-con-espacio-de-copia.jpg?s=612x612&w=0&k=20&c=bSbzUGZROloXDbrHmMPL7tHJG8FBrit75DLCzYNTNAI=" alt="Imagen Anillos de Hombre" />
                        <div className="px-4 py-2 flex flex-col items-center">
                            <h3 className="text-gray-800 font-semibold text-lg sm:text-base">ANILLOS HOMBRE</h3>
                        </div>
                        <div className="w-full h-1 bg-yellow-500 rounded-b-lg"></div>
                    </div>
                </Link>

                {/* Tarjeta 3: Madres y Niños */}
                <Link href='madresYninos'>
                    <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
                        <img className="w-full h-40 sm:h-32 object-contain" src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1714528155/arthat/jynwtqjsqsnoqv8bi1ms.jpg" alt="Imagen Madres y Niños" />
                        <div className="px-4 py-2 flex flex-col items-center">
                            <h3 className="text-gray-800 font-semibold text-lg sm:text-base">MADRES Y NIÑOS</h3>
                        </div>
                        <div className="w-full h-1 bg-yellow-500 rounded-b-lg"></div>
                    </div>
                </Link>

                {/* Tarjeta 4: Amuletos */}
                <Link href='/amuletos'>
                    <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
                        <img className="w-full h-40 sm:h-32 object-contain" src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1714528154/arthat/hux0ubv47am4kdd0hqrs.jpg" alt="Imagen Amuletos" />
                        <div className="px-4 py-2 flex flex-col items-center">
                            <h3 className="text-gray-800 font-semibold text-lg sm:text-base">AMULETOS</h3>
                        </div>
                        <div className="w-full h-1 bg-yellow-500 rounded-b-lg"></div>
                    </div>
                </Link>

                {/* Tarjeta 5: Runas */}
                <Link href='/runas'>
                    <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
                        <img className="w-full h-40 sm:h-32 object-contain" src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1714528155/arthat/ajubizwvacj9elahpohq.jpg" alt="Imagen Runas" />
                        <div className="px-4 py-2 flex flex-col items-center">
                            <h3 className="text-gray-800 font-semibold text-lg sm:text-base">RUNAS</h3>
                        </div>
                        <div className="w-full h-1 bg-yellow-500 rounded-b-lg"></div>
                    </div>
                </Link>

                {/* Tarjeta 6: Profesiones */}
                <Link href='profesiones'>
                    <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
                        <img className="w-full h-40 sm:h-32 object-contain" src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1714528155/arthat/vaztbzxbsrjm5vbilr72.jpg" alt="Imagen Profesiones" />
                        <div className="px-4 py-2 flex flex-col items-center">
                            <h3 className="text-gray-800 font-semibold text-lg sm:text-base">PROFESIONES</h3>
                        </div>
                        <div className="w-full h-1 bg-yellow-500 rounded-b-lg"></div>
                    </div>
                </Link>
            </div>
            <LoMasVendido />
        </div>
    )
}

export default Categorias
