import axios from 'axios'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/productSlice';

const Products = () => {

    const dispatch = useDispatch()

    const [products, setProducts] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                const url = 'http://localhost:3001/api/products'
                const res = await axios.get(url);
                setProducts(res.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        getData()
    }, [])

    return (
        <div>
            {
                products.map((product, i) => (
                    <div className='flex flex-col justify-center items-center m-4' key={i}>
                        <h2>Title : {product?.title}</h2>
                        <p>Description: {product?.description}</p>
                        <small>Price : {product?.price}</small>
                        <small>Qty : {product?.qty}</small>
                        <button onClick={() => dispatch(addToCart(product))}
                            className='bg-slate-50 text-zinc-950 p-2 rounded-lg my-2 font-bold'>Add to cart</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Products;