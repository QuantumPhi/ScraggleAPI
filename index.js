var express    = require("express"),
    bodyparser = require("body-parser"),
    app        = express(),
    port       = process.env.PORT || 8080

app.use(bodyparser.urlencoded({ extended: true}))
app.use(bodyparser.json())
app.use(function(req, res, next) {
    console.log("Time: %d -> %s", Date.now(), req.path)
    next()
})

app.get("/board", function(req, res) {
    var letters = "abcdefghijklmnopqrstuvwxyz"
    var text = ""

    for(var i = 0; i < 16; i++)
        text += letters.charAt(Math.floor(Math.random() * letters.length))

    res.json({ "letters": text })
})

app.listen(port)
console.log("API is located on port: %d", port)
