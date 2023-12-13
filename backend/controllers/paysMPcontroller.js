import { MercadoPagoConfig, Preference } from 'mercadopago';
import dotenv from 'dotenv';
dotenv.config();

export const payMpCheckout = async (req, res) => {
    try {
        const mercadopagoClient = new MercadoPagoConfig({
            accessToken: process.env.SECRET_KEY_MP,
            options: {
                timeout: 3000
            }
        });

        const { cart } = req.body

        const lineItems = cart.map(item => ({
            title: item.title,
            unit_price: item.amount,
            quantity: item.qty,
            currency_id: 'ARS',
        }))

        const body = {
            items: lineItems,
            back_urls: {
                success: `${process.env.SERVER}/paysmp/successmp`,
                failure: `${process.env.SERVER}/paysmp/cancelmp`,
            },
            auto_return: "approved"
        }

        const preference = new Preference(mercadopagoClient);
        const result = await preference.create({ body });
        return res.status(200).json(result.init_point);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const successMP = (req, res) => {
    res.render('successMP')
}

export const cancelMP = (req, res) => {
    res.render('cancelMP')
}

export default payMpCheckout;