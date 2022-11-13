const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Index page
app.get("/", function(req, res) {
  res.render("pages/index", {
    pageName: "index"
  });
});

// Login page
app.get("/login", function(req, res) {
  res.render("pages/login", {
    pageName: "login"
  });
});

// Register page
app.get("/register", function(req, res) {
  res.render("pages/register", {
    pageName: "register"
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});