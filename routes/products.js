import express from 'express'
const router = express.Router();
import { addProduct, getProducts, deleteProduct, updateProduct, uploadFile } from '../controllers/productsController.js'
import multer from 'multer'
const upload = multer({ dest: 'uploads/' })

router.get('/products', getProducts)

router.post('/products', addProduct)

router.delete('/products/:id', deleteProduct)

router.put('/products/:id', updateProduct)

router.post('/upload', upload.single('file'), uploadFile )

export default router