var express    = require("express"),
    bodyparser = require("body-parser"),
    app        = express()

app.use(bodyparser.urlencoded({ encoded: true}))
app.use(bodyparser())
app.use(function(req, res, next) {
    console.log("Time: %d -> %s", Date.now(), req.path)
    next()
})
