const express = require('express');
const bodyParser = require("body-parser");
const req = require('express/lib/request');

const app = express();

var items = ["Shop", "Cook", "Eat"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
    var today = new Date();

    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleString("en-us", options);

    res.render("list", { kindOfDay: day, newListItem: items});
});


app.post("/", function(req, res) {
    var item = req.body.newItem;
    items.push(item)
    res.redirect("/");
    
})


app.listen(3000, function () {
    console.log("Server Started on Port 3000");
});