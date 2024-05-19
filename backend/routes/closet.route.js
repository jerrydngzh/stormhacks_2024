var express = require("express");
var router = express.Router();

var closetService = require("../services/closet.service");

/*
    call the service object functions in /services
    to get the data and return it to the client
*/

// =========== get all clothing ================
router.get("/", (req, res) => {
    res.send("Stub: get all clothes");
});

router.get("/headwear", (req, res) => {
    res.send("Stub: get all headwear");
})

router.get("/top", (req, res) => {
    res.send("Stub: get all tops");
})

router.get("/bottom", (req, res) => {
    res.send("Stub: get all bottoms");
})

router.get("/footwear", (req, res) => {
    res.send("Stub: get all footwear");
})

// =========== create a clothing item
router.post("/", (req, res) => {
    res.send("Stub: create a clothing item");
})

// =========== update a clothing item
router.put("/", (req, res) => {
    res.send("Stub: update a clothing item");
})

// =========== delete a clothing item
router.delete("/", (req, res) => {
    res.send("Stub: delete a clothing item");
})


module.exports = router;