const mongoose = require('mongoose')
//this is a update from zhixiang branch
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    quantity:{
        type:Number,
        require:true,
        default:0
    },
    price:{
        type: Number,
        require:true
    },
    image:{
        tyep:String,
    }
})

    const product =mongoose.model('product',productSchema)

    module.exports=product