const { json, response } = require("express");
var express = require("express");
const {
  saveElemental,
  getRegressionPrediction,
  getGreaterThanProduction,
  getLesserThanProduction,
  getProcess,
} = require("../controllers/elementalComposition");
var router = express.Router();

elementalcomposition = require("../controllers/elementalComposition");

router.get("/composition", function (req, res, next) {
  getComposition(function (err, elementalCompositions) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log("output: " + elementalCompositions);
      elementalCompositions.map((val) => {
        var chunk = [
          val.carbon,
          val.nitrogen,
          val.hydrogen,
          val.oxygen,
          val.totalWaste,
        ];
      });

      res.send(elementalCompositions);
    }
  });
});

router.get("/find/:key", function (req, res, next) {
  getProcess(req.params.key, function (err, process) {
    if (err) {
      res.send(err);
    } else {
      res.send(process);
    }
  });
});

router.post("/elemental", function (req, res, next) {
  const data = req.body;

  console.log(data);

  var ElementalComposition = new elementalcomposition({
    ...data,
  });

  saveElemental(ElementalComposition);
});

router.post(
  "/predict",
  getRegressionPrediction,
  getGreaterThanProduction,
  getLesserThanProduction,
  (req, res, next) => {
    res.send({
      tmp_L_per_Kg: output.tmp_L_per_Kg,
      experimental_L_par_Kg: output.experimental_L_par_Kg,
      process: output.process,
      predicted: pred,
    });
  }
);

router.get(
  "/compare/:threshold",
  elementalcomposition.getGreaterThanProduction,
  elementalcomposition.getLesserThanProduction,
  function (req, res) {
    res.send(output);

    // elementalcomposition.getGreaterThanProduction(threshold, (err, response) => {
    //   if (err) {
    //     console.log("got an error", err);
    //     return err;
    //   }
    //   // console.log("got the result", response);
    //   egt = response;
    // });

    // elementalcomposition.getLesserThanProduction(threshold, (err, response) => {
    //   console.log("waiting...");
    //   if (err) {
    //     console.log("got an error", err);
    //     return err;
    //   }

    // console.log("got the results", response);
    //   if (response != []) {
    //     // console.log(response);
    //     elt = response;
    //   } else {
    //     console.log("nothing:", response);
    //   }
    // });

    // console.log(egt, elt);
  }
);

module.exports = router;
