const app = require("./app")
const ConnectDB = require('./db/db')

process.on('uncaughtException',(err)=>{
    console.log(`Error:${err.message}`)
    process.exit(0);    
})


if(process.env.NODE_ENV !== "PRODUCTION"){
    require('dotenv').config({path:'config/.env'})
}


ConnectDB()



app.listen(process.env.PORT,()=>{
    console.log("Success!!")
})