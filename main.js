/*
 * Rotates a servo motor. Turn the knob on a rotary angle sensor to control
 * the relative position of a step motor.
 *
 * This can be done using one of two methods:
 *
 * Use the UPM library, which contains direct support for the LCD device.
 *
 * Alternatively, drive the LCD directly from JavaScript using the I2C
 * interface directly. This approach is useful for learning about using the
 * I2C bus. The LCD file is an implementation in JavaScript for some common
 * LCD functions.
 *
 * Supported Intel IoT development boards are identified in the code.
 *
 * See LICENSE.md for license terms and conditions.
 *
 * https://software.intel.com/en-us/xdk/docs/using-templates-nodejs-iot
 */

/* spec jslint and jshint lines for desired JavaScript linting */
/* see http://www.jslint.com/help.html and http://jshint.com/docs */
/* jslint node:true */
/* jshint unused:true */

"use strict" ;


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