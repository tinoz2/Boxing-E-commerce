import express from 'express'
const router = express.Router()
import { payMpCheckout, successMP, cancelMP } from '../controllers/paysMPcontroller.js'

router.post('/checkoutmp', payMpCheckout)

router.get('/successmp', successMP)

router.get('/cancelmp', cancelMP)

export default router