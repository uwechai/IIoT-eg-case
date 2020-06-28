
/*Simulation of sensor. Generates a random time series data and publishes to mosquitto mqtt broker in cloud*/

var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://test.mosquitto.org'); // connection to mosquitto mqtt

// processing at the sensor level, generating payload


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

function generateMsg() {

  const timestamp = Date.now()
  const msg = {
    sensorID: 3,
    type: "color",
    countTime: timestamp,
    redCount: getRandomInt(7),
    blueCount: getRandomInt(7),
    greenCount: getRandomInt(7) 
  }
  
  return msg
}

// console.log(generateMsg());

client.on('connect', function () {
    
    client.subscribe('shopfloor/sensors', function (err) {
      if (!err) {
        // publish a msg at a timeinterval
        setInterval(()=> {
          const payload = JSON.stringify(generateMsg()); // converting to JSON format before transporting
          client.publish('shopfloor/sensors', payload)
        }, 10000)                                         // in milliseconds
        
   
      }
    })
  })