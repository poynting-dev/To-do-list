// JS hint ES-version 6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const date = require(__dirname + "/date.js");

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

const items = [];
workItems=[];

app.get("/", function(req, res) {              //(request, response
      const day = date.getDay();

      res.render('list', {listTitle: day, newListItem: items});
});

app.post("/", function(req, res) {
      let item = req.body.newItem;
      if(req.body.list === 'Work') {
            workItems.push(item);
            res.redirect("/work");
      } else {
            items.push(item);
            res.redirect("/");
      }
});

app.get("/work", function(req, res) {
      res.render("list", {listTitle: "Work", newListItem: workItems});
});


app.listen(3000, function() {
      console.log("Server started on port 3000.")
});
