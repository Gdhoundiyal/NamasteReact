const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const paymentRoutes = require("./routes/payments");

//initialize app
const app = express();

//Environment Variable
require("dotenv").config();

//Middlewares
app.use(express.json());
// app.use(express / express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/payment/", paymentRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`app listening on port${port}.....`));
