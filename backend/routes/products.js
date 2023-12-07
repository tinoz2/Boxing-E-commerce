import express from 'express'
const router = express.Router();
import { addProduct, getProducts, deleteProduct, updateProduct } from '../controllers/productsController.js'

router.get('/products', getProducts)

router.post('/products', addProduct)

router.delete('/products/:id', deleteProduct)

router.put('/products/:id', updateProduct)

export default router