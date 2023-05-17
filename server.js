const express = require('express')
const app = express()

//get root route
app.get('/', (req,res) => {
    res.send('hello world')
})
//starting the server on port 3000
app.listen(3000, () => {
    console.log('Successfully connect the server on port 3000')
})