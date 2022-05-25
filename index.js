const express = require("express");
const app = express();
const delivered = require("./api/delivered");
const late = require("./api/late");
const inTransit = require("./api/inTransit");
const start = require("./api/start");

app.use(express.json({ extended: false }));

app.use("/",start)
app.get("/api/tracking/late", late);
app.get("/api/tracking/delivered", delivered);
app.get("/api/tracking/in-transit", inTransit);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));