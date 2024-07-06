const express=require('express')
const app=express()
app.get('/',function(req,res){
    res.send("this is my express program")
})
app.listen(8082)