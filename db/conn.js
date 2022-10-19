const mongoose = require("mongoose");

const DB ='mongodb+srv://Jyoti:mernstackpro@cluster0.fp69azs.mongodb.net/Adminlogin?retryWrites=true&w=majority';

mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> console.log("DataBase Connected")).catch((errr)=>{
    console.log(errr);
})