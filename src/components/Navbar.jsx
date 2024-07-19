// components/Navbar.js
'use client'
import Link from 'next/link';
import React, { useContext } from 'react';
import { CartContext } from "@/contexts/CartContext";
import AuthContext from "@/contexts/AuthContext";
import BotonPanel from "@/components/BotonPanel"; // Importamos el BotonPanel

const Navbar = () => {
    const { cartItems } = useContext(CartContext);
    const { user, logout } = useContext(AuthContext); 
    const cantidadTotal = cartItems.reduce((total, item) => total + item.quantity, 0);
    const precioTotal = cartItems.reduce((total, item) => total + (item.precio * item.quantity), 0);

    return (
        <div className="navbar bg-white flex flex-col items-center px-4 relative z-50">
            <div className="flex justify-between items-center w-full">
                <div className="navbar-start flex-1 flex items-center">
                    <div className="hidden md:block">
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
                <div className="navbar-center flex-1 flex justify-center">
                    <Link href={'/'}>
                        <img src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1714527762/arthat/guwmrw9dq6l9fspfnxhs.jpg" alt="ARTHAT LOGO" className="w-64 h-50" />
                    </Link>
                </div>
                <div className="navbar-end flex-1 flex items-center justify-end">
                    <div className="hidden md:flex items-center">
                        {user && user.isAdmin && <BotonPanel />} {/* Condicionalmente renderizamos el BotonPanel */}
                        {user ? (
                            <>
                                <span className="mr-4 text-black text-xl">Hola, {user.name}</span>
                                <Link href='/profile'>
                                    <button className="btn mx-6 text-white">Mi Perfil</button>
                                </Link>
                                <button className="btn mx-6 text-white" onClick={logout}>Cerrar Sesión</button>
                            </>
                        ) : (
                            <Link href={'/login'}>
                                <button className="btn mx-6 text-white">Iniciar Sesión</button>
                            </Link>
                        )}
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span className="badge badge-sm indicator-item">{cantidadTotal}</span>
                                </div>
                            </div>
                            <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow z-50">
                                <div className="card-body">
                                    <span className="font-bold text-lg">{cantidadTotal} Productos</span>
                                    <span className="text-info">Subtotal: ${precioTotal}</span>
                                    <div className="card-actions">
                                        <Link href='/viewCart'>
                                            <button className="btn btn-primary btn-block">Ver Carrito</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:hidden mt-2 w-full flex justify-center">
                <div className="dropdown dropdown-center">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-100 rounded-box w-52 text-black z-50">
                        {user ? (
                            <>
                                <li>
                                    <span>Hola, {user.name}</span>
                                </li>
                                <li>
                                    <Link href='/profile'>
                                        <button>Mi Perfil</button>
                                    </Link>
                                </li>
                                <li>
                                    <button onClick={logout}>Cerrar Sesión</button>
                                </li>
                            </>
                        ) : (
                            <li>
                                <Link href='/login'>Iniciar Sesión</Link>
                            </li>
                        )}
                        <li>
                            <Link href='/viewCart'>
                                <div className="flex justify-between items-center">
                                    <span>Carrito</span>
                                    <div className="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        <span className="badge badge-sm indicator-item">{cantidadTotal}</span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
