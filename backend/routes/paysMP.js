import express from 'express'
const router = express.Router()
import payMpCheckout from '../controllers/paysMPcontroller.js'

router.post('/checkoutmp', payMpCheckout)

router.get('/successmp', (req, res) => res.send('Success'))

router.get('/webhook', (req, res) => res.send('Webhook'))

export default router