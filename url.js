var http=require('http')
const { url } = require('inspector')
http.createServer(
    function(req,res){
        res.write(req,url)
        res.end()
    }
).listen(8080)