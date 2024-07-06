const express=require('express')
const app=express()
app.get('/product/:sportname',function(req,res){
    res.send(`the product list is for ${req.params.sportname}`)
})
app.listen(8082)