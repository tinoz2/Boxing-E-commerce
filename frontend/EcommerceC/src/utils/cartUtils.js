import axios from 'axios';
import { API } from '../config';

export const calculateTotal = (cart) => {
    return cart.reduce((acc, product) => acc + product.price * product.qty, 0);
};

export const calculateTotalItemsInCart = (cart) => {
    return cart.reduce((acc, product) => acc + product.qty, 0);
};

export const getPriceUSD = async (setPriceUSD) => {
    try {
        const res = await axios.get(API);
        const priceUSD = res.data[1].compra;
        setPriceUSD(priceUSD);
    } catch (e) {
        console.log(e);
    }
};

export const prepareCartForCheckout = (cart) => {
    return cart.map((product) => ({
        _id: product._id,
        qty: product.qty,
        title: product.title,
        description: product.description,
        amount: product.price,
    }));
};

export const prepareCartForMpCheckout = (cart, priceUSD) => {
    return cart.map((product) => ({
        qty: product.qty,
        title: product.title,
        amount: product.price * priceUSD,
    }));
};