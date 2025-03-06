const express = require("express");
const ErrorHandler = require('./middleware/error')
const cors = require('cors')
const user = require("./Control/user")
const app = express();
const path = require('path')
const product = require("./Control/Product")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/",express.static('uploads'))


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/products', express.static(path.join(__dirname, 'products')));
require('dotenv').config({path:'backend/config/.env'})

app.use('/api/v2',user)
app.use('/api/product',product)
app.use(ErrorHandler)

module.exports = app;



