const express = require('express');
require("dotenv").config({path:"./config/.env"});

const connectDB = require("./config/connectDB");
const CoffeeDB = require('./model/model')

const app = express();
connectDB();

// NEW Coffee
const Coffee = new CoffeeDB({coffeeName:"jus" , price:2})
// Coffee.save((err)=>{
//     err? console.log(err) : console.log(Coffee)
// })

//find All
const searchCoffees = async ()=>{
    try {
        const data = await CoffeeDB.find({})
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

// searchCoffees();

const query = {coffeeName:"jus"};
const UpdateCoffee = async ()=>{
    try {
        const data = await CoffeeDB.findOneAndUpdate(query,{coffeeName:"Black Coffee"})
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

// UpdateCoffee();

//Find Coffee and Delete

const DeleteCoffee = async ()=>{
    try {
        await CoffeeDB.findOneAndDelete({_id:"638f2fc89d5b550fbdf365e9"},(data,err)=>{
            err? console.log(err) : console.log(data)
        })
    } catch (error) {
        console.log(error)
    }
}

DeleteCoffee();

const PORT =  process.env.PORT || 5000;
console.log(PORT)

app.listen(PORT , (err)=>err?
console.log(err)
:console.log(`server is running on port ${PORT}`))