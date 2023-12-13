import axios from 'axios'
import baseURL from '../config';

export const getData = async (setProducts) => {
    try {
        const url = `${baseURL}/api/products`
        const res = await axios.get(url);
        setProducts(res.data)
    }
    catch (err) {
        console.log(err)
    }
}