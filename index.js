// import .env file
require('dotenv').config()



// server creation
// express
// run


// 1- import express

const express=require('express')
const router=require('./routes/router')
const cors = require('cors')

// 2- create server using express

const server=express()

// integrate front end
server.use(cors())


// to convert all incoming json data to js data
server.use(express.json())

// router set
server.use(router)

// import connection .js file
require('./database/connection')

//3- server run

// port

const port=5000 || process.env.port

server.listen(port, ()=>{
  console.log(`______server started at port number ${port}______`);
})


// // api call resolve - post

// server.post('/register',(req, res)=>{
//   res.send("post is working..")
// })

// server.post('/login',(req, res)=>{
//   console.log(req.body.acno);
//   console.log(req.body.psw);

//   res.send("login worked")
// })

// server.post('/getexc',(req, res)=>{
//   res.send("get worked")
// })