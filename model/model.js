const mongoose = require("mongoose");
const {Schema , model} = mongoose;

const CoffeeSchema = new Schema({
    coffeeName: {type:String , required:true},
    price: {type:Number,required:true},
    desc: {type:String , default:"Delicious coffee"}
})

const CoffeeDB = model("Coffees" , CoffeeSchema);
module.exports = CoffeeDB