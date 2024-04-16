import React from 'react'
import ListaNinos from '../ninosEla/ListaNinos'

const ListaAnillos = () => {
    const ninosList = [
        {
            img: "https://media.istockphoto.com/id/954397602/es/foto/dos-pendientes-de-oro-zafiro-con-diamantes-peque%C3%B1os.jpg?s=612x612&w=0&k=20&c=lJUZUS1QLc9tGzR3Mq2jVet-paF3aclT4uQU8Cj8fwA=",
            precio: 15000,
            codigo: "ABC123"
        },
        {
            img: "https://media.istockphoto.com/id/954397602/es/foto/dos-pendientes-de-oro-zafiro-con-diamantes-peque%C3%B1os.jpg?s=612x612&w=0&k=20&c=lJUZUS1QLc9tGzR3Mq2jVet-paF3aclT4uQU8Cj8fwA=",
            precio: 22000,
            codigo: "DEF456"
        },
        {
            img: "https://media.istockphoto.com/id/954397602/es/foto/dos-pendientes-de-oro-zafiro-con-diamantes-peque%C3%B1os.jpg?s=612x612&w=0&k=20&c=lJUZUS1QLc9tGzR3Mq2jVet-paF3aclT4uQU8Cj8fwA=",
            precio: 18000,
            codigo: "GHI789"
        },
        {
            img: "https://media.istockphoto.com/id/954397602/es/foto/dos-pendientes-de-oro-zafiro-con-diamantes-peque%C3%B1os.jpg?s=612x612&w=0&k=20&c=lJUZUS1QLc9tGzR3Mq2jVet-paF3aclT4uQU8Cj8fwA=",
            precio: 27000,
            codigo: "JKL012"
        },
        {
            img: "https://media.istockphoto.com/id/954397602/es/foto/dos-pendientes-de-oro-zafiro-con-diamantes-peque%C3%B1os.jpg?s=612x612&w=0&k=20&c=lJUZUS1QLc9tGzR3Mq2jVet-paF3aclT4uQU8Cj8fwA=",
            precio: 20000,
            codigo: "MNO345"
        },
        {
            img: "https://media.istockphoto.com/id/954397602/es/foto/dos-pendientes-de-oro-zafiro-con-diamantes-peque%C3%B1os.jpg?s=612x612&w=0&k=20&c=lJUZUS1QLc9tGzR3Mq2jVet-paF3aclT4uQU8Cj8fwA=",
            precio: 28000,
            codigo: "PQR678"
        },
        {
            img: "https://media.istockphoto.com/id/954397602/es/foto/dos-pendientes-de-oro-zafiro-con-diamantes-peque%C3%B1os.jpg?s=612x612&w=0&k=20&c=lJUZUS1QLc9tGzR3Mq2jVet-paF3aclT4uQU8Cj8fwA=",
            precio: 28000,
            codigo: "PQR678"
        },
        {
            img: "https://media.istockphoto.com/id/954397602/es/foto/dos-pendientes-de-oro-zafiro-con-diamantes-peque%C3%B1os.jpg?s=612x612&w=0&k=20&c=lJUZUS1QLc9tGzR3Mq2jVet-paF3aclT4uQU8Cj8fwA=",
            precio: 28000,
            codigo: "PQR678"
        },
        {
            img: "https://media.istockphoto.com/id/954397602/es/foto/dos-pendientes-de-oro-zafiro-con-diamantes-peque%C3%B1os.jpg?s=612x612&w=0&k=20&c=lJUZUS1QLc9tGzR3Mq2jVet-paF3aclT4uQU8Cj8fwA=",
            precio: 28000,
            codigo: "PQR678"
        },
        {
            img: "https://media.istockphoto.com/id/954397602/es/foto/dos-pendientes-de-oro-zafiro-con-diamantes-peque%C3%B1os.jpg?s=612x612&w=0&k=20&c=lJUZUS1QLc9tGzR3Mq2jVet-paF3aclT4uQU8Cj8fwA=",
            precio: 28000,
            codigo: "PQR678"
        },
        {
            img: "https://media.istockphoto.com/id/954397602/es/foto/dos-pendientes-de-oro-zafiro-con-diamantes-peque%C3%B1os.jpg?s=612x612&w=0&k=20&c=lJUZUS1QLc9tGzR3Mq2jVet-paF3aclT4uQU8Cj8fwA=",
            precio: 28000,
            codigo: "PQR678"
        },
        {
            img: "https://media.istockphoto.com/id/954397602/es/foto/dos-pendientes-de-oro-zafiro-con-diamantes-peque%C3%B1os.jpg?s=612x612&w=0&k=20&c=lJUZUS1QLc9tGzR3Mq2jVet-paF3aclT4uQU8Cj8fwA=",
            precio: 28000,
            codigo: "PQR678"
        }
    ]
    return (
        <div>
        <div className="flex justify-center items-center">
            <div className="w-64 mx-2 mb-4 bg-white shadow-lg rounded-lg overflow-hidden">
                <img className="w-full h-40 object-cover" src="https://media.istockphoto.com/id/1216928523/es/foto/elegante-conjunto-de-joyas-de-anillo-de-oro-blanco-collar-y-pendientes-con-diamantes.jpg?s=612x612&w=0&k=20&c=RcPyl7QzR7pSFs2WsCKhxY_0_IIT6YMfa7qD39f47As=" alt="Imagen Madres y Niños" />
                <div className="px-4 py-2">
                    <h3 className="text-gray-800 font-semibold text-lg">Madres y Niños</h3>
                </div>
            </div>
        </div>
        <ListaNinos />
        </div>
    )
}

export default ListaAnillos
