const express=require('express')
const app=express()
app.get('/login',function(req,res){
    res.send("login page")
})
app.get('/register',function(req,res){
    res.send("register page")
})
app.listen(8082)