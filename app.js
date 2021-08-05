// JS hint ES-version 6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

app.get("/", function(req, res) {              //(request, response
      var d = new Date();
      var dayName = days[d.getDay()];

      // var today = new Date();  
      // var day = "";
      // if(today.getDay() == 6 || today.getDay() == 0)
      // {
      //       day="Weekend";
      // }
      // else
      // {
      //       day="Weekday";
      // }

      res.render('list', {kindOfDay: dayName});
});


app.listen(3000, function() {
      console.log("Server started on port 3000.")
});
