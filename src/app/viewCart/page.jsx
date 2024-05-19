'use client'
import React, {useContext} from 'react';
import {CartContext} from "@/contexts/CartContext";


function viewCart() {

    const { cartItems, removeItem } = useContext(CartContext);

    const totalPrice = cartItems.reduce((total, item) => total + item.precio, 0);
    const handleRemoveItem = (id) => {
        removeItem(id);
    };

    return (
        <div className="container mx-auto px-4">
            <div className="w-64 mx-2 mb-4 bg-white shadow-lg rounded-lg overflow-hidden">
             </div>
            <div>
                <h2>Carrito de compras</h2>
                <ul>
                    {cartItems.map(item => (
                        <li key={item._id}>
                            {item.nombre} - ${item.precio} - {item.quantity}
                            <button onClick={() => handleRemoveItem(item._id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>

            </div>

        </div>

    );
}

export default viewCart;
