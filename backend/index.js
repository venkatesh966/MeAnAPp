var express=require('express');
var mongoose=require('mongoose');
var cors=require('cors');
var bodyparser=require('body-parser');
var app=express();
var fs=require('fs');

app.get('/',async function(req,res)
{
     await res.send("Hi I am venki")
    })

   var mongodb=require('/final/mean/backend/src/config/server.js')

   var mongoconnection= async function()
   {
     var result =  await mongodb.mongodb();
     console.log(result)
   }

   mongoconnection();
 console.log("I am checking jenkins");

    app.use(bodyparser.urlencoded({extended:true}));
    app.use(bodyparser.json());
    app.use(cors());

    var route=require('/final/mean/backend/src/routes/routes');
    app.use('/api/movies',route)

    app.listen(3000,()=>{
        
        console.log("Currently connected to the port 3000")
    })

    module.exports=app;
