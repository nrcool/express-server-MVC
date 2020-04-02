function mymiddleware(req,res,next){

    console.log("from middleware....",req.originalUrl)
    console.log("from middleware....",req.method)

         next() 
 
  
}

module.exports={mymiddleware}