var express=require('express');
var router = express.Router();
var fs = require('fs');
const joi = require('joi')
let present= fs.createWriteStream("present.txt");
let delet=fs.createWriteStream("delete.txt");
let updated=fs.createWriteStream("update.txt");
let added=fs.createWriteStream("add.txt");
var app=express();
const validator = require('express-joi-validation')({})
//importing model
var getmovie=require('/final/mean/backend/src/services/getmovie/getmovie.js');
var addmovie=require('/final/mean/backend/src/services/addmovie/addmovie.js');
var deletemovie=require('/final/mean/backend/src/services/deletemovie/deletemovie.js');
var updatemovie=require('/final/mean/backend/src/services/updatemovie/updatemovie.js');


///////////////////////////////////


var schem = joi.object().keys({
    movieid: joi.number().integer().required(),
    moviename: joi.string().alphanum().min(3).required(),
    rating: joi.number().integer().required()
  
    })
//defining routes
////////////////////////////////////
router.get('/',async function(req,res){

 await getmovie.getMovies( function(err,data){
     if(err) throw err;
      res.json(data)
      console.log(data)
present.write(JSON.stringify(data)+"\n");
  
 }) 

   
 
})
//////////////////////////////
console.log("I am in routes file")
////////////////////////////////////
router.post('/',async function(req,res){
    if(req.body.movieid&&req.body.moviename&&req.body.rating){
        var newmovie={
            movieid:req.body.movieid,
            moviename:req.body.moviename,
            rating:req.body.rating
        } 
    }
    
   if(req.query.movieid&&req.query.moviename&&req.query.rating)
    {
        var newmovie={
            movieid:req.query.movieid,
            moviename:req.query.moviename,
            rating:req.query.rating
        }
    }

    

   
  //  var newmovie={
   //     movieid:req.body.movieid,
    //    moviename:req.body.moviename,
     //   rating:req.body.rating
//    }
await joi.validate(newmovie, schem,async function (err, value) {
    // Value is the parsed and validated document.
    if (err) {
     console.log("please enter valid details")}
     else{
      await   addmovie.addMovies(newmovie, function(err,data){
            if(err) throw err;
            res.json(data)
            console.log(data)
          
            added.write(JSON.stringify(data)+"\n");
           
        })
     }
  });
})
////////////////////////////////////////////////////////////////////

router.delete('/:_id',async function(req,res){
  
   deletemovie.deleteMovie(req.params._id,function(err,data){
        if(err) throw err;
        res.json(data);
        delet.write(JSON.stringify(data)+"\n");
    })


})


///////////////////////////////////////////////////////////////////
router.put('/:_id', async function(req,res){
   
    var newmovie={
        movieid:req.body.movieid,
        moviename:req.body.moviename,
        rating:req.body.rating
    }
 await   joi.validate(newmovie, schem,async function (err, value) {
        // Value is the parsed and validated document.
        if (err) {
         console.log("please enter valid details")}
         else{
    await updatemovie.updateMovie(req.params._id,newmovie,function(err,data){
        if(err) throw err;
        res.json(data); 
        console.log(data);

        updated.write(JSON.stringify(data)+"\n");
    })
    console.log(data)
}


    })
});
    ////////////////////////////////

module.exports=router