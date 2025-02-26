const express = require("express");
const ErrorHandler = require('./middleware/error')
const cors = require('cors')
const user = require("./Control/user")
const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/",express.static('uploads'))


require('dotenv').config({path:'backend/config/.env'})

app.use('/api/v2',user)
app.use(ErrorHandler)

module.exports = app;



