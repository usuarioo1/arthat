// import { createContext, useReducer } from "react";

// //estado inicial de carrito de compras, el cual será un array vacio
// const initialState = {
//     cartItems: []
// }

// // creacion del contexto

// export const CartContext = createContext(initialState)

// // use reducer

// const cartReducer = (state, action) => {

//     switch (action.type) {
//         case 'ADD_TO_CART':
//             return {
//                 ...state,
//                 cartItems: state.cartItems.filter(
//                     (item) => item.id !== action.payload.id
//                 ),
//             }

//         default:
//             return state;
//     }
// };

// export const CartProvider = ({children}) => {
//     const [state, dispatch] = useReducer(cartReducer, initialState);

//     return (
//         <CartContext.Provider value={{cartItems: state.cartItems, dispatch}}>
//             {children}
//         </CartContext.Provider>
//     );
// };