const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const authRouter = require('./router/auth.router')
const cors = require('cors');
const userRouter = require('./router/user.router');
const categoryRouter = require('./router/category.router');
const productRouter = require('./router/product.router');
const upload = require('./middlewares/upload');
const accountRouter = require('./router/account.router');
const cartRouter = require('./router/cart.router');
const paymentRouter = require('./router/payment.router');
const orderRouter = require('./router/order.router');
const orderDetailRouter = require('./router/orderDetail.router');
const swaggerUI = require('swagger-ui-express');
// const swaggerJsDoc = require('swagger-jsdoc');
const swaggerFile = require('./swagger-output.json')
const PORT = process.env.PORT || 5000;

app.use(cors());

// parse application/x-www-form-urlencoded
app.use( bodyParser.urlencoded({ extended: false }) );

// parse application/json
app.use( bodyParser.json() );

// const option = {
//     definition : {
//         openapi: '3.0.0',
//         info: {
//             title: 'Library API',
//             version: '1.0.0',
//             description: 'A simple express library API of E-Commerce Men Fashion system'
//         },
//         servers: [
//             {
//                 url: "http://127.0.0.1:5000/api/v1"
//             }
//         ],
//     },
//     apis: ["./router/*.js"]
// }

// const specs = swaggerJsDoc(option);

app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerFile))

app.use("/public/images", express.static(__dirname + "/public/images"));

app.use(upload.single("image"));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/payments", paymentRouter);
app.use("/api/v1/orders", orderRouter);
app.use('/api/v1/account', accountRouter)
app.use("/api/v1/carts",cartRouter);
app.use("/api/v1/orderDetail", orderDetailRouter);

app.listen( PORT, () => {
    console.log(`Server is running on port ${PORT}....`);
})
