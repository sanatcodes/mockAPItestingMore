const express = require('express')
const app = express();
const test1 = require('../data/data1.json');
const test2 = require('../data/data2.json');
const port = 8080;
const router = express.Router();
// //Middleware
// app.use('/v3/trackings/get', () => {
//     console.log("middleware called");
// })

// app.listen( port, () => {
//     console.log(`running on port:${port}`);
// });

// app.get('/v3/trackings/test1', (req, res) => {
//     res.send(test1);
// });

// app.get('/v3/trackings/test2', (req, res) => {
//     res.send(test2);
// });


router.get("/", async (req, res) => {
  try {
    res.json({
      status: 200,
      message: "Get data has successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

// router.get("/v3/trackings/test2", async (req, res) => {
//     try {
//       res.json(data1);
//     } catch (error) {
//       console.error(error);
//       return res.status(500).send("Server error");
//     }
// });

module.exports = router;