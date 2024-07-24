import React from 'react'
import Link from 'next/link'

const UltimosModelos = () => {
    return (
        <div>
            <h1 className='text-center text-3xl text-gray-600 '>ÚLTIMOS MODELOS</h1>
            <div className="flex flex-wrap justify-center mt-20">
                <div className="relative w-1/3 sm:w-1/4 md:w-1/6 p-2">
                    <Link href="/amuletos/1">
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden" style={{ height: '450px' }}>
                            <div className="aspect-w-1 aspect-h-1">
                                <img className="object-contain" src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1714528155/arthat/jynwtqjsqsnoqv8bi1ms.jpg" alt="Imagen Producto" />
                            </div>
                            <div className="px-4 py-2">
                                <h3 className="text-gray-800 font-semibold text-lg">Nombre del Producto</h3>
                                <p className="text-gray-600 text-sm">Precio: $100</p>
                            </div>
                        </div>
                    </Link>
                    <button
                        // onClick={() => handleAddToCart(producto)}
                        className="absolute inset-x-0 bottom-0 transform translate-y-1/2 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full w-4/5 h-12 mx-auto shadow-lg"
                    >
                        Agregar al carrito
                    </button>
                </div>


                <div className="relative w-1/3 sm:w-1/4 md:w-1/6 p-2">
                    <Link href="/amuletos/2">
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden" style={{ height: '450px' }}>
                            <div className="aspect-w-1 aspect-h-1">
                                <img className="object-contain" src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1714528154/arthat/hux0ubv47am4kdd0hqrs.jpg" alt="Imagen Producto" />
                            </div>
                            <div className="px-4 py-2">
                                <h3 className="text-gray-800 font-semibold text-lg">Nombre del Producto</h3>
                                <p className="text-gray-600 text-sm">Precio: $100</p>
                            </div>
                        </div>
                    </Link>
                    <button
                        // onClick={() => handleAddToCart(producto)}
                        className="absolute inset-x-0 bottom-0 transform translate-y-1/2 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full w-4/5 h-12 mx-auto shadow-lg"
                    >
                        Agregar al carrito
                    </button>
                </div>


            </div>

        </div>
    )
}

export default UltimosModelos
