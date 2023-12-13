import { getData } from '../utils/productsUtils';
import { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import 'ldrs/bouncy'

const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getData(setProducts)
    }, [])

    return (
        <div id='container-shop2' className='container container-cards'>
            {
                products.length >= 1 ?
                    products.map((product, i) => (
                        <ProductItem key={i} product={product} />
                    ))
                    :
                    <div className='absolute sm:left-1/2'>
                        <l-bouncy
                            size="80"
                            speed="2"
                            color="white"
                        ></l-bouncy>
                    </div>
            }
        </div >
    )
}

export default Products;