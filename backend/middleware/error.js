
const ErrorHandler = require('../utils/Error')


module.exports = (err, req, res, next) => {
    err.message = err.message || 'Something went wrong';
    err.statuscode = err.statuscode || 500;


module.exports=(err,req,res,next)=>{
    err.message=err.message||'something went wrong'
    err.statuscode=err.statuscode

    if(err.name=="CastError"){//mongodb id error-->mongodb should have 14 digit hexa decimal number if not we will get cast error
        const message="send the correct id"

    }

    if(err.name=="11000"){
        const message="id already exist"

    }

    if (err.name === "JsonWebTokenError") {
        const message = "Invalid token, please log in again";
        err = new ErrorHandler(message, 401);
    }

    if (err.name === "TokenExpiredError") {
        const message = "Token has expired, please log in again";
        err = new ErrorHandler(message, 401);
    }

    res.status(err.statuscode).json({

        success:"false",
        message:err.message
    })
    res.status(400).send(message)

}

