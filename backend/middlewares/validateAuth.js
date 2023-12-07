const validateAuth = (schema) => (req, res, next) => {
    try{
        schema.parse(req.body)
        next()
    }
    catch(err){
        console.log(err)
        return res.status(400)
    }
}

export default validateAuth