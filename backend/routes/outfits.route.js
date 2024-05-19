var express = require("express");
var router = express.Router();

/*
    call the service object functions in /services
    to get the data and return it to the client
*/

router.get("/", (req, res) => {
    res.send("Stub: get all outfits");
});

router.post("/", (req, res) => {
    res.send("Stub: create an outfit");
})

router.put("/", (req, res) => {
    res.send("Stub: update an outfit");
});

router.delete("/", (req, res) => {
    res.send("Stub: delete an outfit");
});


module.exports = router;