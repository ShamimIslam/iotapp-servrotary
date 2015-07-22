*jslint node:true, vars:true, bitwise:true, unparam:true */
/*jshint unused:true */
// Leave the above lines for propper jshinting
//Type Node.js Here :)

var servoModule = require("jsupm_servo");
var upm_grove = require("jsupm_grove"); 

//Instantiate ES08A Servo module on GPIO 5 and grove rotary 

var servo = new servoModule.ES08A(5);
var groveRotary = new upm_grove.GroveRotary(0);

var servoRange = 160;
var knobRange = 300;

// function to initialize servo

// timeOffset: how long after hitting "run"

// should we start this servo instance

// timeInterval: how frequently should this instance run after timeOffset

// angle: the  angle for this instance


function startServo(timeOffset, timeInterval)

{

    // Start running this instance after timeOffset milliseconds

    setTimeout(function()

    {

        // run this instance every timeInterval milliseconds

        setInterval(function()

        {
            var degrees = groveRotary.abs_deg();// Get absolute raw radians from AIO pin 
            servo.setAngle(Math.round(degrees * servoRange/knobRange));
            console.log("Set angle to " + degrees);

        }, timeInterval);

    }, timeOffset);

// timeOffset tells setTimeout when to execute the function specified in the first param

}

// start immediately, run every 10  miliseconds.

startServo(0, 10);

// Print message when exiting

process.on('SIGINT', function()

{

    console.log("Exiting...");

    process.exit(0);

});