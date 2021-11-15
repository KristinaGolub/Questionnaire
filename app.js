const { response } = require("express");
const express = require("express");
const expressHbs = require("express-handlebars");
const hbs = require("hbs");



const app = express();

app.set("view engine", "hbs");

app.engine(
  "hbs",  expressHbs({
        layoutsDir: "views/layouts",
        defaultLayout: "layout",
        extname: "hbs"
    })
);



app.use(express.static(__dirname + "/public"));

app.get("/", function (request, response) {
  response.render("home", {
    title: "   ",
    questions: [
      {
        num: 1,
        text: "Что есть мы?",
        type: 1,
      },
      {
        num: 2,

        text: "Что есть я?",
        type: 1,
      },
      {
        num: 3,
        text: "Что есть они?",
        type: 1,
      },
    ],
  });
});



console.log('http://localhost:3000/')
app.listen(3000);