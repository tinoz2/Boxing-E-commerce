require('dotenv').config()
const Stripe = require('stripe')
const stripe = new Stripe(process.env.SECRET_KEY)

const payCheckout = async (req, res) => {
    try {
        const { amount, qty, title, description } = req.body
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price_data: {
                        product_data: {
                            name: title,
                            description: description,
                        },
                        currency: 'usd',
                        unit_amount: amount * 100,
                    },
                    quantity: qty
                }
            ],
            mode: 'payment',
            success_url: 'http://localhost:3001/pays/success',
            cancel_url: 'http://localhost:3001/pays/cancel'
        })
        return res.json({ url: session.url });
    }
    catch (error) {
        console.log(error)
        res.status(400).json({ message: error.raw.message });
    }
};

const paySucces = (req, res) => {
    res.send('Pago Exitoso')
}

const payCancel = (req, res) => {
    res.send('Pago Cancelado')
}

module.exports = { payCheckout, paySucces, payCancel }