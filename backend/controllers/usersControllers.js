import User from '../schemas/user.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()

const register = async (req, res) => {
    try {
        const { user, email, password } = req.body
        const passwordHash = await bcrypt.hash(password, 10)
        const newUser = await User.create({ user, email, password: passwordHash })

        jwt.sign({
            id: newUser._id,
        }, process.env.SECRET_TOKEN, {
            expiresIn: '1d',
        }, (err, token) => {
            err ? console.log(err) :
                res.cookie('token', token);
            res.json({
                id: newUser._id,
                user: newUser.user,
                email: newUser.email,
                createdAt: newUser.createdAt,
                updatedAt: newUser.updatedAt,
            })
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Error al crear el usuario' })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })

        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Contraseña incorrecta' })
        }

        jwt.sign({
            id: user._id,
        }, process.env.SECRET_TOKEN, {
            expiresIn: '1d',
        }, (err, token) => {
            err ? console.log(err) :
                res.cookie('token', token, {
                    httpOnly: true,
                    secure: true,
                    maxAge: 24 * 60 * 60 * 1000,
                });
            res.json({
                id: user._id,
                user: user.user,
                email: user.email,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt
            })
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Error al iniciar sesión' })
    }
}

const logout = (req, res) => {
    res.clearCookie('token')
    res.json({ message: 'Sesión cerrada correctamente' })
}

const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id)

    if (!userFound) {
        res.status(404).json({ message: 'Usuario no encontrado' })
    }

    return res.json({
        id: userFound._id,
        user: userFound.user,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt,
    })
}

export { register, login, logout, profile }