const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

const db = require("./models");

mongoose.connect("mongodb://localhost/nyt-vue-scrapper", { useNewUrlParser: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static('./client/dist'));

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('./client/dist'));


require("./controllers/api-routes.js")(app);

app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});