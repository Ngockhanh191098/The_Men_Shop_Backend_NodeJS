const express = require('express');
const cookieParser = require("cookie-parser");
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
const authSocial = require('./router/auth');
const orderDetailRouter = require('./router/orderDetail.router');
const swaggerUI = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');
const passport = require("passport");
const cookieSession = require("cookie-session");
const passportStrategy = require("./passport");
const PORT = process.env.PORT || 5000;




app.use(
	cookieSession({
		name: "session",
		keys: ["cyberwolve"],
		maxAge: 24 * 60 * 60 * 100,
	})
);

app.use(passport.initialize());
app.use(passport.session());

// parse application/x-www-form-urlencoded
app.use( bodyParser.urlencoded({ extended: false }) );
app.use(cookieParser());
// parse application/json
app.use( bodyParser.json() );

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
);

app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerFile))

app.use("/public/images", express.static(__dirname + "/public/images"));

app.use(upload.single("image"));

app.use("/auth", authSocial);
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
    console.log(`Server is running on port ${PORT}....\nAPI documentation: http://localhost:5000/api-doc`);
})
