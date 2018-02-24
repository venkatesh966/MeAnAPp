var movie=require('/final/mean/backend/src/services/model.js')

module.exports.deleteMovie= function(id,callback)
{
    return new Promise((resolve)=>{
console.log("I am in deletemovie.js");
   resolve(movie.findByIdAndRemove(id,callback));
    });
}