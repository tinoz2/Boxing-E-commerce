import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, filterToCart } from '../redux/productSlice';
import { payments, paymentsMp } from '../auth/axios';
import { calculateTotal, getPriceUSD, prepareCartForCheckout, prepareCartForMpCheckout } from '../utils/cartUtils';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import '../css/cart.css'
import { ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2'

const Cart = () => {

    const cart = useSelector((state) => state.product);
    const dispatch = useDispatch();
    const [priceUSD, setPriceUSD] = useState(0);

    useEffect(() => {
        getPriceUSD(setPriceUSD);
    }, []);

    const total = calculateTotal(cart);

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

    const handleEmptyCart = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "var(--gray)",
            cancelButtonColor: "var(--red)",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(emptyCart())
                Swal.fire({
                    title: "Deleted!",
                    text: "Your products has been deleted.",
                    icon: "success",
                });
            }
        });
    }

    return (
        <div>
            <div className='button-borders button2 flex m-8'>
                <Link className='primary-button' to='/'>
                    Back to home
                </Link>
            </div>
            <ul>
                {cart.map((product, i) => (
                    <CartItem
                        key={i}
                        product={product}
                        onRemove={() => dispatch(filterToCart(product))}
                    />
                ))}
            </ul>
            {
                cart.length <= 0 ?
                    <p className='text-center text-3xl font-bold'>No items in cart</p>
                    :
                    <div className='container-cart container-cart-2'>
                        <div className='button-borders button2'>
                            <button className='primary-button'
                            onClick={handleEmptyCart}>Empty cart</button>
                        </div>
                        <div className='container-total'>
                            <p className='p-cart'>Total:</p>
                            <small className='small-cart'>{total} $</small>
                        </div>
                        <div>
                            <div className='button-borders button2'>
                                <button className='primary-button' onClick={handleCheckout}>Checkout</button>
                            </div>
                            <div className='button-borders button2'>
                                <button className='primary-button' onClick={handleCheckoutMp}>Checkout MP</button>
                            </div>
                        </div>
                    </div>
            }
            <ToastContainer position="top-right" autoClose={100} theme='dark' />
        </div>
    );
};

export default Cart;
