const express = require('express')
const test1 = require('../data/data1.json');
const router = express.Router();



router.get("/", async (req, res) => {
  try {
    res.json(test1);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;