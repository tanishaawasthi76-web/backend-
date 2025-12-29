require('dotenv').config()
const express = require('express')
const app= express()

const port = 4000
app.get('/',(req,res) => {
    res.send('hello world********12345')
})
app.listen(process.env.PORT,()=>{
    console.log(`exqmple app listening on port ${port}`)
})