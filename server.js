const express = require ('express');

const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res){
    res.render("pages/index");
})

app.get("/sobre", function (req, res){
    res.render("pages/abbout");
})

app.listen(8080);

console.log ("Rodando o site...");