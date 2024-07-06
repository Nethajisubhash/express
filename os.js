var http=require('http')
var fs=require('fs')
var os=require('os')
const {log}=require('console')
http.createServer(
    function(req,res){
       console.log(os.platform())
       console.log(os.cpus())
       console.log(os.totalmem())
    }
).listen(8080)
