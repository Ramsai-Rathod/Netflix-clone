const express=require("express");
const cors=require("cors");
const mongoose=require ("mongoose");
const  userRoutes=require('./routes/UserRoutes')
const app=express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://0.0.0.0:27017/netflix",{
    useNewUrlParser:true,
useUnifiedTopology: true,
}).then(()=>{
    console.log("db connected")})
    .catch((error)=>{
        console.log(error.message);
    })

    app.use("/api/user",userRoutes);
app.listen(5000,console.log("sever ready"));
