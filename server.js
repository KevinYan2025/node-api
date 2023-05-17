const express = require('express')
const mongoose = require('mongoose')
const app = express()


//connect to mongodb
mongoose.connect('mongodb+srv://yan767957598:TqSxMR87@zhixiangyan.xljb7t8.mongodb.net/product?retryWrites=true&w=majority')
.then(() => {
    console.log('Successfully connect to mongodb!')
}).catch(console.error())

//get root route
app.get('/', (req,res) => {
    res.send('hello world!')
})
app.post('')
//starting the server on port 3000
app.listen(3000, () => {
    console.log('Successfully connect the server on port 3000')
})