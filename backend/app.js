const express = require("express");
const ErrorHandler = require('./middleware/error')
const cors = require('cors')
const user = require("./Control/user")
const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


require('dotenv').config({path:'backend/config/.env'})

app.use('/api/v2',user)
app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Internal Server Error",
    });
});

module.exports = app;



