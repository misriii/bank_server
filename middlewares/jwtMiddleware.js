const jwt=require('jsonwebtoken')

const jwtMiddleware=(req,res,next)=>{
    try{
        // access token from headers
        const token=req.headers['access_token']

        // true/false
        jwt.verify(token,"secretkey123")
        next()
    } catch{
        // console.log('catch')
        res.status(404).json({
            status:false,
            message:"Please login",
            statusCode: 401

        })
    }
}

module.exports={jwtMiddleware}