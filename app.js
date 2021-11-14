const express = require("express");
const expressHbs = require("express-handlebars");
const hbs = require("hbs");



const app = express();



app.engine(
  "hbs",
  expressHbs({
    layoutsDir: "views/layouts",
    defaultLayout: "layout",
    extname: "hbs",
  }),
  // helpers: 
);

hbs.registerHelper("isEqual", function (value1, value2) {
  // console.log("asdasd");
  return value1 == value2;
});
app.set("view engine", "hbs");

app.use(express.static(__dirname + "/public"));

app.get("/", function (request, response) {
  response.render("home", {
    title: "   ",
    questions:[
      {
        text: 'ААА',
        type: 1
      }
    ]
  });
});

console.log('http://localhost:3000/')
app.listen(3000);
