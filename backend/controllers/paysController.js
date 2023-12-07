import dotenv from 'dotenv';
dotenv.config();
import Stripe from 'stripe'
const stripe = new Stripe(process.env.SECRET_KEY)

const payCheckout = async (req, res) => {
    try {
        const { cart } = req.body;

        const lineItems = cart.map((product) => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: product.title,
                    description: product.description,
                },
                unit_amount: Math.round(product.amount * 100),
            },
            quantity: product.qty,
        }));

        const session = await stripe.checkout.sessions.create({
            line_items: lineItems,
            mode: 'payment',
            success_url: 'http://localhost:3001/pays/success',
            cancel_url: 'http://localhost:3001/pays/cancel',
        });

        return res.json({ url: session.url });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.raw.message });
    }
};


const paySucces = (req, res) => {
    res.send('Pago Exitoso')
}

const payCancel = (req, res) => {
    res.send('Pago Cancelado')
}

export { payCheckout, paySucces, payCancel }