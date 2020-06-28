/* Backend for the Counter App. Connects to the MongoDB database in cloud and sends data
to frontend via a REST HTTP API. This API could also be used by other application to retrieve processed data*/

const express = require("express");

const mongoose = require("mongoose");
var cors = require("cors");

const app = express();
app.use(cors());


// mongoDB cloud connection
mongoose.connect("mongodb+srv://EXAMPLE-USER-NAME:EXAMPLE-PASSWORD@cluster0-8ujvx.mongodb.net/sensorDB", {  // paste your connection string here, db name can be chosen as per your choice
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const msgSchema = new mongoose.Schema({
  sensorID: {
    required: true,
    type: Number,
  },
  type: String,
  countTime: {
    required: true,
    type: Number,
  },
  redCount: Number,
  blueCount: Number,
  greenCount: Number,
});

const Count = mongoose.model("Count", msgSchema);

app.get("/counts/sensor1", function (req, res) {
  Count.aggregate([
    { $match: { sensorID: 1 } },
    {
      $group: {
        _id: null,
        totalRed: { $sum: "$redCount" },
        totalBlue: { $sum: "$blueCount" },
        totalGreen: { $sum: "$greenCount" },
      },
    },
  ]).then(function (response) {
    // console.log(response)
    res.json({
      sensorID: 1,
      counts: response,
    });
  });
});

app.get("/counts/sensor2", function (req, res) {
  Count.aggregate([
    { $match: { sensorID: 2 } },
    {
      $group: {
        _id: null,
        totalRed: { $sum: "$redCount" },
        totalBlue: { $sum: "$blueCount" },
        totalGreen: { $sum: "$greenCount" },
      },
    },
  ]).then(function (response) {
    // console.log(response)
    res.json({
      sensorID: 2,
      counts: response,
    });
  });
});

app.get("/counts/sensor3", function (req, res) {
  Count.aggregate([
    { $match: { sensorID: 3 } },
    {
      $group: {
        _id: null,
        totalRed: { $sum: "$redCount" },
        totalBlue: { $sum: "$blueCount" },
        totalGreen: { $sum: "$greenCount" },
      },
    },
  ]).then(function (response) {
    // console.log(response)
    res.json({
      sensorID: 3,
      counts: response,
    });
  });
});


app.get("/counts/sum-10-min", function (req, res) {
  const timeStamp = Date.now();
  Count.aggregate([
    {
      $match: {

          countTime: { $gt: timeStamp - (10*60*1000), $lte: timeStamp } // summing up last 10 mins
 
      },
    },
    {
      $group: {
        _id: null,
        totalRed: { $sum: "$redCount" },
        totalBlue: { $sum: "$blueCount" },
        totalGreen: { $sum: "$greenCount" },
      },
    },
  ]).then(function (response) {
    // console.log(response)
    res.json({
      counts: response,
    });
  });
});



app.listen(process.env.PORT || 3001, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("local server running on port 3001");
  }
});
