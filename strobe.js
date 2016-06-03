/**
 * Strobe.js
 * https://github.com/rwaldron/johnny-five/wiki/Getting-Started#hello-world
 */

var five = require('johnny-five'),
  board = new five.Board();

board.on("ready", function() {
  // Create an LED on pin 13.
  var led = new five.Led(13);

  this.repl.inject({
    led: led
  });

  // Strobe the ping on/off, defaults to 100ms phases.
   led.strobe();
});
