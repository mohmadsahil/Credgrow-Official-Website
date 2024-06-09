import express from "express";
const app = express();
const PORT = 8000;
import path from "path";

// app.get("/",(req,res)=>{
//     res.send("Server is Activated");
// })

const _dirname = path.dirname("")
const buildpath = path.join(_dirname,"../client/build")
app.use(express.static(buildpath));

app.listen(PORT,(req,res)=>{
    console.log(`App is Listening on PORT ${PORT}`);
})