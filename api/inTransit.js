const express = require('express')
const test2 = require('../data/data2.json');
const router = express.Router();



router.get("/", async (req, res) => {
  try {
    res.json(test2);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;