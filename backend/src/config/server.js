
var mongoose=require('mongoose');

require('dotenv').config({path : '/final/mean/backend/.env'});




//testing


//database connection

module.exports.mongodb= function(){

    return new Promise((resolve,reject)=>{

 mongoose.connect(process.env.name,function(err,res){
    if(err){
    reject(err);
}
    else{
    console.log("succesfully connected to the databse")
    resolve("This is from resolve connected to the database");
    }
})
})}

var val=process.env.value
console.log(val)

