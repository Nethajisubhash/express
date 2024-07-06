const express=require('express')
const app=express()
app.get('/profile/:username',function(req,res){
    res.send(`the profile is for ${req.params.username}`)
})
app.listen(8082)