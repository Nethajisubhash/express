const express=require('express')
const mysql=require('mysql2')
const app=express()
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'aits'
})
db.connect(function(error){
    if(error){
        console.log("connection unsuccessfull");
    }
    else{
        console.log("connection successfull")
    }
})
const selectQuery='select * from employee';
app.get('/get_users',function(req,res){
    db.query('select * from employee',function(err,result){
        res.json(result);
    })
})
app.listen(8084)