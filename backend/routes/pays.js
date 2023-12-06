const express = require('express')
const router = express.Router()
const { payCheckout, paySucces, payCancel } = require('../controllers/paysController')

router.post('/checkout', payCheckout)

router.get('/success', paySucces)

router.get('/cancel', payCancel)

module.exports = router