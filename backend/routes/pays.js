import express from 'express'
const router = express.Router()
import { payCheckout, paySucces, payCancel } from '../controllers/paysController.js'

router.post('/checkout', payCheckout)

router.get('/success', paySucces)

router.get('/cancel', payCancel)

export default router