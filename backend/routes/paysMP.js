import express from 'express'
const router = express.Router()
import payMpCheckout from '../controllers/paysMPcontroller.js'

router.get('/checkoutMP', payMpCheckout)

router.get('/successMP', (req, res) => res.send('Success'))

router.get('/webhook', (req, res) => res.send('Webhook'))

export default router