'use client'
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Link from 'next/link';

const handleDragStart = (e) => e.preventDefault();

const Card = ({ href, src, alt, title }) => {
    return (
        <Link href={href}>
            <div className="w-full sm:w-56 h-70 bg-gray-200 border-2 border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 mx-1">
                <img className="w-full h-48 object-contain" src={src} alt={alt} />
                <div className="p-4 text-center">
                    <h3 className="text-gray-800 font-semibold text-lg">{title}</h3>
                </div>
            </div>
        </Link>
    );
};

const Categorias = () => {
    const cards = [
        {
            href: "/anillosHombre",
            src: "https://res.cloudinary.com/dpbpyzl96/image/upload/v1714528155/arthat/jynwtqjsqsnoqv8bi1ms.jpg",
            alt: "Imagen Anillos de Hombre",
            title: "ANILLOS HOMBRE"
        },
        {
            href: "/amuletos",
            src: "https://res.cloudinary.com/dpbpyzl96/image/upload/v1714528154/arthat/hux0ubv47am4kdd0hqrs.jpg",
            alt: "Imagen Amuletos",
            title: "AMULETOS"
        },
        {
            href: "/colgantesPlataLisa",
            src: "https://res.cloudinary.com/dpbpyzl96/image/upload/v1714528155/arthat/vaztbzxbsrjm5vbilr72.jpg",
            alt: "Imagen Colgantes Plata Lisa",
            title: "COLGANTES PLATA LISA"
        },
        {
            href: "/colgantesPiedrasNaturales",
            src: "https://res.cloudinary.com/dpbpyzl96/image/upload/v1714528155/arthat/vaztbzxbsrjm5vbilr72.jpg",
            alt: "Imagen Colgantes Piedras Naturales",
            title: "COLGANTES PIEDRAS NATURALES"
        },
        {
            href: "/arosPlataLisa",
            src: "https://res.cloudinary.com/dpbpyzl96/image/upload/v1714528155/arthat/vaztbzxbsrjm5vbilr72.jpg",
            alt: "Imagen Aros Plata Lisa",
            title: "AROS PLATA LISA"
        },
        {
            href: "/arosPiedrasNaturales",
            src: "https://res.cloudinary.com/dpbpyzl96/image/upload/v1714528155/arthat/vaztbzxbsrjm5vbilr72.jpg",
            alt: "Imagen Aros Piedras Naturales",
            title: "AROS PIEDRAS NATURALES"
        },
        {
            href: "/cadenas",
            src: "https://res.cloudinary.com/dpbpyzl96/image/upload/v1714528155/arthat/vaztbzxbsrjm5vbilr72.jpg",
            alt: "Imagen Cadenas",
            title: "CADENAS"
        },
        {
            href: "/collares",
            src: "https://res.cloudinary.com/dpbpyzl96/image/upload/v1714528155/arthat/vaztbzxbsrjm5vbilr72.jpg",
            alt: "Imagen Collares",
            title: "COLLARES"
        },
        {
            href: "/pulseras",
            src: "https://res.cloudinary.com/dpbpyzl96/image/upload/v1714528155/arthat/vaztbzxbsrjm5vbilr72.jpg",
            alt: "Imagen Pulseras",
            title: "PULSERAS"
        },
        {
            href: "/madreNaturaleza",
            src: "https://res.cloudinary.com/dpbpyzl96/image/upload/v1714528155/arthat/vaztbzxbsrjm5vbilr72.jpg",
            alt: "Imagen Madre Naturaleza",
            title: "MADRE NATURALEZA"
        }
    ];

    const items = cards.map((card, index) => (
        <div key={index} onDragStart={handleDragStart} role="presentation">
            <Card {...card} />
        </div>
    ));

    return (
        <div className="w-full max-w-5xl mx-auto my-24">
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={{
                    0: { items: 1 },
                    600: { items: 2 },
                    1024: { items: 3 },
                }}
                autoPlay
                infinite
                autoPlayInterval={3000}
                animationDuration={800}
                disableDotsControls
                disableButtonsControls
            />
        </div>
    );
};

export default Categorias;
