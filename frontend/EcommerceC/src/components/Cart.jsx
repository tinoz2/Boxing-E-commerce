import { useDispatch, useSelector } from 'react-redux';
import { filterToCart } from '../redux/productSlice';
import { payments } from '../auth/axios';

const Cart = () => {

    const cart = useSelector((state) => state.product);
    const dispatch = useDispatch();

    const total = cart.reduce((acc, product) => {
        return acc + product.price * product.qty
    }, 0)

    const formattedTotal = parseInt(total.toFixed(0));
    const totalItemsInCart = cart.reduce((acc, product) => acc + product.qty, 0);

    const handleCheckout = async () => {
        try {
            const response = await payments({
                amount: formattedTotal,
                id: cart.length > 0 ? cart[0]._id : '',
                qty: cart.map((product) => product.qty)[0],
                title: cart.map((product) => product.title)[0],
                description: cart.map((product) => product.description)[0],
                qty: cart.map((product) => product.qty)[0]
            });
            console.log(response);
            window.location.href = response.data.url;
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
                    <div key={i}>
                        <li>{product.title}</li>
                        <li>{product.description}</li>
                        <li>{product.price}</li>
                        <li>{product.qty}</li>
                        <button onClick={() => dispatch(filterToCart(product))}>Delete</button>
                    </div>
                ))}
            </ul>
            <div>
                <p>Total: {formattedTotal}</p>
            </div>
            <button onClick={handleCheckout}>Chekout</button>
        </div>
    );
};

export default Cart;
