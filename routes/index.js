var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/* GET session in. */
router.get("/session-in", function (req, res, next) {
  req.session.song = "be bop a lula";
  res.render("layout", { body: "Song stored in session..." });
});

/* GET session out. */
router.get("/session-out", function (req, res, next) {
  res.render("layout", {
    body: `Song stored in session is: ${req.session.song}`,
  });
});

module.exports = router;
