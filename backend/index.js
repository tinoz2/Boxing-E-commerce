import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import connectDB from './db.js'
import ProductsRouter from './routes/products.js'
import UsersRouter from './routes/users.js'
import PaysRouter from './routes/pays.js'
import PaysMpRouter from './routes/paysMP.js'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import rateLimit from 'express-rate-limit';
import expressValidator from './middlewares/authData.js'
import compression from 'compression';
import helmetCSP from 'helmet-csp';
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv';
dotenv.config();

const app = express()
const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
};
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
});

const configuracionCSP = {
    directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", 'https://cdn.jsdelivr.net'],
    },
    reportOnly: process.env.NODE_ENV === 'development',
    reportUri: '/report-violation-endpoint',
};

app.use(morgan('dev'));
app.use(express.json());
app.use(helmet());
app.use(compression());
app.use(limiter);
app.use(cookieParser());
app.use(cors(corsOptions))
app.use(expressValidator);
app.use(helmetCSP(configuracionCSP));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', ProductsRouter)
app.use('/users', UsersRouter)
app.use('/pays', PaysRouter)
app.use('/paysmp', PaysMpRouter)

app.set('port', process.env.PORT);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})

connectDB();