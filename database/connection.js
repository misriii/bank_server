const mongoose = require('mongoose')


mongoose.connect(process.env.BASE_URL,{
  useUnifiedTopology:true,
  useNewUrlParser:true
}).then(()=>{
  console.log("-------mongodb atlast connected-------");
}).catch(()=>{
  console.log("-------not connected--------");
})