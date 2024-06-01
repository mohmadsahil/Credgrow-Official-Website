import express from "express";
const app = express();
const PORT = 8000;



app.get("/",(req,res)=>{
    res.send("Server is Activated");
})

app.listen(PORT,(req,res)=>{
    console.log(`App is Listening on PORT ${PORT}`);
})