const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!!!!");
});
//main branch - main
module.exports = router;
