const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./db');
const ProductsRouter = require('./routes/products')
const UsersRouter = require('./routes/users')
const PaysRouter = require('./routes/pays')
const helmet = require('helmet');
const bodyParser = require('body-parser');
const expressValidator = require('./middlewares/authData');
require('dotenv').config();

const app = express();
const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
};

app.use(morgan('dev'));
app.use(express.json());
app.use(helmet());
app.use(cors(corsOptions))
app.use(expressValidator);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', ProductsRouter)
app.use('/users', UsersRouter)
app.use('/pays', PaysRouter)

app.set('port', process.env.PORT);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})

connectDB();