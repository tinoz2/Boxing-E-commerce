import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const validateToken = (req, res, next) => {
    const token = req.cookies.token
    if (!token)
        return res.status(401).json({ message: 'Token no encontrado' })

    jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {
        if(err) return res.status(401).json({ message: 'Token inválido' })

        req.user = user
    })

    next();
}

export default validateToken