const express = require('express')
const mongoose = require('mongoose')
const productModel = require("./models/productModels")
const app = express()
app.use(express.json())

//get root route
app.get('/', (req,res) => {
    res.send('hello world!')
})

//post route to save the data then store it into the database
app.post('/products', async (req,res) => {
    try {
       const product = await productModel.create(req.body)
       res.status(200).json(product)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
})

//fetch the products data
app.get('/products', async (req,res) => {
    try{
        const products = await productModel.find({})
        res.status(200).json(products)
        console.log(products)
    }catch(error){
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
})

//fectch a single product data
app.get('/products/:id', async (req,res) => {
    try {
        const {id} = req.params
        const product= await productModel.findById(id.trim())
        console.log(product.price);
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:"Product does not exist!"})
    }
})

//update a product
app.put('/products/:id', async (req,res) => {
    try {
        const {id} = req.params
        //if we cannot find any product by that id
        if(! productModel.findById(id.trim())){
            return res.status(500).json({error:"cannot find such product"})
        }
        const product = await productModel.findByIdAndUpdate(id.trim(),req.body)
        const updateProduct = await productModel.findById(id.trim())
         res.status(200).json(updateProduct)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:"Product does not exist!"})
    }
})

//delete a product by id
app.delete('/products/:id', async (req, res) => {
    try {
        const {id} =req.params  //equivilent to const id =req.params.id  this first one using object destructuring
        //if there are no such product by id
        if(! productModel.findById(id)){
            return res.status(500).json({error:"Canot find such product!"})
        }
            await productModel.findByIdAndDelete(id)
            res.status(200).json({message:"Successfully delet the data below: \n"+productModel.findById(id)})
    } catch (error) {
        res.status(500).json({error:"unable to delete the product!"})
    }
})

//connect to mongodb
mongoose.connect('mongodb+srv://admin:TqSxMR87@zhixiangyan.xljb7t8.mongodb.net/node-api?retryWrites=true&w=majority')
.then(() => {
    console.log('Successfully connect to mongodb!')

    //starting the server on port 3000
    app.listen(3000, () => {
        console.log('Successfully connect the server on port 3000')
    })})
.catch((error)=>{
    console.log(error.message)
})
