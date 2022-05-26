//import modules
const express = require("express");
const delivered = require("./api/delivered");
const late = require("./api/late");
const inTransit = require("./api/inTransit");
const start = require("./api/start");

//middleware
const app = express();
app.use(express.json());

//routes
app.use("/api", start);
app.use("/api/tracking/late", late);
app.use("/api/tracking/delivered", delivered);
app.use("/api/tracking/in-transit", inTransit);

//connection
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is running in port ${port}`));