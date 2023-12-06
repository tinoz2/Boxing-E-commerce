const User = require('../schemas/user')

const register = async(req, res) => {
    try{
        const { user, email, password } = req.body
        const newUser = await User.create({ user, email, password })
        res.json(newUser)
    }
    catch(err){
        console.log(err)
        res.status(500).json({ message: 'Error al crear el usuario' })
    }
}

const login = async(req, res) => {
    try{
        const { email, password } = req.body
        const user = await User.findOne({ email, password })
        res.json(user)
    }
    catch(err){
        console.log(err)
        res.status(500).json({ message: 'Error al iniciar sesión' })
    }
}

const profile = async(req, res) => {
    try{
        const { id } = req.params
        const user = await User.findById(id)
        res.json(user)
    }
    catch(err){
        console.log(err)
        res.status(500).json({ message: 'Error al obtener el perfil del usuario' })
    }
}

module.exports = { register, login, profile }