const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");

dotenv.config();

// middlewares
const app = express();
app.use(cors());
app.use(express.json({ extended: false }));
const PORT = process.env.PORT || 5000;

// route redirect
const wml = require("./routes/api/wml.js")
app.use("/api/wml", wml)

// app start

app.listen(PORT, function () {
  console.log(`server has started on port ${PORT}`.yellow.bold);
});
