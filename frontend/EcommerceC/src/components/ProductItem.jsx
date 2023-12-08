import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/productSlice';

const ProductItem = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div className='flex flex-col justify-center items-center m-4'>
            <h2>Title: {product?.title}</h2>
            <p>Description: {product?.description}</p>
            <small>Price: {product?.price}</small>
            <small>Qty: {product?.qty}</small>
            <button
                onClick={handleAddToCart}
                className='bg-slate-50 text-zinc-950 p-2 rounded-lg my-2 font-bold'
            >
                Add to cart
            </button>
        </div>
    );
};

export default ProductItem;