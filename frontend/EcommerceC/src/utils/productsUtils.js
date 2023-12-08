import axios from 'axios'

export const getData = async (setProducts) => {
    try {
        const url = 'http://localhost:3001/api/products'
        const res = await axios.get(url);
        setProducts(res.data)
    }
    catch (err) {
        console.log(err)
    }
}