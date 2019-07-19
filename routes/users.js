var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("why not?");
});

router.post("/", function(req, res, next) {
  res.send({
    id: 1,
    msg: "success"
  });
});
module.exports = router;
