const express = require('express');
const { dirname } = require('path');
require('dotenv').config();
const path = require('path');
const db = require('./dbconnection');

const app = express();

db.connect((err) =>{
    if(err){
        console.log(err);
    }else{
        console.log("connected to database");
    } 
})

app.get("/api/post",(req,res) => {
    res.json({"id":1,"content":"Good Morning!"})
})

if(process.env.environment === "production"){
    app.use(express.static(path.resolve(__dirname, './client/build')))
    app.get("*", (req,res) => {
        res.sendFile(express.static(path.resolve(__dirname,"./client/build","index.html")))
    })
}



let PORT = process.env.PORT || 5000;
app.listen(PORT, () => {console.log(`Application running at ${PORT}`)})