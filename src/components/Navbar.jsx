'use client'
import Link from 'next/link';
import BotonPanel from './BotonPanel';
import React, { useContext } from 'react';
import { CartContext } from "@/contexts/CartContext";

const Navbar = (props) => {
    const { cartItems } = useContext(CartContext);
    const cantidadTotal = cartItems.reduce((total, item) => total + item.quantity, 0);

    // Calcular la suma total del precio de todos los ítems en el carrito
    const precioTotal = cartItems.reduce((total, item) => total + (item.precio * item.quantity), 0);

    return (
        <div className="navbar bg-white">
            <div className="navbar-start mr-10">
                <div className='pl-20'>
                    <div className="hidden sm:block">
                        <label className="input input-bordered flex items-center gap-2 bg-white">
                            <input
                                type="text"
                                className="grow"
                                placeholder="búsqueda de productos"
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                                <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                            </svg>
                        </label>
                    </div>
                </div>
            </div>
            <div className="navbar-center flex justify-center sm:block">
                <Link href={'/'}>
                    <img src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1714527762/arthat/guwmrw9dq6l9fspfnxhs.jpg" alt="ARTHAT LOGO" className="w-50 h-40 mx-auto sm: -ml-4" />
                </Link>
            </div>
            <div className="navbar-end mr-10">
                {/* Hide BotonPanel on small screens */}
                <div className="hidden sm:block">
                    <BotonPanel />
                </div>
                <Link href={'/login'}>
                <button className="btn mx-6 text-white">Iniciar Sesión</button>
                </Link>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">{cantidadTotal}</span>
                        </div>
                    </div>
                    <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 shadow bg-slate-100">
                        <div className="card-body">
                            <span className="font-bold text-lg text-black">{cantidadTotal} Items</span>
                            <span className="text-black">Subtotal: ${precioTotal}</span>
                            <Link href='/viewCart'>
                                <div className="card-actions">
                                    <button className="btn btn-block bg-yellow-500 text-black hover:bg-yellow-300">Ir al carrito</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
