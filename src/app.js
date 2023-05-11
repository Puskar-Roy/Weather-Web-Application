const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs")
const path = require("path")

const app = express();
const port =process.env.PORT || 3000;
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("/weather",(req,res)=>{
    res.render("weather");
});

app.get("*",(req,res)=>{
    res.render("error")
});

app.listen(port,()=>{
    console.log(`Server Starting On Port ${port}`);
});
