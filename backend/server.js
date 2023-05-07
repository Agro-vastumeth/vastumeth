const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
var mongodb = require("mongodb");
var mongoose = require("mongoose");
dotenv.config();

// middlewares
const app = express();
app.use(cors());
app.use(express.json({ extended: false }));
const PORT = process.env.PORT || 5000;

// connect db
mongoose
  .connect("mongodb://127.0.0.1:27017/elementalComposition")
  .then(() => {
    console.log(colors.bgGreen("...database connected"));
  })
  .catch((err) => {
    console.log(err);
  });

// global errorHandler
const errorHandler = (err, req, res, next) => {
  if (err) {
    res.send("there is an error, try again later");
  }
};

// route redirect
const elementalComposition = require("./routes/elementalcompositions");

// global route
app.use("/calculate", elementalComposition);
app.use(errorHandler);

// app start
app.listen(PORT, function () {
  console.log(colors.bgCyan(`server has started on port ${PORT}`));
});
