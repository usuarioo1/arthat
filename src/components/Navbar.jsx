
'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import BotonPanel from './BotonPanel';

const endpoints = [
    'http://localhost:8080/amuletos',
    'http://localhost:8080/ninos',
    'http://localhost:8080/madres',
    'http://localhost:8080/runas',
    'http://localhost:8080/profesiones',
    'http://localhost:8080/anillos'
];

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            if (searchTerm.length === 0) {
                setSearchResults([]);
                return;
            }

            const allProducts = [];
            for (const endpoint of endpoints) {
                try {
                    const response = await fetch(endpoint);
                    const data = await response.json();
                    allProducts.push(...data.info);
                } catch (error) {
                    console.error('Error fetching products:', error);
                }
            }

            const filteredProducts = allProducts.filter(product =>
                product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSearchResults(filteredProducts);
        };

        fetchProducts();
    }, [searchTerm]);

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
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                                <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                            </svg>
                        </label>
                        {searchTerm && (
                            <ul className="mt-2 bg-white border border-gray-200 max-h-60 overflow-auto">
                                {searchResults.map(product => (
                                    <li key={product._id} className="p-2 hover:bg-gray-100 flex items-center">
                                        <img src={product.img} alt={product.nombre} className="w-10 h-10 object-cover mr-2" />
                                        <span>{product.nombre}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
            <div className="navbar-center">
                <Link href={'/'}>
                    <img src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1714527762/arthat/guwmrw9dq6l9fspfnxhs.jpg" alt="ARTHAT LOGO" className="w-50 h-40" />
                </Link>
            </div>
            <div className="navbar-end mr-10">
                <BotonPanel />
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </div>
                    <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
