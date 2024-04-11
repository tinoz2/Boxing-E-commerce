import express from 'express'
const router = express.Router()
import { login, register, profile, logout } from '../controllers/usersControllers.js'
import expressValidator from '../middlewares/authData.js'
import { authLogin, authRegister } from '../middlewares/authUsers.js'
import validateAuth from '../middlewares/validateAuth.js'
import validateToken from '../middlewares/validateToken.js'

router.post('/register', validateAuth(authRegister), expressValidator, register)

router.post('/login', validateAuth(authLogin), expressValidator, login)

router.post('/logout', expressValidator, logout)

router.get('/profile', validateToken , expressValidator, profile)

router.get('/terms', (req,res) => {
    res.render('terms')
})

export default router