const z = require('zod');

const authRegister = z.object({
    email: z.string({ required_error: "Email is required" })
        .email(),
    password: z.string({ required_error: "Password is required" })
        .min(8, {
            message: "Password must be at least 8 characters long"
        }),
    user: z.string({ required_error: "User is required" })
        .min(3, {
            message: "User must be at least 3 characters long"
        })
})

const authLogin = z.object({
    email: z.string({ required_error: "Email is required" })
        .email(),
    password: z.string({ required_error: "Password is required" })
        .min(8, {
            message: "Password must be at least 8 characters long"
        })
})

module.exports = {
    authRegister,
    authLogin
}