const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const authRouter = require('./router/auth.router')
const cors = require('cors');
const userRouter = require('./router/user.router');
const PORT = process.env.PORT || 5000;
// const db = require('./models/db.model');

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1", userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}....`);
})
