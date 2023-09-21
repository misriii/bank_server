// create model

// import mongoose

const mongoose=require('mongoose')

// define schema-fields and values of models(collection)

const usersSchema=new mongoose.Schema({
  acno:Number,
  uname:String,
  psw:String,
  balance:Number,
  transactions:[]
})

// model

const users=new mongoose.model("users",usersSchema)


// export model - to import in another files

module.exports=users