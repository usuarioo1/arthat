'use client'
import React from 'react'
import { useContext } from 'react'
import CartContext from '@/contexts/cart/CartContext'
import CheckoutItem from './CheckoutItem';

const Page = () => {

    const { cartItems, cartTotal } = useContext(CartContext)
    console.log(cartItems)
    console.log("cartTotal:", cartTotal);



    return (

        <div>
            <table>
                <h1>Productos en tu carrito:</h1>
                <tbody>
                    {cartItems.map((cartItem) => (
                        <CheckoutItem key={cartItem._id} cartItem={cartItem} stock={cartItem.stock} />
                    ))}
                </tbody>
            </table>

            <div>
                <div>Total: ${cartTotal}</div>
            </div>
        </div>

    );
};

export default Page;
