var movie=require('/final/mean/backend/src/services/model.js')

module.exports.getMovies= function(callback)
{
    return new Promise((resolve)=>{
        console.log("I am in getmovie.js")
           resolve(movie.find(callback));
            });
}