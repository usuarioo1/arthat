import Link from 'next/link';
import React from 'react';

const Card = ({ href, src, alt, title }) => {
    return (
        <Link href={href}>
            <div className="w-56 h-64 bg-gray-200 border-8 border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img className="w-full h-48 object-contain" src={src} alt={alt} />
                <div className="p-4 text-center">
                    <h3 className="text-gray-800 font-semibold text-lg">{title}</h3>
                </div>
            </div>
        </Link>
    );
};

const Categorias = () => {
    return (
        <div className="px-2 sm:px-4">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-2 sm:gap-4 mt-24 mb-40 sm:-mx-2">

                <Card
                    href="/anillosHombre"
                    src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1714528155/arthat/jynwtqjsqsnoqv8bi1ms.jpg"
                    alt="Imagen Anillos de Hombre"
                    title="ANILLOS HOMBRE"
                />

                <Card
                    href="/amuletos"
                    src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1714528154/arthat/hux0ubv47am4kdd0hqrs.jpg"
                    alt="Imagen Amuletos"
                    title="AMULETOS"
                />

                <Card
                    href="/colgantesPlataLisa"
                    src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1714528155/arthat/vaztbzxbsrjm5vbilr72.jpg"
                    alt="Imagen Colgantes Plata Lisa"
                    title="COLGANTES PLATA LISA"
                />
                <Card
                    href="/colgantesPiedrasNaturales"
                    src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1714528155/arthat/vaztbzxbsrjm5vbilr72.jpg"
                    alt="Imagen Colgantes Piedras Naturales"
                    title="COLGANTES PIEDRAS NATURALES"
                />
                <Card
                    href="/arosPlataLisa"
                    src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1714528155/arthat/vaztbzxbsrjm5vbilr72.jpg"
                    alt="Imagen Aros Plata Lisa"
                    title="AROS PLATA LISA"
                />
                <Card
                    href="/arosPiedrasNaturales"
                    src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1714528155/arthat/vaztbzxbsrjm5vbilr72.jpg"
                    alt="Imagen Aros Piedras Naturales"
                    title="AROS PIEDRAS NATURALES"
                />
                <Card
                    href="/cadenas"
                    src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1714528155/arthat/vaztbzxbsrjm5vbilr72.jpg"
                    alt="Imagen Cadenas"
                    title="CADENAS"
                />
                <Card
                    href="/collares"
                    src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1714528155/arthat/vaztbzxbsrjm5vbilr72.jpg"
                    alt="Imagen Collares"
                    title="COLLARES"
                />
                <Card
                    href="/pulseras"
                    src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1714528155/arthat/vaztbzxbsrjm5vbilr72.jpg"
                    alt="Imagen Pulseras"
                    title="PULSERAS"
                />
                <Card
                    href="/madreNaturaleza"
                    src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1714528155/arthat/vaztbzxbsrjm5vbilr72.jpg"
                    alt="Imagen Madre Naturaleza"
                    title="MADRE NATURALEZA"
                />
            </div>
        </div>
    );
};

export default Categorias;
