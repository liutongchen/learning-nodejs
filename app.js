var express = require("express"),
    mongoose = require("mongoose");

var db = mongoose.connect("mongodb://localhost/bookAPI");

var Book = require("./models/bookModel");

var app = express();

var port = process.env.port || 3000;

var bookRouter = express.Router();

bookRouter.route("/Books")
    .get(function(req, res) {
        var responseJson = {greet: "hello"};

        res.json(responseJson);
    })

app.use("/api", bookRouter);

app.get("/", function(req, res) {
    res.send("Welcome to my API!");
});

app.listen(port, function() {
    console.log("Gulp is running on " + port);
})