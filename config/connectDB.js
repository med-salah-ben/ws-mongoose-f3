const mongoose = require("mongoose");

const connectDB = async()=>{
    try {
         await mongoose.connect('mongodb://localhost:27017/ws-mongoose-f3');
        
        console.log("database is connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB