'use client'
import React, {useContext} from 'react';
import {CartContext} from "@/contexts/CartContext";


function viewCart() {

    const {cartItems, removeItem, addItem} = useContext(CartContext);

    const precioTotal = cartItems.reduce((total, item) => total + (item.precio * item.quantity), 0);
    const handleRemoveItem = (id) => {
        removeItem(id);
    };
    const guardarCarrito = async () => {
        try {


            const response = await fetch(`http://localhost:8080/cart`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                        "items": cartItems,
                        "usuario": "Test"
                    }
                )
            })
        } catch (error) {
            console.error(error)
        }

    }
    const handleToItem = (producto) => {
        addItem(producto)
    }

    return (
        <div className="container mx-auto px-4">

            <div>
                <h2>Carrito de compras</h2>
                <br/>
                <br/>
                <br/>
                <table style={{borderCollapse: 'collapse', width: '100%'}}>
                    <thead>
                    <tr>
                        <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>Nombre producto</th>
                        <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>Precio</th>
                        <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>Cantidad</th>
                        <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>Alto:cm</th>
                        <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>Ancho:cm</th>
                        <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>Diametro:cm</th>
                        <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>Peso:gr</th>
                        <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>Color</th>
                        <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>Disminuir</th>
                        <th style={{border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>Aumentar</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cartItems.map((row, index) => (
                        <tr key={index} style={{background: index % 2 === 0 ? '#f2f2f2' : 'transparent'}}>
                            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>{row.nombre}</td>
                            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>{row.precio}</td>
                            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>{row.quantity}</td>
                            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>{row.alto}</td>
                            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>{row.ancho}</td>
                            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>{row.diametro}</td>
                            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>{row.peso}</td>
                            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>{row.color}</td>
                            {/* <td style={{
                                border: '1px solid #ddd',
                                padding: '8px',
                                textAlign: 'left'
                            }}>{row.quantity}</td> */}
                            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>
                                <button onClick={() => handleRemoveItem(row._id)}>Eliminar</button>
                            </td>
                            <td style={{border: '1px solid #ddd', padding: '8px', textAlign: 'left'}}>
                                <button onClick={() => handleToItem(row)}>Aumentar</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <br/>
            <br/>
            <br/>
            <h2>Total : {precioTotal}</h2>
            <br/>
            <br/>
            <br/>
            <button className="btn text-white hover:text-red-600 " onClick={() => guardarCarrito()}>Pagar</button>
            <br/>
            <br/>
            <br/>
        </div>

    );
}

export default viewCart;
