function mymiddleware(req,res,next){

    console.log("from middleware....",req.originalUrl)
    console.log("from middleware....",req.method)
    if(req.method==="POST"){
        res.send("Response from middleware")
    }else{
         next() 
    }
  
}

module.exports={mymiddleware}