const express = require("express");

const app = express();

app.get("/test",(req, res)=>{
    res.send("Test api is running...")
})

app.listen(3000, ()=>{
    console.log("server running on port: 3000")
})