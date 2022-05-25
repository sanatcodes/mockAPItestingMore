const express = require("express");
const app = express();
const trackingInfo = require("./api/tracking");

app.use(express.json({ extended: false }));

app.use("/api/tracking", trackingInfo);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));