const express = require("express");
const routes = require("./routes/route");
const app = express();
app.use(routes);
app.listen(3000);
