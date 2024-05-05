import { useContext } from 'react';
import CartContext from '@/contexts/cart/CartContext';


const CheckoutItem = ({ cartItem, stock }) => {

    const { addItemToCart, removeItemToCart, clearItemToCart } = useContext(CartContext);

    console.log(cartItem);

    const clearHandler = () => clearItemToCart(cartItem);
    const addHandler = () => { if (cartItem.quantity < stock) addItemToCart(cartItem); };
    const removeHandler = () => removeItemToCart(cartItem);

    const { nombre, precio, img } = cartItem;

    return (
        <div>
    <div>
        <div>
            <div>
                <img src={img} alt={`${nombre}`} />
            </div>
            <span>{nombre}</span>
            <span>
                <div onClick={removeHandler}>
                    <i></i>
                </div>
                <span>{cartItem.quantity}</span>
                <div onClick={addHandler}>
                    <i></i>
                </div>
            </span>
            <span>${precio * cartItem.quantity}</span>
        </div>
    </div>
    {/* <div className="remove-button" onClick={clearHandler}>
        &#10005;
    </div> */}
</div>

    );
};

export default CheckoutItem;
