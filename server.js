var express = require("express")
var app = express()
var port = process.env.PORT || 6969

app.use(express.static("static"))
app.set("drumpfData", require("./data/data.json"))
app.set("view engine", "pug")
app.use(require("./routes/index"))
app.use(require("./routes/nameGenerator"))
app.listen(port, () => {
    console.log("Listening on " + port)
})