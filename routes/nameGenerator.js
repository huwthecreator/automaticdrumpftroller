var express = require("express")
var router = express.Router()
var _ = require("lodash")

router.post("/api/generate", (req, res) => {
    let drumpfData = req.app.get("drumpfData")
    res.send({
        "name": _.sample(drumpfData.firstprefixes) + _.sample(drumpfData.firstsuffixes) + " " + _.sample(drumpfData.lastprefixes) + _.sample(drumpfData.lastsuffixes)
    })
})

module.exports = router
