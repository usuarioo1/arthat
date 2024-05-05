import CartContext from "./CartContext";
import { useReducer } from "react";
import { addCartItem, clearCartItem, removeCartItem } from "./cartFunction";
import cartReducer from "./CartReducer";

const CartProvider = ({ children }) => {
    const initialState = {
        isCartOpen: false,
        cartItems: [],
        cartCount: 0,
        cartTotal: 0
    }

    const [{ isCartOpen, cartItems, cartCount, cartTotal }, dispatch] = useReducer(cartReducer, initialState);

    // Impresiones de consola
    console.log("Cart Items Length:", cartItems.length);
    console.log("Cart Total Initial:", cartTotal);

    // Funciones
    const updateCartItemReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        const newCartTotal = newCartItems.reduce((total, cartItem) => {
            const itemQuantity = Number(cartItem.quantity);
            const itemPrice = Number(cartItem.precio);

            if (isNaN(itemQuantity) || isNaN(itemPrice)) {
                console.error("Invalid quantity or price:", cartItem);
                return total;
            }

            return total + itemQuantity * itemPrice;
        }, 0);

        console.log("New Cart Total:", newCartTotal);

        dispatch({
            type: "SET_CART_ITEMS",
            payload: {
                cartItems: newCartItems,
                cartCount: newCartCount,
                cartTotal: newCartTotal
            }
        });
    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);

        // Impresiones de consola
        console.log("Added Item:", productToAdd);
        console.log("New Cart Items:", newCartItems);

        updateCartItemReducer(newCartItems);
    }

    const removeItemToCart = (cartItemToRemove) => {
        const newCartItems = removeCartItem(cartItems, cartItemToRemove);

        // Impresiones de consola
        console.log("Removed Item:", cartItemToRemove);
        console.log("New Cart Items:", newCartItems);

        updateCartItemReducer(newCartItems);
    }

    const clearItemToCart = (cartItemToClear) => {
        const newCartItems = clearCartItem(cartItems, cartItemToClear);

        // Impresiones de consola
        console.log("Cleared Item:", cartItemToClear);
        console.log("New Cart Items:", newCartItems);

        updateCartItemReducer(newCartItems);
    };

    const clearItemToCheckout = () => {
        dispatch({
            type: "CLEAR_CHECKOUT"
        })
    }

    const setIsCartOpen = (bool) => {
        dispatch({
            type: "SET_IS_CART_OPEN",
            payload: bool,
        });
    };

    return (
        <CartContext.Provider value={{
            addItemToCart,
            clearItemToCart,
            clearItemToCheckout,
            setIsCartOpen,
            removeItemToCart,
            isCartOpen,
            cartItems,
            cartCount,
            cartTotal
        }}>{children}</CartContext.Provider>
    )
}

export default CartProvider;
