var movie=require('/final/mean/backend/src/services/model.js')

module.exports.addMovies=function(newmovie,callback)
{
    return new Promise((resolve)=>{
        console.log("I am in addmovie.js")
        movie.create(newmovie,callback)
           resolve();
            });
}