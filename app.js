const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
if(process.env.NODE_ENV != "production") {
    require('dotenv').config();
}

app.set("view engine", "ejs");
app.set("views", path.join( __dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join( __dirname, "public")));

app.get("/", (req, res) => {
    res.send("Welcome to my portfolio root page");
});

app.get("/home", (req, res) => {
    res.render("index.ejs", { bodyClass: '' });
});

app.get("/about", (req, res) => {
    res.render("about.ejs", {bodyClass: "bluebg"});
});

app.get("/projects", (req, res) => {
    res.render("projects.ejs", { bodyClass: '' });
});

app.get("/achievements", (req, res) => {
    res.render("achievements.ejs", { bodyClass: '' });
});

app.listen(8080, () => {
    console.log("Server is listening to port 8080");
});