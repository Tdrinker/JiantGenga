var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = process.env.PORT || 1337;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.status(200).send("Hello World!\n");
});

app.listen(port, function () {
    console.log("Listening on port " + port);
});


app.post("/hello", function (req, res, next) {
    var userName = req.body.user_name;
    var botPayload = {
        text: "Hello " + userName + ", welcome to the channel!"
    };

    if (userName === "rhooper") {
        botPayload = {
            text:  "Come on Bobby! Seriously! Buy us some woods to cut already"
        };
    } else if (userName === "tliu") {
        botPayload = {
            text:  "Hey Tim, what kinda of block chain do you want to use?"
        };
    } else if (userName === "ggao") {
        botPayload = {
            text:  "Hey Ge. You are amazing."
        };
    }

    if (userName !== "slackbot") {
        return res.status(200).json(botPayload);
    } else {
        return res.status(200).end();
    }

});