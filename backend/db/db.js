
const mongoose =  require("mongoose")

module.exports = async()=>{
    try{
    await mongoose.connect(process.env.DB_URL)
    console.log(`mongo db connected sucessfully`)

    }
    catch(e){
        console.log(`Went Wrong: ${e.message}`);
        process.exit(0)
    }
}

