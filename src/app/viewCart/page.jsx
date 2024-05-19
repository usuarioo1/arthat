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

            <div>
                <h2>Carrito de compras</h2>
                <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                    <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Nombre producto</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Precio</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Cantidad</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Accion</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cartItems.map((row, index) => (
                        <tr key={index} style={{ background: index % 2 === 0 ? '#f2f2f2' : 'transparent' }}>
                            <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{row.nombre}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{row.precio}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{row.quantity}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}> <button onClick={() => handleRemoveItem(row._id)}>Eliminar</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        </div>

    );
}

export default viewCart;
