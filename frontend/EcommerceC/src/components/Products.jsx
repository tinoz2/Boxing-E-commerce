import { getData } from '../utils/productsUtils';
import { useEffect, useState } from 'react';
import ProductItem from './ProductItem';

const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getData(setProducts)
    }, [])

    return (
        <div>
            {
                products.map((product, i) => (
                    <ProductItem key={i} product={product} />
                ))
            }
        </div>
    )
}

export default Products;