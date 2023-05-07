// let RFregression = require("ml-random-forest").RandomForestRegression;

// function RandomForest(trainingData) {
//   const trainingSet = new Array(trainingData.length);
//   const predictions = new Array(trainingData.length);
//   testData = [[200, 40, 60, 70]];
//   for (let i = 0; i < trainingData.length; i++) {
//     trainingSet[i] = trainingData[i].slice(0, 4);
//     predictions[i] = [trainingData[i][4]];
//   }

//   console.log(trainingSet);
//   console.log(predictions);

//   const options = {
//     seeds: 5,
//     maxFeatures: 4,
//     replacement: false,
//     nEstimators: 50,
//   };

//   const regression = new RFregression(options);
//   regression.train(trainingSet, predictions);
//   const result = regression.predict(testData);
//   console.log(result)
// }

// module.exports = RandomForest;
