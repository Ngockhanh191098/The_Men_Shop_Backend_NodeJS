const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const authRouter = require('./router/auth.router')
const cors = require('cors');
const userRouter = require('./router/user.router');
const categoryRouter = require('./router/category.router');
const productRouter = require('./router/product.router');
const upload = require('./middlewares/upload');
const PORT = process.env.PORT || 5000;

app.use(cors());

// parse application/x-www-form-urlencoded
app.use( bodyParser.urlencoded({ extended: false }) );

// parse application/json
app.use( bodyParser.json() );

app.use("/public/images", express.static(__dirname + "/public/images"));

app.use(upload.single("image"));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/category", categoryRouter)
app.use("/api/v1/product", productRouter)


app.listen( PORT, () => {
    console.log(`Server is running on port ${PORT}....`);
})
