const express = require('express');
const router = express.Router();
const { addProduct, getProducts, deleteProduct, updateProduct } = require('../controllers/productsController')

router.get('/products', getProducts)

router.post('/products', addProduct)

router.delete('/products/:id', deleteProduct)

router.put('/products/:id', updateProduct)

module.exports = router;