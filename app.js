const { response } = require("express");
const express = require("express");
const expressHbs = require("express-handlebars");
const bodyParser = require('body-parser')
const hbs = require("hbs");





const app = express();


// app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
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
        answers: [
          {
            num: 1,
            text: "Я щитаю что нас нет",
          },
          {
            num: 2,
            text: "2",
          },
          {
            num: 3,
            text: "3",
          },
          {
            num: 4,
            text: "4",
          },
        ],
      },
      // {
      //   num: 2,
      //   text: "Что есть я?",
      //   type: 1,
      //   answers: [
      //     {
      //       num: 1,
      //       text: "1",
      //     },
      //     {
      //       num: 2,
      //       text: "2",
      //     },
      //     {
      //       num: 3,
      //       text: "3",
      //     },
      //     {
      //       num: 4,
      //       text: "4",
      //     },
      //   ],
      // },
      // {
      //   num: 3,
      //   text: "Что есть они?",
      //   type: 1,
      // },
    ],
  });
});

app.post("/answers/push", function (request, response) {
    console.log(request.body)
    response.render("thanks")
})


console.log('http://localhost:3000/')
app.listen(3000);