const express = require('express');
const bodyParser = require("body-parser");
const req = require('express/lib/request');

const app = express();

let items = ["Shop", "Cook", "Eat"];
let workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function (req, res) {

    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleString("en-us", options);

    res.render("list", { listTitle: day, newListItems: items});
});


app.post("/", function(req, res) {

    let item = req.body.newItem;
    console.log(req.body.list)

    if (req.body.list === "Work List") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item) 
        res.redirect("/");
    }
        
});

app.get("/work", function(req, res) {
    res.render("list", {listTitle: "Work List", newListItems: workItems});
})




app.listen(3000, function () {
    console.log("Server Started on Port 3000");
});