'use strict';

// We’re setting up an extremely simple server here.
var express =   require("express");  
  
var app =   express();  

app.get('/',function(req,res){  
        res.sendFile(__dirname + "/index.html");  
    });  
    
    
  
  
app.listen(5000,function(){  
    console.log("Server is running on port 2000");  
});
