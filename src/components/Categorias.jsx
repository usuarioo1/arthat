'use client'
import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card = ({ href, src, alt, title }) => {
    return (
        <Link href={href}>
            <div className=" sm:w-52 h-64 bg-gray-200 border-2 border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 mx-1">
                <img className="w-full h-48 object-contain mt-2" src={src} alt={alt} />
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
            title: "ANILLOS"
        },
        {
            href: "/amuletos",
            src: "https://res.cloudinary.com/dpbpyzl96/image/upload/v1714528154/arthat/hux0ubv47am4kdd0hqrs.jpg",
            alt: "Imagen Amuletos",
            title: "AMULETOS"
        },   
        {
            href: "/colgantes",
            src: "https://res.cloudinary.com/dpbpyzl96/image/upload/v1714528155/arthat/vaztbzxbsrjm5vbilr72.jpg",
            alt: "Imagen Colgantes Piedras Naturales",
            title: "COLGANTES "
        },
        {
            href: "/aros",
            src: "https://res.cloudinary.com/dpbpyzl96/image/upload/v1714528155/arthat/vaztbzxbsrjm5vbilr72.jpg",
            alt: "Imagen Aros Piedras Naturales",
            title: "AROS"
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
            href: "/religioso",
            src: "https://res.cloudinary.com/dpbpyzl96/image/upload/v1714528155/arthat/vaztbzxbsrjm5vbilr72.jpg",
            alt: "Imagen Madre Naturaleza",
            title: "RELIGIOSO"
        },
        {
            href: "/cabala",
            src: "https://res.cloudinary.com/dpbpyzl96/image/upload/v1714528155/arthat/vaztbzxbsrjm5vbilr72.jpg",
            alt: "Imagen CABALA",
            title: "CABALA"
        },
        {
            href: "/runas",
            src: "https://res.cloudinary.com/dpbpyzl96/image/upload/v1714528155/arthat/vaztbzxbsrjm5vbilr72.jpg",
            alt: "Imagen CABALA",
            title: "RUNAS"
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };

    return (
        <div className="w-11/12 my-24">
            <Slider {...settings}>
                {cards.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </Slider>
        </div>
    );
};

export default Categorias;
