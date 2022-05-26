const express = require('express')
const test3 = require('../data/data3.json');
const router = express.Router();



router.get("/", async (req, res) => {
  try {
    res.send(test3);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;