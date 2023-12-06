const express = require('express')
const router = express.Router()
const { login, register, profile } = require('../controllers/usersControllers')
const expressValidator = require('../middlewares/authData')
const { authLogin, authRegister } = require('../middlewares/authUsers')
const validateAuth = require('../middlewares/validateAuth')

router.post('/register', validateAuth(authRegister), expressValidator, register)

router.post('/login', validateAuth(authLogin), expressValidator, login)

router.get('/profile/:id', expressValidator, profile)

module.exports = router