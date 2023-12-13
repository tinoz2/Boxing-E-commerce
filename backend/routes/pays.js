import express from 'express'
const router = express.Router()
import { payCheckout, paySuccess, payCancel } from '../controllers/paysController.js'

router.post('/checkout', payCheckout)

router.get('/success', paySuccess)

router.get('/cancel', payCancel)

export default router