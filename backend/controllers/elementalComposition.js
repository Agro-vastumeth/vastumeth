var mongoose = require("mongoose");
const elementalSchema = require("../models/compositionModel");
var fetch = require("node-fetch");
var color = require("colors")

// collection creation
var ElementalComposition = mongoose.model(
  "ElementalComposition",
  elementalSchema
);

module.exports = ElementalComposition;

// fetch complete Elemental Composition
module.exports.getComposition = (callback, limit) => {
  console.log("print title");
  ElementalComposition.find(callback);
  // console.log(ElementalComposition.find());
};

// get any value from the model
module.exports.getProcess = (key, callback) => {
  ElementalComposition.find().select(key).exec(callback);
};

// save model data into the database
module.exports.saveElemental = (newElemental, next) => {
  newElemental.save(function (err, result) {
    if (err) {
      console.log(err);
      next(err);
    } else {
      console.log(result);
    }
  });
};

// get the regression prediction
module.exports.getRegressionPrediction = async (req, res, next) => {
  console.log("inside the prediction route");
  try {
    const data = req.body;
    pred = 0;
    console.log("getting the prediction output")
    await fetch("http://127.0.0.1:8000/predict", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
      .then((Response) => Response.json())
      .then((chunk) => {
        console.log(typeof chunk);
        pred = chunk.prediction;
        console.log( color.bgBlue,"final prediction is")
      })
      .catch((err) => console.log("error:", err));
    
    
    next();
  } catch (err) {
    next(err);
  }
};

// get the experimental value greater than the predicted from the database
module.exports.getGreaterThanProduction = (req, res, next) => {
  console.log("inside greater than function 1S ");

  try {
    threshold = pred;
    console.log("threshold:", threshold);
    ElementalComposition.findOne({ experimental_L_par_Kg: { $gte: threshold } })
      .limit(1)
      .sort({ experimental_L_par_Kg: 1 })
      // .select({ totalWaste: 1 })
      .exec((err, response) => {
        if (err) {
          next(err);
        }
        gte = response;
        console.log(gte);
        next();
      });
  } catch (err) {
    console.log("error is coming");
    next(err);
  }
};

// get the experimental value lesser than the predicted from the database
module.exports.getLesserThanProduction = (req, res, next) => {
  console.log("inside lower than function");

  try {
    ElementalComposition.findOne({ experimental_L_par_Kg: { $lte: threshold } })
      .limit(1)
      .sort({ experimental_L_par_Kg: -1 })
      .exec((err, response) => {
        if (err) {
          console.log(err);
          next(err);
        }
        lte = response;

        if (!gte.length) {
          output = lte;
        } else if (!lte.length) {
          output = gte;
        } else {
          uppVar = Math.abs(gte.experimental_L_par_Kg - threshold);
          lowVar = Math.abs(lte.experimental_L_par_Kg - threshold);

          if (uppVar > lowVar) {
            output = lte;
          } else {
            output = gte;
          }
        }

        console.log("response:", output);
        next();
      });
  } catch (err) {
    next(err);
  }
};
