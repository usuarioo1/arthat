import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
    cartItems: [],
}

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return { ...state, cartItems: [...state.cartItems, action.item] };

        case 'REMOVE_ITEM':
            const newCartItems = state.cartItems.filter((item) => item.id !== action.id);
            return { ...state, cartItems: newCartItems };

        default:

            return state;
    }
}

export function CartContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addItem = (item) => {
        dispatch({ type: 'ADD_ITEM', item });
    };

    const removeItem = (id) => {
        dispatch({ type: 'REMOVE_ITEM', id });
    };

    return (
        <CartContext.Provider value={{ cartItems: state.cartItems, addItem, removeItem }}>
            {children}
        </CartContext.Provider>
    );
}