// JS hint ES-version 6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var items = [];

app.get("/", function(req, res) {              //(request, response
      var today = new Date();

      var options ={
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
      };

      var day = today.toLocaleDateString("en-US", options);

      res.render('list', {kindOfDay: day, newListItem: items});
});

app.post("/", function(req, res) {
      var item = req.body.newItem;
      items.push(item);

      res.redirect("/");
});

app.listen(3000, function() {
      console.log("Server started on port 3000.")
});
