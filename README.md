Intel® XDK IoT Node.js\* Rotary Servo App
=========================================
See [LICENSE.md](LICENSE.md) for license terms and conditions.

This sample application is distributed as part of the
[Intel® XDK](http://xdk.intel.com). It can also be downloaded
or cloned directly from its git repo on the
[public Intel XDK GitHub\* site](https://github.com/gomobile).

For help getting started developing applications with the
Intel XDK, please start with
[the Intel XDK documentation](https://software.intel.com/en-us/xdk/docs).

See also, the
[mraa library documentation](https://iotdk.intel.com/docs/master/mraa/index.html)
for details regarding supported boards and the mraa library API and the
[upm library documentation](https://iotdk.intel.com/docs/master/upm/) for
information regarding the upm sensor and actuator library APIs.

App Overview
------------
A simple node.js application that demonstrates when rotary angle
sensor is being moved it will make servo motor rotate.

Servo is absolutely a fun motion control device, it can be
located at any position between 0 to 180 degrees. With 4 shafts
in different shapes, this servo is ready to drive a little fan,
lift an object, or mimic a clock hand.

Rotary angle sensor is a 10Kohm linear rotary potentiometer.
It has 300 degrees active range. Also designed as a HID device,
“panel mount” feature is added.

First, you need to verify the mapping between these two sensors
because they have different angles limit, which will help to make
sure when Rotary angle sensor moves, the servo rotates.

```javascript
var degrees = groveRotary.abs_deg();// Get absolute raw radians from AIO pin
servo.setAngle(Math.round(degrees * servoRange/knobRange));
console.log("Set angle to " + degrees);
```

Important App Files
-------------------
* main.js
* package.json

Important Project Files
-----------------------
* README.md
* LICENSE.md
* \<project-name\>.xdk

Tested IoT Node.js Platforms
----------------------------
* [Intel® Galileo Board for Arduino](http://intel.com/galileo)
* [Intel® Edison Board for Arduino](http://intel.com/edison)

This sample can run on other IoT [Node.js](http://nodejs.org) development
platforms, that include the appropriate sensor hardware, but may require
changes to the I/O initialization and configuration code in order to work on
those other platforms.
