import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterToCart } from '../redux/productSlice';
import { payments, paymentsMp } from '../auth/axios';
import { calculateTotal, calculateTotalItemsInCart, getPriceUSD, prepareCartForCheckout, prepareCartForMpCheckout } from '../utils/cartUtils';
import CartItem from './CartItem';

const Cart = () => {

    const cart = useSelector((state) => state.product);
    const dispatch = useDispatch();
    const [priceUSD, setPriceUSD] = useState(0);

    useEffect(() => {
        getPriceUSD(setPriceUSD);
    }, []);

    const total = calculateTotal(cart);
    const formattedTotal = parseInt(total.toFixed(0));
    const totalItemsInCart = calculateTotalItemsInCart(cart);

    const handleCheckout = async () => {
        try {
            const response = await payments({
                cart: prepareCartForCheckout(cart),
            });
            window.location.href = response.data.url;
        } catch (error) {
            console.error('Error during checkout:', error);
        }
    };

    const handleCheckoutMp = async () => {
        try {
            const response = await paymentsMp({
                cart: prepareCartForMpCheckout(cart, priceUSD),
            });
            window.location.href = response.data;
        } catch (error) {
            console.error('Error during checkout:', error);
        }
    };

    return (
        <div>
            <h2>Shopping Cart</h2>
            <p>Items in cart: {totalItemsInCart}</p>
            <ul>
                {cart.map((product, i) => (
                    <CartItem
                        key={i}
                        product={product}
                        onRemove={() => dispatch(filterToCart(product))}
                    />
                ))}
            </ul>
            <div>
                <p>Total: {formattedTotal}</p>
            </div>
            <button onClick={handleCheckout}>Chekout</button>
            <button onClick={handleCheckoutMp}>Checkout with MP</button>
        </div>
    );
};

export default Cart;
