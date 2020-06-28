
/*Shop floor Server code. Subscribes to mosquitto mqtt broker to listen to msgs from 
the shop floor and writes data to mongoDB in cloud

Note:- you need to set up your own mongoDB cloud connection*/

var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://test.mosquitto.org');
const mongoose = require("mongoose");


// mongoDB cloud connection
mongoose.connect("mongodb+srv://EXAMPLE-USER-NAME:EXAMPLE-PASSWORD@cluster0-8ujvx.mongodb.net/sensorDB", {  // paste your connection string here, db name can be chosen as per your choice
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// Schemas and Models

const msgSchema = new mongoose.Schema({
    sensorID: {
        required: true,
        type: Number
    },
    type: String,
    countTime: {
        required: true,
        type: Number
    },
    redCount: Number,
    blueCount: Number,
    greenCount: Number 
})

const Count = mongoose.model("Count", msgSchema);



client.on('connect', function () {
    client.subscribe('shopfloor/sensors', function (err) {
      if (!err) {
        console.log("sucessfully subsbribed to test mqtt broker");
      }
    })
  })


client.on('message', function (topic, message) {
  
  msg = JSON.parse(message.toString());
//   console.log(msg);
  const data = new Count(msg);
  data.save();


})


