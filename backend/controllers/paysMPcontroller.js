import { MercadoPagoConfig, Payment } from 'mercadopago'
import dotenv from 'dotenv';
dotenv.config();

const payMpCheckout = async (req, res) => {
    try {
        const mp = new MercadoPagoConfig({
            accessToken: process.env.MP_ACCESS_TOKEN,
            options: {
                timeout: 5000
            }
        });

        const payment = new Payment(mp);

        const body = {
            transaction_amount: 300,
            description: 'Pago de prueba',
            payment_method_id: 'visa',
            token: '4509 9535 6623 3704',
            payer: {
                email: 'test_user_63274575@testuser.com',
            }
        };

        const response = await payment.create({ body });
        console.log(response);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

export default payMpCheckout